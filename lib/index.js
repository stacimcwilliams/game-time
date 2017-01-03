var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x = 300;
var y = 150;
var directionX = 1;
var directionY = -1;

function createBall(){
  context.fillRect(x, y, 20, 20);
};

function createPaddle() {
  context.fillRect(150, 250, 100, 20)
};

requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  createBall();
  createPaddle();
  x += directionX;
  y += directionY;
  if (x + directionX > canvas.width - 20 || x + directionX < 0) {
    directionX = -directionX;
  }

  if (y + directionY < 0) {
    directionY = -directionY;
  }
  requestAnimationFrame(gameLoop);
});
