const Paint = function (paintLevel, usePaint) {
    this.paintLevel = paintLevel;
    this.usePaint = usePaint;
  };
  
// should be able to check if its empty 
  Paint.prototype.checkEmpty = function () {
    if (this.paintLevel > 0) return false;
  };
  
// should be able to empty itself of paint
  Paint.prototype.emptyItself = function () {
    let newPaintLevel = this.paintLevel - this.usePaint;
      return newPaintLevel;
  }
  
  module.exports = Paint;