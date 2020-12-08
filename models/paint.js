const Paint = function (paintLevel, usePaint) {
    this.paintLevel = paintLevel;
    this.usePaint = usePaint;
  };
  
  
  Paint.prototype.checkEmpty = function () {
    if (this.paintLevel > 0) return false;
  };
  
  Paint.prototype.emptyItself = function () {
    let newPaintLevel = this.paintLevel - this.usePaint;
      return newPaintLevel;
  }
  
  module.exports = Paint;