var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var directionX = 1
var directionY = -1

function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Paddle.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.movePaddle = function(direction) {
  if (direction == "left") {
    this.x -= 10;
  } else {
    this.x += 10;
  }
}
var paddle = new Paddle(150, 250, 100, 20)


// left arrow 37
// right arrow 39



module.exports = paddle;
