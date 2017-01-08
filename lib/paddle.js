
function Paddle(options) {
  this.x = options.x || 150;
  this.y = options.y || 290;
  this.width = options.width || 100;
  this.height = 10;
  this.ctx = options.ctx;
  this.canvas = options.canvas;

}

Paddle.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

Paddle.prototype.movePaddle = function(rightPressed, leftPressed) {
  console.log(this.x);
  if (rightPressed && this.x > 0) {
    this.x -= 10
  }
  if (leftPressed && this.x < this.canvas.width - 100) {
    this.x += 10;
  }
}

module.exports = Paddle;
