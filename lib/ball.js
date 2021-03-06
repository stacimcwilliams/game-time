
var Paddle = require('./paddle');

function Ball(options) {
  this.x = options.x;
  this.y = options.y;
  this.width = options.width || 20;
  this.height = options.height || 20;
  this.ctx = options.ctx;
  this.canvas = options.canvas;
  this.directionX = options.directionX || -2.5;
  this.directionY = options.directionY || -2.5;
}


Ball.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
};

Ball.prototype.changeDirectionX = function() {
  if (this.directionX) {
    this.directionX = -this.directionX;
  }
};

Ball.prototype.changeDirectionY= function() {
  if (this.directionY) {
    this.directionY = -this.directionY;
  }
};

Ball.prototype.canvasBoundaries = function () {
  if (this.x > this.canvas.width - 20 || this.x < 0) {
    this.directionX = -this.directionX;
  }
  if (this.y < 0) {
    this.directionY = -this.directionY;
  }
};

module.exports = Ball;
