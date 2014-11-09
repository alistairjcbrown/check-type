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

    var getCheck, check, noConflict;

    // ---

    getCheck = function(_) {

        var is_type_functions = {},
            check;

        /*
         * check
         *
         * @param value Value to be checked.
         * @return {Object}
         */
        check = function(value) {

            var response = {},
                get_levels_from_path, is_array_of;

            /*
             * get_levels_from_path
             *
             * Splits path string into levels, dealing with escaped characters.
             *
             * @private
             * @param {string} path Path to check on value.
             * @return {string[]}
             */
            get_levels_from_path = function(path) {
                var pieces, levels;

                // Be strict about splitting the string;
                // Check that the period has not been escaped.
                pieces = path.split(/(^|[^\\])(\\\\)*\./g);

                // Rebuild split levels using captured groups
                levels = _.reduce(pieces, function(memo, piece, index) {
                    piece = _.isUndefined(piece) ? "" : piece;
                    if (index % 3 === 0) {
                        memo.push(piece);
                    } else {
                        memo[Math.floor(index / 3)] += piece;
                    }
                    return memo;
                }, []);

                // Replace escape characters for matching
                return _.map(levels, function(level) {
                    return level.replace(/\\\./g, ".")
                                .replace(/\\\\/g, "\\");
                });
            };


            /*
             * is_array_of
             *
             * Checks if the provided value is an array of expected type
             *
             * @private
             * @param {string} type Type to check value against.
             * @param {Array} values Array of values to check the type of.
             * @return {Boolean}
             */
            is_array_of = function(type, values) {
                if ( ! _.isArray(values)) {
                    return false;
                }

                return _.every(values, function(value) {
                    return check(value).is(type);
                });
            };


            /*
             * is
             *
             * @param {string} type Type to check value against.
             * @return {Boolean}
             * @throws Will throw an error if type is not a string.
             * @throws Will throw an error if type does not have a check function.
             */
            response.is = function(type) {
                var check_array_of = false,
                    is_type;

                // Type parameter must be a string
                if ( ! _.isString(type)) {
                    throw new Error("Provided type is not a string");
                }

                // Check for array of shorthand
                check_array_of = type.slice(-2) === "[]";
                type = check_array_of ? type.slice(0, -2) : type;

                // Get "is" validation function, eg. isString
                is_type = is_type_functions["is" + type.toLowerCase()];

                if ( ! _.isFunction(is_type)) {
                    throw new Error("Unsupported type", type);
                }

                return check_array_of ? is_array_of(type, value) : is_type(value);
            };


            /*
             * is.not
             *
             * @param {string} type Type to check value against.
             * @return {Boolean}
             * @throws Will throw an error if type is not a string.
             * @throws Will throw an error if type does not have a check function.
             */
            response.is.not = function(type) {
                return ! this(type);
            };


            /*
             * has
             *
             * @param {string} path Path to check on value.
             * @return {Boolean}
             * @throws Will throw an error if path is not a string
             */
            response.has = function(path) {
                var has_path = true,
                    level_names, current_level;

                // Path parameter must be a string
                if ( ! _.isString(path)) {
                    throw new Error("Provided path is not a string");
                }

                level_names = get_levels_from_path(path);
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


            /*
             * matches
             *
             * @param {object} structure Struture of the value object to check
             * @return {Boolean}
             * @throws Will throw an error if stucture is not an object.
             * @throws Will throw an error if any type is not a string.
             * @throws Will throw an error if any type does not have a check function.
             */
            response.matches = function(structure) {
                var is_match = true;

                // Type parameter must be a string
                if ( ! _.isObject(structure)) {
                    throw new Error("Provided stucture is not an object");
                }

                if ( ! _.isObject(value)) {
                    return false;
                }

                _.each(structure, function(type, index) {
                    if (check(value[index]).is.not(type)) {
                        is_match = false;
                    }
                });

                return is_match;
            };



            // Return object
            return response;

        };

        /*
         * check.init
         *
         * @param {object} functions_source Variable with functions as properties.
         * @param {boolean} should_overwrite Flag if duplicates should be overwritten.
         * @return {Object} this
         */
        check.init = function(functions_source, should_overwrite) {
            var functions_object, functions_list;

            // Default source to underscore
            if (_.isUndefined(functions_source)) {
                functions_source = _;
                // Remove `isEqual` as it's not a type checking function
                functions_list = _.without(_.functions(functions_source), "isEqual");
            } else {
                functions_list = _.functions(functions_source);
            }

            // Pull all functions from the source
            functions_object = _.reduce(functions_list, function (result, item) {
                result[item] = functions_source[item];
                return result;
            }, {});

            // Get "is" functions from created functions object
            Object.keys(functions_object).forEach(function(function_name) {
                var function_name_key = function_name.toLowerCase();
                // Bail if function is not an "is" function, or one has already
                // been defined and should not be overwritten.
                if ( ! function_name.match(/^is[A-Z]/) ||
                   ( ! _.isUndefined(is_type_functions[function_name_key]) &&
                     ! should_overwrite)) {
                    return;
                }
                is_type_functions[function_name_key] = functions_object[function_name];
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

    // Browser
    //  - RequireJS
    if (typeof define !== "undefined") {
        define([ "underscore" ], function(_) {
            return getCheck( _ );
        });
    // - window
    } else if (typeof window !== "undefined") {
        check = getCheck( window._ );

        // Create noConflict function
        noConflict = (function() {
            var previous_check = window.check;
            return function() {
                if (check === window.check) {
                    window.check = previous_check;
                }

                return check;
            };
        })();

        check.noConflict = noConflict;
        window.check = check;
    }

})();

// End of file
