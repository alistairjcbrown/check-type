(function() {
	"use strict";

	var check = require("./lib/main");
	var _ = require("underscore");

	var _functions = _.reduce(_.functions(_), function (_object, item) {
		_object[item] = _[item];
		return _object;
	}, {});

	check.init(_functions);
})();