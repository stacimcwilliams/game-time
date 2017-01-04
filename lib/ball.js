


function Ball(x,y,width,height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Ball.prototype.draw = function() {
  fillRect(this.x, this.y, this.width, this.height)
}

Ball.prototype.moveDirectionX = function() {

}

Ball.prototype.moveDirectionY = function() {

}
