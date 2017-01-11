var Game = require('./game');

var game = new Game();

var startScreen = document.querySelector(".start-screen");
var startButton = document.querySelector(".start-button");
var canvasScreen = document.querySelector('.game-canvas');
var gameOverScreen = document.querySelector(".game-over");
var keypadInstructions = document.querySelector(".keypad-instructions")

requestAnimationFrame(function gameLoop() {
  game.buildGame();
  game.gameOver();

requestAnimationFrame(gameLoop);
});


startButton.addEventListener('click', function() {
  startScreen.style.display = "none";
  canvasScreen.style.display = "block";
  canvasScreen.style.visibility = "visible";
  keypadInstructions.style.visibility = "visible";
})
