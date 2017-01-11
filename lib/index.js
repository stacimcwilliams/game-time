var Game = require('./game');
var game = new Game();

// Selectors for Pages and corresponding buttons

var startScreen = document.querySelector(".start-screen");
var startButton = document.querySelector(".start-button");

var canvasScreen = document.querySelector('.game-canvas');
var restartButton = document.querySelector(".restart-button");
var keypadInstructions = document.querySelector(".keypad-instructions");

var beatLevelScreen = document.querySelector('.beat-level');
var levelUpButton = document.querySelector(".level-up-button");

var gameOverScreen = document.querySelector(".game-over");
var playAgainButton = document.querySelector(".play-again-button");


requestAnimationFrame(function gameLoop() {
  game.buildGame();
  game.beatLevel();
  game.levelUp();
  game.gameOver();
requestAnimationFrame(gameLoop);
});

//Buttons
//Start game
startButton.addEventListener('click', function() {
  startScreen.style.display = "none";
  canvasScreen.style.display = "block";
  canvasScreen.style.visibility = "visible";
  keypadInstructions.style.visibility = "visible";
});

// Restart
restartButton.addEventListener('click', function() {
  document.location.reload();
  startScreen.style.display = "none";
  canvasScreen.style.display = "block";
  canvasScreen.style.visibility = "visible";
  keypadInstructions.style.visibility = "visible";
});

//Accept next level
levelUpButton.addEventListener('click', function (){
  if (beatLevelScreen.style.visibility == 'visible') {
    beatLevelScreen.style.visibility = 'hidden';
  }
});

//Game over - play again button
playAgainButton.addEventListener('click', function() {
  document.location.reload();
  startScreen.style.display = "none";
  canvasScreen.style.display = "block";
  canvasScreen.style.visibility = "visible";
  keypadInstructions.style.visibility = "visible";
});
