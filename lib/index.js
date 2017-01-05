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















// document.addEventListener("keydown", function(event) {
//   console.log(event.keyCode);
//   if(event.keyCode === 37) {
//     paddle.movePaddle("left");
//   } else if (event.keyCode === 39) {
//     paddle.movePaddle();
//   }
//   console.log(paddle.x);
// })
=======
>>>>>>> d87b86979ff136e7e52e75598e23aa1d2753a3d5
