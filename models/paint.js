const Paint = function (paintLevel, usePaint) {
    this.paintLevel = paintLevel;
    this.usePaint = usePaint;
  };
  
// should be able to check if its empty 
  Paint.prototype.checkEmpty = function () {
    if (this.paintLevel > 0){
        return false;
    }
    return true;
  };

// need to remember if looking for false/true, need to still return the other one and test for that

// could also have done
// return this.litresOfPaint === 0;
// or
// return !this.litresOfPaint;


  
// should be able to empty itself of paint
  Paint.prototype.emptyItself = function () {
    let newPaintLevel = this.paintLevel - this.usePaint;
      return newPaintLevel;
  }
  
  module.exports = Paint;