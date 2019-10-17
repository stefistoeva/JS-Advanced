const PaymentPackage = require("../06.PaymentPackage.js")
let assert = require("chai").assert;

describe('PaymentPackage', function() {
    let instance;

    it('use correct name and value', function() {
        instance = new PaymentPackage('Test', 1);
        assert.equal(instance.name, 'Test');
    });
    it('use incorrect name', function() {
        assert.throw(function() {
            instance = new PaymentPackage(true, 1);
        }, 'Name must be a non-empty string');
    });
    it('use incorrect value', function() {
        assert.throw(function() {
            instance = new PaymentPackage('Test', -1);
        }, 'Value must be a non-negative number');
    });
    it('use incorrect value(negative number) for VAT', function() {
        assert.throw(function() {
            instance = new PaymentPackage('Test', 1);
            instance.VAT = -1;
        }, 'VAT must be a non-negative number');
    });
    it('boolean value for active', function() {
        instance = new PaymentPackage('Test', 1);
        assert.isTrue(instance.active);
    });
    it('throw error when active is a negative number', function () {
        assert.throws(function() {
            instance = new PaymentPackage('Test', 1);
            instance.active = -1;
        }, 'Active status must be a boolean');
    });
    it('correct toString() method and change active - false', function() {
        instance = new PaymentPackage('Test', 1);
        instance.active = false;
        let output = 'Package: Test (inactive)\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2';
        assert.equal(instance.toString(), output);
    });
    it('correct toString and change VAT = 0', function () {
        instance = new PaymentPackage('Test', 0);
        instance.VAT = 0;
        let expected = 'Package: Test\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0';
        assert.equal(instance.toString(), expected);
    });
})
