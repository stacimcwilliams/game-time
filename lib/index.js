var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
// var paddle = require('./paddle');

var x = 300;
var y = 150;
var directionX = 1;
var directionY = -1;

// function drawBall() {
// ctx.beginPath();
// ctx.rect(x,y, width, height);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();
// }

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  // ball.draw(10, 10, 20, 20);
  // paddle.draw(10,10,20,20);
  // x += directionX;
  // y += directionY;
  // if (x + directionX > canvas.width - 20 || x + directionX < 0) {
  //   directionX = -directionX;
  // }
  //
  // if (y + directionY < 0) {
  //   directionY = -directionY;
  // }
  requestAnimationFrame(gameLoop);
});
