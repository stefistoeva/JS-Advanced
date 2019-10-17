const lookupChar = require("../03.CharLookup.js")
let assert = require("chai").assert;

describe('lookupChar', function() {
    it('first param is NOT a string', function() {
        assert.equal(lookupChar(0, 0), undefined);
    });
    it('second param is NOT a number', function() {
        assert.equal(lookupChar('test', 'test'), undefined);
    });
    it('second param is NOT a int', function() {
        assert.equal(lookupChar('test', 1.5), undefined);
    });
    it('correct type parameters, but incorrect index', function() {
        assert.equal(lookupChar('test', -1), 'Incorrect index');
        assert.equal(lookupChar('test', 5), 'Incorrect index');
        assert.equal(lookupChar('test', 4), 'Incorrect index');
    });
    it('correct type and value', function() {
        assert.equal(lookupChar('test', 1), 'e');
    })
})
