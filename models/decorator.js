const Decorator = function(stock) {
    this.stock = [];
  };
  
  // be able to add a can of paint to paint stock
  Decorator.prototype.addStock = function (canOfPaint) {
    this.stock.push(canOfPaint);
  };
  
  // be able to calculate total litres paint it has in stock
  Decorator.prototype.stockCount = function() {
    let totalPaint = 0
    for (let paint of this.stock) {
        totalPaint += paint.paintLevel;
    };
    return totalPaint; 
};

// be able to calculate whether is has enough paint to paint a room
  Decorator.prototype.enoughPaint = function(room) {
      totalPaint = this.stockCount()
    if (room.area <= totalPaint) {
        return true;
    } else {
        return false;
    };
};

// be able to paint room if has enough paint in stock
Decorator.prototype.paintRoom = function(room) {
    if (this.enoughPaint(room) === true) {
        room.roomPainted = true;
        return room.roomPainted;
    };
};

  module.exports = Decorator;