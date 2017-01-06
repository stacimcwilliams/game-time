var Game = require('./game');

var game = new Game()

requestAnimationFrame(function gameLoop() {
  game.buildGame();


requestAnimationFrame(gameLoop);
});
