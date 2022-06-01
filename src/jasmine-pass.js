"use strict";

(function (global) {

	if (!global.jasmine) {
		throw new Error("jasmine must be loaded before jasmine-pass");
	}

	global.pass = function () {
		expect(true).toBe(true);
	};

})(typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
