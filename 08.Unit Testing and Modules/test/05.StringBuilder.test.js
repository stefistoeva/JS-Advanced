const StringBuilder = require("../05.StringBuilder.js")
let assert = require("chai").assert;

describe('StringBuilder', function() {
    let stringBuilder;
    beforeEach(function() {
        stringBuilder = new StringBuilder();
    })

    it('should have the correct function properties', function() {
        assert.isFunction(StringBuilder.prototype.append);
        assert.isFunction(StringBuilder.prototype.prepend);
        assert.isFunction(StringBuilder.prototype.insertAt);
        assert.isFunction(StringBuilder.prototype.remove);
        assert.isFunction(StringBuilder.prototype.toString);
    })
    it('Can be instantiated without anything', function() {
        assert.equal('', stringBuilder.toString());
    })
    it('Can be instantiated with correct parameters', function() {
        assert.equal(new StringBuilder('Test'), 'Test');
    })
    it('append() with correct parameters', function() {
        stringBuilder.append('Test');
        assert.equal('Test', stringBuilder.toString());
    })
    it('append() throw error with incorrect param', function() {
        assert.throw(function() {
            stringBuilder.append({'Test': 'Demo'});
        }, 'Argument must be string');
    })
    it('prepend() throw new error with incorrect param', function() {
        assert.throw(function() {
            stringBuilder.prepend({'Test': 'Demo'})
        }, 'Argument must be string');
    })
    it('insertAt() with correct param', function() {
        stringBuilder.append('Test');
        stringBuilder.prepend('Demo');
        stringBuilder.insertAt('Te', 0);
        stringBuilder.remove(0, 2);
        assert.equal(stringBuilder.toString(), 'DemoTest');
    })
})



// describe('String Builder', function() {
//     it('Can be instantiated with a passed in string argument or without anything', function() {
//         let expexted = new StringBuilder();
//         expect(expexted).to.be.a('object');
//     });

//     //OK
//     it('Can be instantiated with a passed in string argument', function() {
//         let expected = new StringBuilder('Test');
//         expect(expected._stringArray).to.have.lengthOf(4);
//     });

//     it('Functions attached to instance', function() {
//         let expected = new StringBuilder('Test');
//         expect(expected).to.have.property('prepend');
//         expect(expected).to.have.property('append');
//         expect(expected).to.have.property('insertAt');
//         expect(expected).to.have.property('remove');
//         expect(expected).to.have.property('toString');
//     });
//     it('append(string) - length', function() {
//         let expected = new StringBuilder();
//         expected.append('Demo');
//         expect(expected._stringArray).to.have.lengthOf(4);
//     });
//     it('append() property', function() {
//         let expected = new StringBuilder('Te');
//         expect(() => (expected.append(2)).to.Throw('Argument must be string'));
//     });
//     it('append(string) - if appends in the end of the string', function() {
//         let expected = new StringBuilder('Te');
//         expected.append('Demo');
//         expect(expected._stringArray[0]).to.be.equal('T');
//     });
//     it('prepend() property', function() {
//         let expected = new StringBuilder('Te');
//         expect(() => (expected.prepend(2)).to.Throw('Argument must be string'));
//     });
//     it('prepend(string)', function() {
//         let expected = new StringBuilder('Te');
//         expected.prepend('Demo');
//         expect(expected._stringArray[0]).to.be.equal('D');
//     });
//     it('insertAt() property', function() {
//         let expected = new StringBuilder('Te');
//         expect(() => (expected.insertAt(2, 1)).to.Throw('Argument must be string'));
//     });
//     it('insertAt(string, index)', function() {
//         let expected = new StringBuilder('Te');
//         expected.insertAt('D', 1);
//         expect(expected._stringArray[1]).to.be.equal('D');
//     });
//     it('insertAt(string, index) - check array', function() {
//         let expected = new StringBuilder('Te');
//         expected.insertAt('D', 1);
//         expect(expected._stringArray).to.be.deep.equal(['T', 'D', 'e']);
//     });
//     it('remove(startIndex, length)', function() {
//         let expected = new StringBuilder('Tes');
//         expected.remove(1, 1);
//         expect(expected._stringArray[1]).to.be.equal('s');
//     });
//     it('toString()', function() {
//         let expected = new StringBuilder('Tes');
//         expect(expected.toString()).to.be.equal('Tes');
//     });
//     it('Argument must be string', function() {
//         expect(() => new StringBuilder(true)).to.Throw('Argument must be string');
//     });
// })
