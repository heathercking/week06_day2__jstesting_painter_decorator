const assert = require('assert')
const Room = require('../room.js');

describe('Room', function() {
    let room;

    beforeEach(function() {
        room = new Room('Dining Room', 10);
    });


    it('should have a name', function() {
        const actual = room.name;
        assert.strictEqual(actual, 'Dining Room');
    });

    it('should have an area in square meters', function() {
        const actual = room.area;
        assert.strictEqual(actual, 10);
    });

    it('should start not painted', function() {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function() {
        room.paint();
        const actual = room.painted;
        assert.strictEqual(actual, true);        
    })
});