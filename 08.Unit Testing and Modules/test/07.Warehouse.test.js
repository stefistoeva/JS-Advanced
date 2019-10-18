const Warehouse = require("../07.Warehouse.js")
let assert = require("chai").assert;

describe('Warehouse', function() {
    let warehouse;

    it('constructor gets a negative number', function() {
        assert.throw(function() {
            warehouse = new Warehouse(-1);
        }, 'Invalid given warehouse space');
    });
    it('constructor gets a zero', function() {
        assert.throw(function() {
            warehouse = new Warehouse(0);
        }, 'Invalid given warehouse space');
    });
    // it('constructor gets a non-numerical value', function() {
    //     assert.throw(function() {
    //         warehouse = new Warehouse('1');
    //     }, 'Invalid given warehouse space');
    // });
    it('addProduct(type, product, quantity) function - add new product', function() {
        warehouse = new Warehouse(1);
        warehouse.addProduct('Food', 'ice cream', 1);
        assert.isObject(warehouse);
    });
    it('addProduct(type, product, quantity) function - no place for the new product', function() {
        assert.throw(function() {
            warehouse = new Warehouse(1);
            warehouse.addProduct('Food', 'ice cream', 2);
        }, 'There is not enough space or the warehouse is already full');
    });
    it('orderProducts(type)', function() {
        warehouse = new Warehouse(3);
        warehouse.addProduct('Food', 'ice cream', 2);
        warehouse.addProduct('Food', 'cheese', 1);
        warehouse.orderProducts('Food');
        assert.equal(Object.entries(warehouse.availableProducts['Food'])[0][1], 2);
    });
    it('revision() - If there is not at least 1 product in the warehouse', function() {
        warehouse = new Warehouse(1);
        assert.equal(warehouse.revision(), 'The warehouse is empty')
    });
    it('scrapeAProduct(product, quantity) check method', function() {
        warehouse = new Warehouse(2);
        warehouse.addProduct('Food', 'ice cream', 1);
        assert.throw(function () {
            warehouse.scrapeAProduct('cheese', 1);
        }, 'cheese do not exists');
    });
})
