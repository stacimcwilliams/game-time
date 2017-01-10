var Game = require('./game');

var game = new Game();

var startScreen = document.querySelector(".start-screen");
var startButton = document.querySelector(".start-button");
var canvas = document.querySelector('.game-canvas');

requestAnimationFrame(function gameLoop() {
  game.buildGame();

requestAnimationFrame(gameLoop);
});


startButton.addEventListener('click', function() {
  startScreen.style.display = "none";
  canvas.style.display = "block";
  canvas.style.visibility = "visible";
})
