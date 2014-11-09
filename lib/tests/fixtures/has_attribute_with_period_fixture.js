// Fixture for has function
// Object literals with attributes to test against

var has_attribute_with_period_fixture = {
    "hello": {
        "world": {
            "foo.bar": {
                "baz": true
            }
        }
    }
};

if (typeof module !== "undefined") {
    module.exports = has_attribute_with_period_fixture;
}

// End of file
