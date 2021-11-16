const assert = require('assert')
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');

describe('Decorator', function() {
    let decorator;

    beforeEach(function() {
        decorator = new Decorator('Bob the Builder');
    });

    it('should have a name', function() {
        const actual = decorator.name;
        assert.strictEqual(actual, 'Bob the Builder');
    });

    it('should start with an empty paint stock', function() {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it('should be able to add a can of paint to paint stock', function() {
        const paintCan = new Paint('Yellow', 10);
        decorator.addPaint(paintCan);
        const actual = decorator.stock.length;
        assert.deepStrictEqual(actual, 1);
    })

});