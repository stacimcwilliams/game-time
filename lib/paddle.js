<<<<<<< HEAD
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var directionX = 1
var directionY = -1

function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
=======
function Paddle(options) {
  this.x = options.x;
  this.y = options.y;
  this.width = options.width;
  this.height = options.height;
  this.ctx = options.ctx;
  this.canvas = options.canvas;
>>>>>>> 407957be55e1aa1076d354b9e8e06fb0ee2299e2
}

Paddle.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.movePaddle = function(direction) {
  if (direction == "left" && this.x > 0) {
    this.x -= 10}
  if (direction == "right" && this.x < this.canvas.width - 100) {
    this.x += 10;
  }
}

module.exports = Paddle;
