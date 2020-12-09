const Decorator = function(stock) {
    this.stock = [];
  };
  

// pseudocode example for addStock function...
// make a total litres variable
// loop over all of the paint cans in the stock
// when in the loop, grab the paint canss litresofpaint
// add that to the total litres variable

// return total litres variable

  // be able to add a can of paint to paint stock
  Decorator.prototype.addStock = function (canOfPaint) {
    this.stock.push(canOfPaint);
  };
  
  // looping an array : use 'of' - MOST COMMON (normally in Python this is 'in')
  // looping all elements of an object : use 'in' - LESS COMMON
  
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