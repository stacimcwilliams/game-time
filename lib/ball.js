var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x = 300;
var y = 150;
var directionX = 1;
var directionY = 1;

function Ball(x,y,width,height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

var ball = new Ball(20,20,20,20);

module.exports = ball;


Ball.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height)
}

Ball.prototype.moveBall = function() {
  this.x += directionX;
  this.y += directionY;
    if (this.x > canvas.width - 20 || this.x < 0) {
       directionX = -directionX}
    if (this.y > canvas.height - 20 || this.y < 0) {
           directionY = -directionY}
}
