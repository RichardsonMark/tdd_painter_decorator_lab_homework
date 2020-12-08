const Room = function(area) {
    this.area = area;
    this.roomPainted = false;
  };
  
  Room.prototype.bePainted = function () {
    if (this.roomPainted === false) return true;
  };
  
  module.exports = Room;