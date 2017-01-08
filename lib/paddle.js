
function Paddle(options) {
  this.x = options.x || 150;
  this.y = options.y || 290;
  this.width = options.width || 100;
  this.height = 10;
  this.ctx = options.ctx;
  this.canvas = options.canvas;
  this.left = this.x;
  this.top = this.y;
  this.right = this.x + this.width;
  this.bottom = this.y + this.height;
}

Paddle.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.movePaddle = function(rightPressed, leftPressed) {
  if (rightPressed && this.x > 0) {
    this.x -= 10;
    this.right = this.x + this.width;
    this.left = this.x;
  }
  if (leftPressed && this.x < this.canvas.width - 100) {
    this.x += 10;
    this.right = this.x + this.width;
    this.left = this.x;
  }
}

module.exports = Paddle;
