const assert = require("assert");
const Paint = require("../paint");

describe("Paint", function() {

    let paint;
  
    beforeEach(function() {
      paint = new Paint (50, 25);
    });
  
    it("should have a number of litres of paint", function () {
      const actual = paint.paintLevel;
      assert.strictEqual(actual, 50);
    });
  
    it("should be able to check if its empty", function () {
      const actual = paint.checkEmpty();
      assert.strictEqual(actual, false);
    });
  
    it("should be able to empty itself of paint", function () {
      const actual = paint.emptyItself();
      assert.strictEqual(actual, 25);
    });
  
  });