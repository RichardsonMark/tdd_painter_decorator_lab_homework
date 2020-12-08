const assert = require("assert");
const Room = require("../room.js");

describe("Room", function() {

    beforeEach(function() {
      room = new Room (25);
    });

    it("should have an area, in metres squared", function() {
        const actual = room.area;
        assert.strictEqual(actual, 25);
      });

      
});
