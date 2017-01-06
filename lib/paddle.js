
function Paddle(options) {
  this.x = options.x;
  this.y = options.y;
  this.width = options.width;
  this.height = options.height;
  this.ctx = options.ctx;
  this.canvas = options.canvas;

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
