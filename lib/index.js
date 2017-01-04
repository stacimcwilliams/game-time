var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var paddle = require('./paddle');
var ball = require('./ball');



requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  ball.moveDirectionX();
  ball.moveDirectionY();
  requestAnimationFrame(gameLoop);
});
