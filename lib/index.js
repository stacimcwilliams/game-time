var Game = require('./game');

var game = new Game()



requestAnimationFrame(function gameLoop() {
  game.buildGame();

requestAnimationFrame(gameLoop);
});



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
