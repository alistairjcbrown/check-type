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
    var js_files = [
            "./*.js",
            "./**/*.js",
            "!./node_modules/**/*.js",
            "!./**/node_modules/**/*.js",
            "!./.git/"
        ],
        test_files = [
            "./*.test.js",
            "./**/*.test.js",
            "!./node_modules/**/*.test.js",
            "!./**/node_modules/**/*.test.js",
            "!./.git/"
        ],
        test_pages = [
            "./*.test.html",
            "./**/*.test.html",
            "!./node_modules/**/*.test.html",
            "!./**/node_modules/**/*.test.html",
            "!./.git/"
        ],
        mocha_task = [ "mochaTest", "mocha" ],
        jshint, mocha_nodejs, mocha_browser;

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
                "_":         true,
                "define":    true,
                "module":    true,
                "require":   true,
                "suite":     true,
                "test":      true,
                "setup":     true,
                "teardown":  true,
                "window":    true,
                "__dirname": true
            }
        }
    },
    // Run mocha tests in node
    mocha_nodejs = {
        "test": {
            "src": test_files,
            "options": {
                "reporter": "spec",
                "ui":       "tdd"
            }
        }
    },
    // Run mocha tests in browser
    mocha_browser = {
        "test": {
            "src": test_pages,
            "options": {
                "reporter": "Spec",
                "log":      true,
                "ui":       "tdd",
                "run":      true
            }
        }
    };

    grunt.initConfig({
        "pkg":       grunt.file.readJSON("package.json"),
        "jshint":    jshint,
        "mochaTest": mocha_nodejs,
        "mocha":     mocha_browser
    });

    // Load Tasks
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-mocha");


    // Allow parameter after test
    if (process.argv[2] === "test") {
        if (grunt.option("nodejs")) {
            mocha_task = [ mocha_task[0] ];
        } else if (grunt.option("browser")) {
            mocha_task = [ mocha_task[1] ];
        }
    }

    // Define tasks
    grunt.registerTask("hint",         [ "jshint" ]);
    grunt.registerTask("test",         mocha_task);
    grunt.registerTask("go",           [ "hint", "test" ]);
    grunt.registerTask("default",      [ "go" ]);

};

// End of file