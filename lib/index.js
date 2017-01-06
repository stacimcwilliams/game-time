var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var Paddle = require('./paddle');
var Ball = require('./ball');

var ball = new Ball({x: 20, y:20, width:20, height: 20, ctx: ctx, canvas: canvas});
var paddle = new Paddle({x: 150, y: 270, width: 100, height:20, ctx:ctx, canvas: canvas})

requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  ball.moveBall();
  ballBoundaries();
  requestAnimationFrame(gameLoop);
  });

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function ballBoundaries() {
  collisionWithPaddle();
  ball.sideRebound();
  ball.topRebound();
}

function collisionWithPaddle() {
    if (ball.y + ball.directionY > canvas.height - 50) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.directionY = -ball.directionY;
    }
  }

};

function keyDown(e) {
    if(e.keyCode == 39) {
        // rightPressed = true;
        paddle.movePaddle("right");
    }
    else if(e.keyCode == 37) {
        // leftPressed = true;
        paddle.movePaddle("left");
    }
}
function keyUp(e) {
    if(e.keyCode == 39) {
        paddle.movePaddle("right")
    }
    else if(e.keyCode == 37) {
        paddle.movePaddle("left");
    }
}
