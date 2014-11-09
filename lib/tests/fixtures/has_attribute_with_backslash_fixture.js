// Fixture for has function
// Object literals with attributes to test against

var has_attribute_with_backslash_fixture = {
    "hello": {
        "world": {
            "foo\\bar": {
                "baz": true
            },
            "\\foo bar": {
                "baz": true
            },
            "foo bar\\": {
                "baz": true
            }
        }
    }
};

if (typeof module !== "undefined") {
    module.exports = has_attribute_with_backslash_fixture;
}

// End of file
