/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');

	var Game = __webpack_require__(1);
	var game = new Game({ canvas: canvas, ctx: ctx });

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
	startButton.addEventListener('click', function () {
	  startScreen.style.display = "none";
	  canvasScreen.style.display = "block";
	  canvasScreen.style.visibility = "visible";
	  keypadInstructions.style.visibility = "visible";
	});

	// Restart
	restartButton.addEventListener('click', function () {
	  document.location.reload();
	  startScreen.style.display = "none";
	  canvasScreen.style.display = "block";
	  canvasScreen.style.visibility = "visible";
	  keypadInstructions.style.visibility = "visible";
	});

	//Accept next level
	levelUpButton.addEventListener('click', function () {
	  if (beatLevelScreen.style.visibility == 'visible') {
	    beatLevelScreen.style.visibility = 'hidden';
	  }
	});

	//Game over - play again button
	playAgainButton.addEventListener('click', function () {
	  document.location.reload();
	  startScreen.style.display = "none";
	  canvasScreen.style.display = "block";
	  canvasScreen.style.visibility = "visible";
	  keypadInstructions.style.visibility = "visible";
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// var canvas = document.getElementById('game');
	// var ctx = canvas.getContext('2d');

	//Pages called in Game methods
	var startScreen = document.querySelector(".start-screen");
	var gameOverScreen = document.querySelector(".game-over");
	var canvasScreen = document.querySelector('.game-canvas');
	var beatLevelScreen = document.querySelector('.beat-level');

	var Paddle = __webpack_require__(2);
	var Ball = __webpack_require__(3);
	var Tile = __webpack_require__(4);

	//keydown and keyup listeners
	document.addEventListener("keydown", keyDown);
	document.addEventListener("keyup", keyUp);
	var rightPressed = false;
	var leftPressed = false;
	var gameStart = false;

	function keyDown(e) {
	  if (e.keyCode == 37) {
	    rightPressed = true;
	  }
	  if (e.keyCode == 39) {
	    leftPressed = true;
	  }
	  if (e.keyCode == 32) {
	    gameStart = true;
	  }
	}

	function keyUp(e) {
	  if (e.keyCode == 37) {
	    rightPressed = false;
	  }
	  if (e.keyCode == 39) {
	    leftPressed = false;
	  }
	}

	//Game constructor w/methods
	function Game(options) {
	  this.level = 1;
	  this.startBall = false;
	  this.canvas = options.canvas;
	  this.ctx = options.ctx;
	  this.paddle = new Paddle({ ctx: this.ctx, canvas: this.canvas });
	  this.ball = new Ball({ y: 90, ctx: this.ctx, canvas: this.canvas });
	  this.tiles = this.makeTileArray();
	}

	Game.prototype.buildGame = function () {
	  console.log(this.canvas);
	  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	  this.drawTiles();
	  this.ball.draw();
	  this.paddle.draw();
	  this.moveBall();
	  this.ballPaddleCollision();
	  for (i = 0; i < this.tiles.length; i++) {
	    this.ballTileCollision(this.tiles[i]);
	  }
	  this.ball.canvasBoundaries();
	  this.paddle.movePaddle(rightPressed, leftPressed);
	};

	//Tile methods

	Game.prototype.drawTiles = function () {
	  for (i = 0; i < this.tiles.length; i++) {
	    this.tiles[i].buildTile();
	  }
	};

	Game.prototype.makeTileArray = function () {
	  var tileArray = [];
	  for (column = 0; column < 10; column++) {
	    for (row = 0; row < 3; row++) {
	      tileArray.push(new Tile({ x: 5 + column * this.canvas.width / 10, y: 5 + row * 25, width: 30, height: 20, ctx: this.ctx, canvas: this.canvas }));
	    }
	  }
	  return tileArray;
	};

	Game.prototype.ballTileCollision = function (myTile) {
	  collision = false;
	  if (this.ball.y + this.ball.height <= myTile.y && this.ball.y >= myTile.y + myTile.height && this.ball.x + this.ball.width >= myTile.x && this.ball.x <= myTile.x + myTile.width) {
	    this.ball.changeDirectionY();
	  }
	  if (this.ball.x + this.ball.width >= myTile.x && this.ball.x <= myTile.x + myTile.height && this.ball.y + this.ball.height >= myTile.y && this.ball.y <= myTile.y + myTile.height) {
	    collision = true;
	    this.ball.changeDirectionX();
	  }
	  if (this.ball.x <= myTile.x + myTile.width && this.ball.x + this.ball.width >= myTile.x && this.ball.y + this.ball.height >= myTile.y && this.ball.y <= myTile.y + myTile.height) {
	    collision = true;
	    this.ball.changeDirectionX();
	  }
	  if (this.ball.y <= myTile.y + myTile.height && this.ball.y >= myTile.y && this.ball.x + this.ball.width >= myTile.x && this.ball.x <= myTile.x + myTile.width) {
	    collision = true;
	    this.ball.changeDirectionY();
	  }

	  if (collision) {
	    this.tiles.splice(this.tiles.indexOf(myTile), 1);
	  }
	};

	//Ball methods
	Game.prototype.moveBall = function () {
	  if (gameStart === false) {
	    this.ball.x = this.paddle.x + this.paddle.width / 2 - this.ball.width / 2;
	    this.ball.y = this.paddle.y - this.ball.height;
	  }

	  if (gameStart === true) {
	    this.ball.x += this.ball.directionX;
	    this.ball.y -= this.ball.directionY;
	  }
	};

	Game.prototype.ballPaddleCollision = function () {
	  if (this.ball.y + this.ball.height > this.paddle.y && this.ball.x + this.ball.width > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
	    this.ball.changeDirectionY();
	  }
	};

	//Page methods
	Game.prototype.levelUp = function () {
	  if (this.tiles.length === 0) {
	    this.level++;
	    this.ball.directionX += 1;
	    this.ball.directionY -= 1;
	    gameStart = false;
	    this.moveBall();
	    this.tiles = this.makeTileArray();
	  }
	};

	Game.prototype.beatLevel = function () {
	  if (this.tiles.length === 0) {
	    canvasScreen.style.visibility = 'visible';
	    startScreen.style.visibility = 'hidden';
	    gameOverScreen.style.visibility = 'hidden';
	    beatLevelScreen.style.visibility = 'visible';
	  }
	};

	Game.prototype.gameOver = function () {
	  if (this.ball.y > this.canvas.height) {
	    canvasScreen.style.visibility = 'hidden';
	    startScreen.style.visibility = 'hidden';
	    gameOverScreen.style.visibility = 'visible';
	  }
	};

	module.exports = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	
	function Paddle(options) {
	  this.x = options.x || 150;
	  this.y = options.y || 290;
	  this.width = options.width || 100;
	  this.height = 10;
	  this.ctx = options.ctx;
	  this.canvas = options.canvas;
	}

	Paddle.prototype.draw = function () {
	  this.ctx.fillRect(this.x, this.y, this.width, this.height);
	};

	Paddle.prototype.movePaddle = function (rightPressed, leftPressed) {
	  if (rightPressed && this.x > 0) {
	    this.x -= 10;
	  }
	  if (leftPressed && this.x < this.canvas.width - 100) {
	    this.x += 10;
	  }
	};

	module.exports = Paddle;

	//code below to be deleted

	// this.right = this.x + this.width;
	// this.left = this.x;

	// this.right = this.x + this.width;
	// this.left = this.x;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	
	var Paddle = __webpack_require__(2);

	function Ball(options) {
	  this.x = options.x;
	  this.y = options.y;
	  this.width = options.width || 20;
	  this.height = options.height || 20;
	  this.ctx = options.ctx;
	  this.canvas = options.canvas;
	  this.directionX = options.directionX || -2.5;
	  this.directionY = options.directionY || -2.5;
	}

	Ball.prototype.draw = function () {
	  this.ctx.fillRect(this.x, this.y, this.width, this.height);
	};

	Ball.prototype.changeDirectionX = function () {
	  if (this.directionX) {
	    this.directionX = -this.directionX;
	  }
	};

	Ball.prototype.changeDirectionY = function () {
	  if (this.directionY) {
	    this.directionY = -this.directionY;
	  }
	};

	Ball.prototype.canvasBoundaries = function () {
	  if (this.x > this.canvas.width - 20 || this.x < 0) {
	    this.directionX = -this.directionX;
	  }
	  if (this.y < 0) {
	    this.directionY = -this.directionY;
	  }
	};

	module.exports = Ball;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var Tile = function (options) {
	  this.x = options.x || 0;
	  this.y = options.y || 0;
	  this.width = options.width || 50;
	  this.height = options.height || 20;
	  this.ctx = options.ctx;
	  this.canvas = options.canvas;
	};

	Tile.prototype.buildTile = function () {
	  this.ctx.fillRect(this.x, this.y, this.width, this.height);
	};

	module.exports = Tile;

/***/ }
/******/ ]);