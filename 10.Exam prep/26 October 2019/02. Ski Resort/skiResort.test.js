const SkiResort = require('../skiResort');
let assert = require('chai').assert;
const { beforeEach } = require('mocha');

describe('SkiResort', function() {

    let resort;
    beforeEach(function() {
        resort = new SkiResort('resortName');
    });

    describe('input data', function() {
        it('instantion with one param', function() {
            assert.equal(resort.name, 'resortName');
            assert.equal(resort.voters, 0);
            assert.isArray(resort.hotels);
        });
    })

    describe('bestHotel()', function() {
        it('getter bestHotel if return no votes', function() {
            assert.equal(resort.bestHotel, 'No votes yet');
        });
        it('getter bestHotel with hotels', function() {
            resort.build('sun', 1);
            resort.build('run', 1);
            resort.book('sun', 1);
            resort.leave('sun', 1, 4);
            resort.leave('run', 1, 2);
            assert.equal(resort.bestHotel, 'Best hotel is sun with grade 4. Available beds: 1');
        });
    })

    describe('build()', function() {
        it('if the first prop is empty string', function() {
            assert.throw(() => {
                resort.build('', 1);
            }, 'Invalid input')
        });
        it('if the second prop is negative number', function() {
            assert.throw(() => {
                resort.build('sum', -5);
            }, 'Invalid input')
        });
        it('if the prop are correct', function() {
            assert.equal(resort.build('sun', 3), 'Successfully built new hotel - sun');
        });
        it('add the hotels', function() {
            resort.build('sun', 1);
            assert.deepEqual(resort.hotels, [{name: 'sun', beds: 1, points: 0}]);
        });
    })

    describe('book()', function() {
        it('should be invalid prop', function() {
            assert.throw(() => {
                resort.book('', -1);
            }, 'Invalid input');
        });
        it('exists hotel', function() {
            assert.throw(() => {
                resort.book('sun', 1);
            }, 'There is no such hotel');
        });
        it('no free beds', function() {
            resort.build('sun', 1);
            assert.throw(() => {
                resort.book('sun', 2);
            }, 'There is no free space');
        });
        it('successful book', function() {
            resort.build('sun', 1);
            assert.equal(resort.book('sun', 1), 'Successfully booked');
        });
    })

    describe('leave()', function() {
        it('should name be incorrect', function() {
            assert.throw(() => {
                resort.leave('', 3, 5);
            }, 'Invalid input');
        });
        it('beds are incorrect data', function() {
            assert.throw(() => {
                resort.leave('sun', -1, 5);
            }, 'Invalid input');
        });
        it('does not exists that hotel', function() {
            assert.throw(() => {
                resort.leave('sun', 1, 1);
            }, 'There is no such hotel');
        });
        it('param are valid and thereis hotel', function() {
            resort.build('sun', 1);
            resort.book('sun', 1);
            assert.equal(resort.leave('sun', 1, 1), '1 people left sun hotel');
        });
    })

    describe('averageGrade()', function() {
        it('should return message if there are not any votes', function() {
            assert.equal(resort.averageGrade(), 'No votes yet');
        });
        it('return average grade', function() {
            resort.build('sun', 1);
            resort.build('run', 1);
            resort.book('sun', 1);
            resort.leave('sun', 1, 4);
            resort.leave('run', 1, 2);
            assert.equal(resort.averageGrade(), 'Average grade: 3.00');
        });
    })
})
