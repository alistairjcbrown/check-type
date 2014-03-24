/*
 * Check
 *
 * Provides an interface into checking variable type
 * and object contents
 *
 * @author Alistair Brown <github@alistairjcbrown.com>
 */


(function() {
    "use strict";

    var is_type_functions = {},
        check;

    /*
     * check
     *
     * @param value Value to be checked.
     * @return {Object}
     */
    check = function(value) {

        var is, has;

        /*
         * is
         *
         * @param {string} type Type to check value against.
         * @return {Boolean}
         * @throws Will throw an error if type is not a string.
         * @throws Will throw an error if type does not have a check function.
         */
        is = function(type) {
            var is_type_function;

            // Type parameter must be a string
            if (typeof type !== "string") {
                throw new Error("Provided type is not a string");
            }

            // Uppercase first letter of type
            type = type.charAt(0).toUpperCase() + type.slice(1);

            // Get is function from underscore, eg. isString
            is_type_function = is_type_functions["is" + type];

            if (typeof is_type_function === "function") {
                return is_type_function(value);
            }

            throw new Error("Unsupported type", type);
        };

        /*
         * has
         *
         * @param {string} path Path to check on value.
         * @return {Boolean}
         * @throws Will throw an error if path is not a string
         */
        has = function(path) {
            var has_path = true,
                level_names, current_level;

            // Path parameter must be a string
            if (typeof path !== "string") {
                throw new Error("Provided path is not a string");
            }

            level_names = path.split(".");
            current_level = value;

            level_names.forEach(function(level_name) {
                if ( has_path &&
                 current_level === Object(current_level) &&
                 typeof current_level[level_name] !== "undefined") {
                    current_level = current_level[level_name];
                } else {
                    has_path = false;
                }
            });

            return has_path;
        };

        return {
            is: is,
            has: has
        };

    };

    /*
     * check.init
     *
     * @param {object} functions_object Object with function name mapping
     *                                  to function.
     * @return {Boolean}
     * @throws Will throw an error if functions object is not an object.
     */
    check.init = function(functions_object) {
        if (functions_object !== Object(functions_object)) {
            throw new Error("Object of functions was not provided");
        }

        // Get "is" functions from provided object
        Object.keys(functions_object).forEach(function(function_name) {
            if (function_name.match(/^is[A-Z]/)) {
                if (typeof is_type_functions[function_name] === "undefined") {
                    is_type_functions[function_name] = functions_object[function_name];
                }
            }
        });
    };

    /*
     * check.clear
     *
     * @return {Boolean}
     */
    check.clear = function() {
        is_type_functions = {};
    };

    // Expose check function according to environment
    if (typeof module !== "undefined") {
        module.exports = check;
    }
    if (typeof define !== "undefined") {
        define([], check);
    }
    if (typeof window !== "undefined") {
        window.check = check;
    }

})();

// End of file