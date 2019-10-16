const isOddOrEven = require("../index.js")

let expect = require('chai').expect;
let assert = require("chai").assert;

describe("isOddOsrEven function", function() {
    it('Pass number to return undefined.', function() {
        assert.equal(isOddOrEven(2), undefined);
    });
    it('Pass string with even length.', function() {
        assert.equal(isOddOrEven("toni"), "even");
    });
    it('Pass string with odd length.', function() {
        assert.equal(isOddOrEven("ton"), "odd");
    });
});
