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

    var getCheck = function(_) {

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
                if ( ! _.isString(type)) {
                    throw new Error("Provided type is not a string");
                }

                // Get is function from underscore, eg. isString
                is_type_function = is_type_functions["is" + type.toLowerCase()];

                if ( ! _.isFunction(is_type_function)) {
                    throw new Error("Unsupported type", type);
                }

                return is_type_function(value);
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
                if ( ! _.isString(path)) {
                    throw new Error("Provided path is not a string");
                }

                level_names = path.split(".");
                current_level = value;

                level_names.forEach(function(level_name) {
                    if ( has_path && _.isObject(current_level) &&
                     ! _.isUndefined(current_level[level_name])) {
                        current_level = current_level[level_name];
                    } else {
                        has_path = false;
                    }
                });

                return has_path;
            };

            // Return object
            return {
                is: is,
                has: has
            };

        };

        /*
         * check.init
         *
         * @param {object} functions_source Variable with functions as properties.
         * @param {boolean} should_overwrite Flag if duplicates should be overwritten.
         * @return {Object} this
         */
        check.init = function(functions_source, should_overwrite) {
            var functions_object;

            // Default source to underscore
            if (_.isUndefined(functions_source)) {
                functions_source = _;
            }

            // Pull all functiosn from the source
            functions_object = _.reduce(_.functions(functions_source), function (result, item) {
                result[item] = functions_source[item];
                return result;
            }, {});

            // Get "is" functions from created functions object
            Object.keys(functions_object).forEach(function(function_name) {
                if (function_name.match(/^is[A-Z]/)) {
                    if (_.isUndefined(is_type_functions[function_name.toLowerCase()]) ||
                        should_overwrite) {
                        is_type_functions[function_name.toLowerCase()] = functions_object[function_name];
                    }
                }
            });

            return this;
        };

        /*
         * check.clear
         *
         * @return {Object} this
         */
        check.clear = function() {
            is_type_functions = {};

            return this;
        };

        return check;
    };


    // Expose check function according to environment / libs available

    // NodeJS
    if (typeof module !== "undefined") {
        module.exports = getCheck( require("underscore") );
    }

    // RequireJS
    if (typeof define !== "undefined") {
        define([ "underscore" ], function(_) {
            return getCheck( _ );
        });
    }

    // Only expose on window if RequireJS is unavailable
    if (typeof window !== "undefined" && typeof define === "undefined") {
        window.check = getCheck( window._ );
    }

})();

// End of file