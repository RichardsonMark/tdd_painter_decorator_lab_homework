const assert = require("assert");
const Decorator = require("../decorator.js");
const Room = require("../room.js");
const Paint = require("../paint.js");

describe("Decorator", function() {

    let decorator;
    let paintCan;
    let room;

    beforeEach(function() {
        decorator = new Decorator();
        paintCan = new Paint(10)
        room = new Room(25)
      });


    it("should start with an empty paint stock", function () {
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });

    it("should be able to add a can of paint to paint stock", function() {
        decorator.addStock(paintCan);
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paintCan]);
      });
    
    it("should be able to calculate total litres of paint in stock", function () {
        decorator.addStock(paintCan)
        decorator.addStock(paintCan)
        const actual = decorator.stockCount();
        assert.deepStrictEqual(actual, 20);
      })

    it("should be able to calculate whether it has enough paint to paint a room", function () {
        decorator.addStock(paintCan)
        decorator.addStock(paintCan)
        decorator.addStock(paintCan)
        const actual = decorator.enoughPaint(room);
        assert.strictEqual(actual, true);
    });

    it("be able to paint room if has enough paint in stock", function () {
        decorator.addStock(paintCan)
        decorator.addStock(paintCan)
        decorator.addStock(paintCan)
        decorator.paintRoom(room)
        const actual = room.roomPainted
        assert.strictEqual(actual, true)
    });
});