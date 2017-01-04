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

Ball.prototype.moveDirectionX = function() {
  this.x += directionX;
}

Ball.prototype.moveDirectionY = function() {
  this.y += directionY;
}
