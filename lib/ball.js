
function Ball(options) {

  this.x = options.x || 20;
  this.y = options.y || 20;
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.ctx = options.ctx;
  this.canvas = options.canvas;
  this.directionX = 1;
  this.directionY = 1;
  this.left = this.x + this.directionX;
  this.top = this.y + this.directionY;
  this.right = this.x + this.width + this.directionY;
  this.bottom = this.y + this.height + this.directionY;
}

Ball.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Ball.prototype.moveBall = function() {
  this.x += this.directionX;
  this.y += this.directionY;

  this.left = this.x + this.directionX;
  this.top = this.y + this.directionY;
  this.right = this.x + this.width + this.directionY;
  this.bottom = this.y + this.height + this.directionY;
}

Ball.prototype.sideRebound = function () {
  if (this.x > this.canvas.width - 20 || this.x < 0) {
    this.directionX = -this.directionX;
  }
}

Ball.prototype.topRebound = function () {
  if (this.y < 0) {
    this.directionY = -this.directionY;
  }
}

module.exports = Ball;
