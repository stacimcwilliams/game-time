var canvas = document.getElementById('game');
var context = canvas.getContext('2d');


var directionX = 1;
var directionY = 1;

function Ball(options, context, canvas) {
  this.x = options.x;
  this.y = options.y;
  this.raduis = options.radius;
  // this.width = width;
  // this.height = height;
  this.canvas = canvas;
  this.context = context
}

var ball = new Ball({x:5, y:5, width: 10, height: 10, context:context});

Ball.prototype.draw = function() {
  this.context.arc()
}

Ball.prototype.moveBall = function() {
  this.x += directionX;
  this.y += directionY;
    if (this.x > canvas.width - 20 || this.x < 0) {
       directionX = -directionX}
    if (this.y > canvas.height - 20 || this.y < 0) {
           directionY = -directionY}
}

module.exports = ball;
