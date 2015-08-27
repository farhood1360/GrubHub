// BASE SETUP
// ==============================================
var assert = require("assert");
var expect = require("chai").expect;
var request = require("request");
var superagent = require('superagent');
var expect = require('expect.js');
var convertor = require('./convertor.js');

// TEST CASES
// ==============================================

describe('Server', function() {
	describe('homepage', function() {
		var url = "http://localhost:8081";
	   	it('should respond to GET', function () {
    		request(url, function(error, response, body) {
			    expect(response.statusCode).to.equal(200);
  			});	    
		});
	});
});

describe("Color Code Converter API", function() {
	describe("RGB to Hex conversion", function() {
		var url = "http://localhost:8081/rgbToHex?red=255&green=255&blue=255";
	  	it("returns status 200", function() {
	  		request(url, function(error, response, body) {
        	expect(response.statusCode).to.equal(200);
        });
	  	});
	    it("returns the color in hex", function() {
    	 	var redHex   = convertor.rgbToHex(255, 0, 0);
	      	var greenHex = convertor.rgbToHex(0, 255, 0);
	      	var blueHex  = convertor.rgbToHex(0, 0, 255);

	      	expect(redHex).to.equal("ff0000");
	      	expect(greenHex).to.equal("00ff00");
	      	expect(blueHex).to.equal("0000ff");
	    });
	});

	describe("Hex to RGB conversion", function() {
		var url = "http://localhost:8081/rgbToHex?red=255&green=255&blue=255";
	    it("returns status 200", function() {
	    	request(url, function(error, response, body) {
       		expect(response.statusCode).to.equal(200);
        });
	    });
	    it("returns the color in RGB", function() {
	    	var red   = convertor.hexToRgb("ff0000");
			var green = convertor.hexToRgb("00ff00");
			var blue  = convertor.hexToRgb("0000ff");

			expect(red).to.deep.equal([255, 0, 0]);
			expect(green).to.deep.equal([0, 255, 0]);
			expect(blue).to.deep.equal([0, 0, 255]);
		});
	});
});