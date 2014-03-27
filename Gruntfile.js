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

    var generate_path_matches = function(extension) {
        var base = [
            "./*{extension}",
            "./**/*{extension}",
            "!./node_modules/**/*{extension}",
            "!./**/node_modules/**/*{extension}",
            "!./bower_components/**/*{extension}",
            "!./**/bower_components/**/*{extension}",
            "!./.git/"
        ];

        base.forEach(function(element, index, array) {
            array[index] = element.replace("{extension}", extension);
        });

        return base;
    },
    jshint, mocha_nodejs, mocha_browser, mocha_tasks, sync_meta;

    // ------

    // Strict JSHint rules
    jshint = {
        "all": generate_path_matches(".js"),
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
                "process":   true,
                "__dirname": true
            }
        }
    },

    // Run mocha tests in node
    mocha_nodejs = {
        "test": {
            "src": generate_path_matches(".test.js"),
            "options": {
                "reporter": "spec",
                "ui":       "tdd"
            }
        }
    },

    // Run mocha tests in browser
    mocha_browser = {
        "test": {
            "src": generate_path_matches(".test.html"),
            "options": {
                "reporter": "Spec",
                "ui":       "tdd",
                "log":      true,
                "run":      true
            }
        }
    };

    // Sync all shared properties between meta files
    sync_meta = {
        include: [
            "name",
            "version",
            "author",
            "description",
            "homepage",
            "main",
            "repository",
            "keywords",
            "bugs",
            "licenses",
            "dependencies"
        ]
    };

    grunt.initConfig({
        "pkg":       grunt.file.readJSON("package.json"),
        "jshint":    jshint,
        "mochaTest": mocha_nodejs,
        "mocha":     mocha_browser,
        "sync":      sync_meta
    });

    // Load Tasks
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-mocha");
    grunt.loadNpmTasks("grunt-sync-pkg");

    // Allow flag after test
    mocha_tasks = [ "mochaTest", "mocha" ];
    if (process.argv[2] === "test") {
        if (grunt.option("nodejs")) {
            mocha_tasks = [ mocha_tasks[0] ];
        } else if (grunt.option("browser")) {
            mocha_tasks = [ mocha_tasks[1] ];
        }
    }

    // Define tasks
    grunt.registerTask("hint",    [ "jshint" ]);
    grunt.registerTask("test",      mocha_tasks );
    grunt.registerTask("go",      [ "sync", "hint", "test" ]);
    grunt.registerTask("default", [ "go" ]);

};

// End of file
