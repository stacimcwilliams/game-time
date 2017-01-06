var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var paddle = require('./paddle');
var ball = require('./ball');



requestAnimationFrame(function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  ball.draw();
  paddle.draw();
  ball.moveBall();

  requestAnimationFrame(gameLoop);
  });

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

var ball = new Ball({x:5, y:5, width: 10, height: 10, context:context});

function keyDown(e) {
    if(e.keyCode == 39) {
      paddle.movePaddle("right");
    }
    else if(e.keyCode == 37) {
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

// function ballPaddleCollision() {
//  x += dx;
//  y += dy;
//  if (x + dx > canvis.width - ball.height)
// }














// document.addEventListener("keydown", function(event) {
//   console.log(event.keyCode);
//   if(event.keyCode === 37) {
//     paddle.movePaddle("left");
//   } else if (event.keyCode === 39) {
//     paddle.movePaddle();
//   }
//   console.log(paddle.x);
// })
