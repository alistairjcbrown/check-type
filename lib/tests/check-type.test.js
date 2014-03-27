
// When testing on nodejs
if (typeof module !== "undefined") {
    var chai = require("chai"),
        sinon = require("sinon"),
        sinon_chai = require("sinon-chai"),
        check = require("../check-type");

    chai.use(sinon_chai);
}

(function(chai, sinon, check) {
    "use strict";

    var expect = chai.expect,
        attribute_fixture, property_fixture;

    attribute_fixture = {
        "hello": {
            "world": {
                "foo": {
                    "bar": true
                }
            }
        }
    };

    property_fixture = function(){};
    property_fixture.hello = function(){};
    property_fixture.hello.world = function(){};
    property_fixture.hello.world.foo = function(){};
    property_fixture.hello.world.foo.bar = true;


    suite("Check Type", function() {

        test("should exist", function() {
            expect(check).to.be.a("function");
        });

        test("should return object with `is` and `has` functions", function() {
            var check_resp = check("test");

            expect(check_resp).to.be.an("object");
            expect(check_resp.is).to.be.a("function");
            expect(check_resp.has).to.be.a("function");
        });

        suite("init", function() {

            setup(function() {
                // Clear existing functions
                check.clear();
            });


            test("should exist", function() {
                expect(check.init).to.be.a("function");
            });

            test("should use function source if provided", function() {
                check.init({
                    isHello: function(value) {
                        return value === "hello";
                    }
                });
                expect(check("hello").is("Hello")).to.be.true;
            });

            test("should use underscore if function source is not provided", function() {
                check.init();
                expect(check("hello").is("string")).to.be.true;
            });

            test("should not overwrite existing type testing functions on subsequent init calls", function() {
                check.init({
                    isEmpty: function(value) {
                        return value === "empty";
                    }
                });
                check.init();

                expect(check("empty").is("empty")).to.be.true;
                expect(check(undefined).is("empty")).to.be.false;
            });

            test("should overwrite existing type testing functions on subsequent init calls when flag passed", function() {
                check.init({
                    isEmpty: function(value) {
                        return value === "empty";
                    }
                });
                check.init(undefined, true);

                expect(check("empty").is("empty")).to.be.false;
                expect(check(undefined).is("empty")).to.be.true;
            });

        });

        suite("Is function", function() {

            setup(function() {
                // Clear existing functions and init with underscore functions
                check.clear()
                     .init();
            });

            test("should exist", function() {
                expect(check("test").is).to.be.a("function");
            });

            test("should throw error if type is not a string", function() {
                expect(function() {
                    check("test").is();
                }).to.throw(Error);
            });

            test("should throw error for unknown type", function() {
                var type = "foo";
                expect(function() {
                    check("test").is(type);
                }).to.throw(Error);
            });

            test("should be case insensitive for type string", function() {
                expect(check("test").is("string")).to.be.true;
                expect(check("test").is("String")).to.be.true;
                expect(check("test").is("sTrInG")).to.be.true;
            });

            suite("Is Not function", function() {

                test("should exist", function() {
                    expect(check("test").is.not).to.be.a("function");
                });

                test("should call is", function() {
                    var check_test = check("test");
                    sinon.spy(check_test, "is");

                    check_test.is.not("string");

                    expect(check_test.is).to.be.calledOnce;
                });

                test("should return negated result", function() {
                    var check_test = check("test");

                    expect(check_test.is("string")).to.be.true;
                    expect(check_test.is.not("string")).to.be.false;
                });

            });

            suite("Underscore.js functions", function() {

                test("should return boolean for empty", function() {
                    var type = "empty";
                    expect(check("test").is(type)).to.be.false;
                    expect(check({}).is(type)).to.be.true;
                    expect(check("").is(type)).to.be.true;
                });

                test("should return boolean for array", function() {
                    var type = "array";
                    expect(check("test").is(type)).to.be.false;
                    expect(check([]).is(type)).to.be.true;
                });

                test("should return boolean for object", function() {
                    var type = "object";
                    expect(check("test").is(type)).to.be.false;
                    expect(check({}).is(type)).to.be.true;
                });

                test("should return boolean for arguments", function() {
                    var type = "arguments";
                    expect(check("test").is(type)).to.be.false;
                    expect(check(arguments).is(type)).to.be.true;
                });

                test("should return boolean for function", function() {
                    var type = "function";
                    expect(check("test").is(type)).to.be.false;
                    expect(check(function(){}).is(type)).to.be.true;
                });

                test("should return boolean for string", function() {
                    var type = "string";
                    expect(check(123).is(type)).to.be.false;
                    expect(check("test").is(type)).to.be.true;
                });

                test("should return boolean for number", function() {
                    var type = "number";
                    expect(check("test").is(type)).to.be.false;
                    expect(check(123).is(type)).to.be.true;
                    expect(check(Infinity).is(type)).to.be.true;
                });

                test("should return boolean for finite", function() {
                    var type = "finite";
                    expect(check("test").is(type)).to.be.false;
                    expect(check(123).is(type)).to.be.true;
                    expect(check(Infinity).is(type)).to.be.false;
                });

                test("should return boolean for boolean", function() {
                    var type = "boolean";
                    expect(check("test").is(type)).to.be.false;
                    expect(check(false).is(type)).to.be.true;
                });

                test("should return boolean for date", function() {
                    var type = "date";
                    expect(check("test").is(type)).to.be.false;
                    expect(check( new Date() ).is(type)).to.be.true;
                });

                test("should return boolean for date", function() {
                    var type = "RegExp";
                    expect(check("test").is(type)).to.be.false;
                    expect(check( new RegExp() ).is(type)).to.be.true;
                });

                test("should return boolean for not a number", function() {
                    var type = "NaN";
                    expect(check("test").is(type)).to.be.false;
                    expect(check( "test" / 1 ).is(type)).to.be.true;
                });

                test("should return boolean for null", function() {
                    var type = "null";
                    expect(check("test").is(type)).to.be.false;
                    expect(check(null).is(type)).to.be.true;
                });

                test("should return boolean for undefined", function() {
                    var type = "undefined";
                    expect(check("test").is(type)).to.be.false;
                    expect(check(undefined).is(type)).to.be.true;
                });

            });

        });

        suite("Has function", function() {

            test("should exist", function() {
                expect(check("test").has).to.be.a("function");
            });

            test("should throw error if path is not a string", function() {
                expect(function() {
                    check("test").is();
                }).to.throw(Error);
            });

            test("should return true when path exists", function() {
                var has_attribute_path = check(attribute_fixture).has("hello.world.foo.bar"),
                    has_property_path = check(property_fixture).has("hello.world.foo.bar");
                expect(has_attribute_path).to.be.true;
                expect(has_property_path).to.be.true;
            });

            test("should return false when path does not exit", function() {
                var has_attribute_path = check(attribute_fixture).has("hello.everyone.foo.bar"),
                    has_property_path = check(property_fixture).has("hello.everyone.foo.bar");
                expect(has_attribute_path).to.be.false;
                expect(has_property_path).to.be.false;
            });

        });

    });

})(chai, sinon, check);

// End of file