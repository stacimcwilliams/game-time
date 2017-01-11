var Game = require('./game');

var game = new Game();

var startScreen = document.querySelector(".start-screen");
var startButton = document.querySelector(".start-button");
var canvasScreen = document.querySelector('.game-canvas');
var gameOverScreen = document.querySelector(".game-over");
var keypadInstructions = document.querySelector(".keypad-instructions");
var restartButton = document.querySelector(".restart-button");
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
});

restartButton.addEventListener('click', function() {
  document.location.reload();
  startScreen.style.display = "none";
  canvasScreen.style.display = "block";
  canvasScreen.style.visibility = "visible";
  keypadInstructions.style.visibility = "visible";
})
