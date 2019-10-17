const mathEnforcer = require("../04.MathEnforcer.js")
let assert = require("chai").assert;

describe('mathEforcer', function() {
    describe('addFive(num) - check function', function() {
        it('if parameter is NOT a number', function() {
            assert.isUndefined(mathEnforcer.addFive(true));
            assert.isUndefined(mathEnforcer.addFive('2'));
            assert.isUndefined(mathEnforcer.addFive([]));
            assert.isUndefined(mathEnforcer.addFive({}));
        });
        it('number parameter add 5', function() {
            assert.equal(mathEnforcer.addFive(1), 6);
            assert.equal(mathEnforcer.addFive(-10), -5);
            assert.closeTo(mathEnforcer.addFive(1.5), 6.5, 0.01);
        });
    })

    describe('subtractTen(num) - check the function', function() {
        it('if param is NOT a number', function() {
            assert.isUndefined(mathEnforcer.subtractTen(true));
            assert.isUndefined(mathEnforcer.subtractTen('2'));
            assert.isUndefined(mathEnforcer.subtractTen([]));
            assert.isUndefined(mathEnforcer.subtractTen({}));
        });
        it('correct param', function() {
            assert.equal(mathEnforcer.subtractTen(10), 0);
            assert.equal(mathEnforcer.subtractTen(-10), -20);
            assert.closeTo(mathEnforcer.subtractTen(10.1), 0.1, 0.01);
        });
    })

    describe('sum(num1, num2) - check the function', function() {
        it('if first param is NOT a number', function() {
            assert.isUndefined(mathEnforcer.sum(true, 1));
        });
        it('if second param is NOT a number', function() {
            assert.isUndefined(mathEnforcer.sum(1, true));
        });
        it('correct params', function() {
            assert.equal(mathEnforcer.sum(1, 1), 2);
            assert.equal(mathEnforcer.sum(-1, -1), -2);
            assert.closeTo(mathEnforcer.sum(1.1, 1.1), 2.2, 0.01);
        });
    })
})
