var Game = require('./game');

var game = new Game()

requestAnimationFrame(function gameLoop() {
  game.buildGame();
requestAnimationFrame(gameLoop);
});


// function gameLost() {
//   if (ball.top > canvas.height)
//   {
//     alert("GAME OVER");
//     cancelAnimationFrame();
//   }
// }
