
function Ball(options) {
  this.x = options.x || 10;
  this.y = options.y;
  this.width = options.width;
  this.height = options.height;
  this.ctx = options.ctx;
  this.canvas = options.canvas;
  this.directionX = 1;
  this.directionY = 1;
}

Ball.prototype.draw = function() {
  this.ctx.fillRect(this.x, this.y, this.width, this.height)

}

Ball.prototype.moveBall = function() {
  this.x += this.directionX;
  this.y += this.directionY;
    if (this.x > this.canvas.width - 20 || this.x < 0) {
       this.directionX = -this.directionX}
    if (this.y > this.canvas.height - 20 || this.y < 0) {
          this.directionY = -this.directionY}
}

module.exports = Ball;
