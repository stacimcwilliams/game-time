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
  if (direction == "left" && this.x > 0) {
    this.x -= 10}
  if (direction == "right" && this.x < canvas.width - 100) {
    this.x += 10;
  }
}

var paddle = new Paddle(150, 250, 100, 20)

module.exports = paddle;
