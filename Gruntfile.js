/*
 * Grunt file
 *
 * - Run JSHint
 * - Run Mocha tests
 *
 * @author Alistair Brown <github@alistairjcbrown.com>
 */

module.exports = function(grunt) {
    "use strict";

    // Expressions for matching files
    var js_files   = [
            "./*.js",
            "./**/*.js",
            "!./node_modules/**/*.js",
            "!./.git/"
        ],
        test_files = [
            "./*.test.js",
            "./**/*.test.js",
            "!./node_modules/**/*.test.js",
            "!./.git/"
        ],
        jshint, mocha;

    // ------

    jshint = {
        "all": js_files,
        "options": {
            "curly":      true,
            "devel":      false,
            "eqeqeq":     true,
            "eqnull":     true,
            "expr":       true,
            "immed":      true,
            "indent":     4,
            "latedef":    true,
            "maxdepth":   3,
            "maxlen":     140,
            "maxparams":  10,
            "newcap":     true,
            "noarg":      true,
            "noempty":    true,
            "quotmark":   "double",
            "strict":     true,
            "trailing":   true,
            "undef":      true,
            "unused":     true,
            "globals": {
                "_":        true,
                "define":   true,
                "module":   true,
                "require":  true,
                "suite":    true,
                "test":     true,
                "setup":    true,
                "teardown": true,
                "window":   true
            }
        }
    },
    mocha = { /* Runs mocha tests */
        "test": {
            "src": test_files,
            "options": {
                "reporter": "spec",
                "log":      true,
                "ui":       "tdd"
            }
        }
    };

    grunt.initConfig({
        "pkg":       grunt.file.readJSON("package.json"),
        "jshint":    jshint,
        "mochaTest": mocha
    });

    // Load Tasks
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mocha-test");

    // Define tasks
    grunt.registerTask("hint",    [ "jshint" ]);
    grunt.registerTask("test",    [ "mochaTest" ]);
    grunt.registerTask("go",      [ "hint", "test" ]);
    grunt.registerTask("default", [ "go" ]);

};

// End of file