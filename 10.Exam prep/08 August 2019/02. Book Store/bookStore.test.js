const BookStore = require('./bookStore');
let assert = require('chai').assert;
const { beforeEach } = require('mocha');

describe('BookStore', function() {
    let store;
    beforeEach(function() {
        store = new BookStore('SoftUni');
    });

    describe('constructor check', function() {
        it('should initialize properties correctly', function() {
            assert.equal(store.name, 'SoftUni');
            assert.deepEqual(store.books, []);
            assert.deepEqual(store.workers, []);
            // assert.deepEqual(store._workers, []);
        });
    });

    describe('stockBooks()', function() {
        it('should change length correctly', function() {
            store.stockBooks([ 'Book1-Author1' ]);
            assert.equal(store.books.length, 1);
        });
        it('should push correctly', function() {
            const expectedBook = {
                title: 'Book1',
                author: 'Author1'
            };

            store.stockBooks([ 'Book1-Author1' ]);
            assert.deepEqual(store.books[0], expectedBook);
        });
        it('should return obj', function () {
            store.stockBooks(['Book1-Author1', 'Book2-Author2']);
    
            store.hire('Stefi', 'Cashier');    
            store.sellBook('Book1', 'Stefi');  
            assert.equal(store.stockBooks(['Book2-Author2']), '[object Object],[object Object]');
        });
    });

    describe('hire()', function() {
        it('should throw error', function() {
            assert.throw(function() {
                store.hire('Stefi', 'Student');
                store.hire('Stefi', 'Student');
            }, 'This person is our employee');
        });
        it('should hire a person', function() {
            const worker = {
                name: 'Stefi',
                position: 'Student',
                booksSold: 0
            };
            const outputMes = store.hire('Stefi', 'Student');
            assert.equal(store.workers.length, 1);
            assert.equal(outputMes, 'Stefi started work at SoftUni as Student');
            assert.deepEqual(store.workers[0], worker);
        });
    });

    describe('fire()', function() {
        it('should throw error', function() {
            assert.throw(function() {
                store.fire('Stefi');
            }, "Stefi doesn't work here");
        });
        it('should fire a person', function() {
            store.hire('Stefi', 'Bookstore Cashier');
            assert.equal(store.fire('Stefi'), 'Stefi is fired');
            assert.equal(store.workers.length, 0);
        });
    });

    describe('sellBook()', function() {
        it('should throw error if book does not exists', function() {
            assert.throw(function() {
                store.sellBook('Book1', 'Worker');
            }, 'This book is out of stock');
        });
        it('should throw error if worker not found', function() {
            store.stockBooks([ 'Book1-Author1' ]);
            assert.throw(function() {
                store.sellBook('Book1', 'Worker');
            }, 'Worker is not working here');
        });
        it('should sell book correclty', function() {
            store.stockBooks([ 'Book1-Author1' ]);
            store.hire('Stefi', 'Cashier');
            store.sellBook('Book1', 'Stefi');
            assert.equal(store.workers[0].booksSold, 1);
            assert.equal(store.books.length, 0);
        });
    });

    describe('printWorkers()', function() {
        it('should show rigth output', function() {
            store.hire('Stefi', 'Student');
            assert.equal(store.printWorkers(), 'Name:Stefi Position:Student BooksSold:0');
        });
    });
})
