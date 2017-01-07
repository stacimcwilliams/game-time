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

var ball = new Ball({x:5, y:5, width: 10, height: 10, context:context});

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
      paddle.movePaddle("right");
    }
    else if(e.keyCode == 37) {
        paddle.movePaddle("left");
    }
}

// function keyUp(e) {
//     if(e.keyCode == 39) {
//         paddle.movePaddle("right")
//     }
//     else if(e.keyCode == 37) {
//         paddle.movePaddle("left");
//     }
// }

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
