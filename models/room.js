const Room = function(area) {
    this.area = area;
    this.roomPainted = false;
  };
  
// should be able to be painted
  Room.prototype.bePainted = function () {
    if (this.roomPainted === false) return true;
  };
  
  module.exports = Room;