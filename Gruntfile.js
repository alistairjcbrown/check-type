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
    jshint, mocha_nodejs, mocha_browser, mocha_tasks,
    check_meta, sync_meta, generate_toc;

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

    // Check all properties are correct in the package.json file
    check_meta = {
        "all": {
            "options": {
                // make sure package.json ends with \n\n, default false
                "blankLine": true,
                "version": function (value) {
                    // strict version number validation
                    return (/\d{1,2}\.\d{1,2}\.\d{1,2}/).test(value);
                }
            }
        }
    };

    // Sync all shared properties between meta files
    sync_meta = {
        "options": {
            "include": [
                "name",
                "description",
                "version",
                "author",
                "bugs",
                "contributors",
                "dependencies",
                "homepage",
                "keywords",
                "license",
                "main",
                "repository"
            ]
        }
    };

    // Generate markdown table of contents
    generate_toc = {
        "options": {
            "heading": "## Table of Contents\n\n"
        },
        "readme": {
            "files": {
                "toc.md": ["README.md"]
            }
        }
    };

    grunt.initConfig({
        "pkg":          grunt.file.readJSON("package.json"),
        "jshint":       jshint,
        "mochaTest":    mocha_nodejs,
        "mocha":        mocha_browser,
        "nice-package": check_meta,
        "sync":         sync_meta,
        "toc":          generate_toc,
    });

    // Load Tasks
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-mocha-test");
    grunt.loadNpmTasks("grunt-mocha");
    grunt.loadNpmTasks("grunt-sync-pkg");
    grunt.loadNpmTasks("grunt-toc");
    grunt.loadNpmTasks("grunt-nice-package");

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
    grunt.registerTask("lint",    [ "jshint" ]);
    grunt.registerTask("test",      mocha_tasks );
    grunt.registerTask("go",      [ "lint", "test" ]);
    grunt.registerTask("build",   [ "go", "toc", "nice-package", "sync" ]);
    grunt.registerTask("default", [ "go" ]);

};

// End of file
