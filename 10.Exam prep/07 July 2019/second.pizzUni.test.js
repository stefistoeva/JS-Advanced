const PizzUni = require("../second.pizzUni.js")
let assert = require('chai').assert;

describe('check PizzUni class', function() {
    let pizz;
    describe('makeAnOrder() with 3 params', function() {
        it('incoming orderedPizza in one of the pizzas in list', function() {
            assert.throw(function () {
                pizz = new PizzUni();
                pizz.registerUser('abv@abv.bg');
                pizz.makeAnOrder('abv@abv.bg', 'other', 'Water');
            }, 'You must order at least 1 Pizza to finish the order.');
        });
        it('return index of the order in the orders array', function() {
            pizz = new PizzUni();
            pizz.registerUser('abv@abv.bg');
            assert.equal(pizz.makeAnOrder('abv@abv.bg', 'Barbeque Classic', 'Water'), 0);
        });
        it('should return the number of orders in orderHistory', function() {
            pizz = new PizzUni();
            pizz.registerUser('abv@abv.bg');
            pizz.makeAnOrder('abv@abv.bg', 'Barbeque Classic', 'Water');
            assert.equal(pizz.registeredUsers[0].orderHistory.length, 1);
        });
    })

    describe('completeOrder()', function() {
        it('change the status of the first object', function() {
            pizz = new PizzUni();
            pizz.registerUser('abv@abv.bg');
            pizz.makeAnOrder('abv@abv.bg', 'Barbeque Classic', 'Water');
            pizz.completeOrder();
            assert.equal(pizz.orders[0].status, 'completed');
        });
        it('return order', function() {
            pizz = new PizzUni();
            pizz.registerUser('abv@abv.bg');
            pizz.makeAnOrder('abv@abv.bg', 'Barbeque Classic', 'Water');
            let obj = {email: 'abv@abv.bg', orderedPizza: 'Barbeque Classic', orderedDrink: 'Water', status: 'completed'};
            assert.deepEqual(pizz.completeOrder(), obj, 'We have an error with the order!');
        });
    })

    describe('detailsAboutMyOrder(id)', function() {
        it('return undefined when doesnt exits order', function() {
            pizz = new PizzUni();
            pizz.registerUser('abv@abv.bg');
            pizz.makeAnOrder('abv@abv.bg', 'Barbeque Classic', 'Coca-Cola');
            pizz.completeOrder();
            assert.equal(pizz.detailsAboutMyOrder(1), undefined);
        });
        it('succesfully order', function() {
            pizz = new PizzUni();
            pizz.registerUser('abv@abv.bg');
            pizz.makeAnOrder('abv@abv.bg', 'Barbeque Classic', 'Coca-Cola');
            pizz.completeOrder();
            assert.equal(pizz.detailsAboutMyOrder(0), 'Status of your order: completed');
        });
        it('should retun number of drinks', function() {
            pizz = new PizzUni();
            pizz.registerUser('abv@abv.bg');
            pizz.makeAnOrder('abv@abv.bg', 'Barbeque Classic', 'Coca-Cola');
            assert.equal(pizz.orders[0].orderedDrink[0].length, 1)
        });
    })
})
