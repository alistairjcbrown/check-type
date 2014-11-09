// Fixture for has function
// Functions with properties to test against

var has_property_with_period_fixture = function(){};

has_property_with_period_fixture.hello = function(){};
has_property_with_period_fixture.hello.world = function(){};
has_property_with_period_fixture.hello.world["foo.bar"] = function(){};
has_property_with_period_fixture.hello.world["foo.bar"].baz = true;
has_property_with_period_fixture.hello.world[".foo bar"] = function(){};
has_property_with_period_fixture.hello.world[".foo bar"].baz = true;
has_property_with_period_fixture.hello.world["foo bar."] = function(){};
has_property_with_period_fixture.hello.world["foo bar."].baz = true;

if (typeof module !== "undefined") {
    module.exports = has_property_with_period_fixture;
}

// End of file
