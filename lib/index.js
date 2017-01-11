

var Game = require('./game');

var game = new Game();

var startScreen = document.querySelector(".start-screen");
var startButton = document.querySelector(".start-button");
var canvasScreen = document.querySelector('.game-canvas');
var gameOverScreen = document.querySelector(".game-over");
var keypadInstructions = document.querySelector(".keypad-instructions");
var restartButton = document.querySelector(".restart-button");
var playAgainButton = document.querySelector(".play-again-button");
var levelUpButton = document.querySelector(".level-up-button");
var beatLevelScreen = document.querySelector('.beat-level');

requestAnimationFrame(function gameLoop() {
  game.buildGame();
  game.beatLevel();
  game.levelUp();
  game.gameOver();

requestAnimationFrame(gameLoop);
});

levelUpButton.addEventListener('click', function (){
  if (beatLevelScreen.style.visibility == 'visible') {
    beatLevelScreen.style.visibility = 'hidden';
  }
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
});

playAgainButton.addEventListener('click', function() {
  document.location.reload();
  startScreen.style.display = "none";
  canvasScreen.style.display = "block";
  canvasScreen.style.visibility = "visible";
  keypadInstructions.style.visibility = "visible";
});
