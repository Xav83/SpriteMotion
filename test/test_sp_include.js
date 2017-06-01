'use strict';

describe("include function test", function() {
	var sp_include = null;
	var mockBrowser = null;
	before(function() {
		sp_include = require("../javascript/sp_include.js").include;
		mockBrowser = require('mock-browser').mocks.MockBrowser;
	});

	it("include a javascript file", function(done) {
		var mock = new mockBrowser();
		try {
			sp_include(mock.getDocument(), "../javascript/sp_include.js");
		} catch (err) {
			done(new Error(err));
			return;
		}
		done();
	});

	if ("include a non javascript file.", function(done) {
			var mock = new mockBrowser();
			try {
				sp_include(mock.getDocument(), "../index.html");
			} catch (err) {
				done(new Error(err));
				return;
			}
			done();
		});
});
