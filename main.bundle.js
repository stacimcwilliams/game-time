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

	var Game = __webpack_require__(1);

	var game = new Game();

	requestAnimationFrame(function gameLoop() {
	  game.buildGame();

	  requestAnimationFrame(gameLoop);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var canvas = document.getElementById('game');
	var ctx = canvas.getContext('2d');

	var Paddle = __webpack_require__(2);
	var Ball = __webpack_require__(3);
	var Tile = __webpack_require__(4);

	var rightPressed = false;
	var leftPressed = false;

	function Game() {
	  this.paddle = new Paddle({ ctx: ctx, canvas: canvas });
	  this.ball = new Ball({ y: 90, ctx: ctx, canvas: canvas });
	  this.tiles = makeTileArray();
	}

	function makeTileArray() {
	  var tileArray = [];
	  for (column = 0; column < 10; column++) {
	    for (row = 0; row < 3; row++) {
	      tileArray.push(new Tile({ x: 5 + column * canvas.width / 10, y: 5 + row * 25, width: 30, height: 20, ctx: ctx, canvas: canvas }));
	    }
	  }
	  return tileArray;
	}

	Game.prototype.drawTiles = function () {
	  makeTileArray(this.tiles);
	  for (i = 0; i < this.tiles.length; i++) {
	    this.tiles[i].buildTile();
	  }
	};

	Game.prototype.buildGame = function () {
	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  this.drawTiles();
	  this.ball.draw();
	  this.paddle.draw();
	  this.ball.moveBall();
	  this.collision(this.paddle);
	  for (i = 0; i < this.tiles.length; i++) {
	    this.collision(this.tiles[i]);
	  }
	  this.collision(this.paddle);
	  for (i = 0; i < this.tiles.length; i++) {
	    this.collision(this.tiles[i]);
	  }
	  this.ball.canvasBoundaries();
	  this.paddle.movePaddle(rightPressed, leftPressed);
	};

	Game.prototype.collision = function (tileOrPaddle) {
	  var collision = false;
	  if (this.ball.bottom == tileOrPaddle.top &&
	  // (this.ball.top < tileOrPaddle.bottom) &&
	  this.ball.right >= tileOrPaddle.left && this.ball.left <= tileOrPaddle.right && this.ball.directionY == 1) {
	    collision = true;
	    this.ball.directionY = -this.ball.directionY;
	  }
	  if (this.ball.top == tileOrPaddle.bottom && this.ball.left <= tileOrPaddle.right && this.ball.right >= tileOrPaddle.left && this.ball.directionY == -1) {
	    collision = true;
	    this.ball.directionY = -this.ball.directionY;
	  }
	  if ((this.ball.left == tileOrPaddle.right || this.ball.right == tileOrPaddle.left) && this.ball.top <= tileOrPaddle.bottom && this.ball.bottom >= tileOrPaddle.top) {
	    collision = true;
	    this.ball.directionY = -this.ball.directionY;
	    this.ball.directionX = -this.ball.directionX;
	  }
	  if (collision && tileOrPaddle instanceof Tile) {
	    this.tiles.splice(this.tiles.indexOf(tileOrPaddle), 1);
	  }
	  if (this.ball.top > canvas.height) {
	    alert("GAME OVER");
	    document.location.reload();
	  }
	};

	document.addEventListener("keydown", keyDown);
	document.addEventListener("keyup", keyUp);

	function keyDown(e) {
	  if (e.keyCode == 37) {
	    rightPressed = true;
	  }
	  if (e.keyCode == 39) {
	    leftPressed = true;
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
	  this.left = this.x;
	  this.top = this.y;
	  this.right = this.x + this.width;
	  this.bottom = this.y + this.height;
	}

	Paddle.prototype.draw = function () {
	  this.ctx.fillRect(this.x, this.y, this.width, this.height);
	};

	Paddle.prototype.movePaddle = function (rightPressed, leftPressed) {
	  if (rightPressed && this.x > 0) {
	    this.x -= 10;
	    this.right = this.x + this.width;
	    this.left = this.x;
	  }
	  if (leftPressed && this.x < this.canvas.width - 100) {
	    this.x += 10;
	    this.right = this.x + this.width;
	    this.left = this.x;
	  }
	};

	module.exports = Paddle;

/***/ },
/* 3 */
/***/ function(module, exports) {

	
	function Ball(options) {

	  this.x = options.x || 20;
	  this.y = options.y || 20;
	  this.width = options.width || 20;
	  this.height = options.height || 20;
	  this.ctx = options.ctx;
	  this.canvas = options.canvas;
	  this.directionX = 1;
	  this.directionY = 1;
	  this.left = this.x + this.directionX;
	  this.top = this.y + this.directionY;
	  this.right = this.x + this.width + this.directionY;
	  this.bottom = this.y + this.height + this.directionY;
	}

	Ball.prototype.draw = function () {
	  this.ctx.fillRect(this.x, this.y, this.width, this.height);
	};

	Ball.prototype.moveBall = function () {
	  this.x += this.directionX;
	  this.y += this.directionY;
	  this.left = this.x + this.directionX;
	  this.top = this.y + this.directionY;
	  this.right = this.x + this.width + this.directionY;
	  this.bottom = this.y + this.height + this.directionY;
	};

	Ball.prototype.canvasBoundaries = function () {
	  var collision = false;
	  if (this.x > this.canvas.width - 20 || this.x < 0) {
	    collision = true;
	    this.directionX = -this.directionX;
	  };

	  if (this.y < 0) {
	    collision = true;
	    this.directionY = -this.directionY;
	  };
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
	  this.left = this.x;
	  this.top = this.y;
	  this.right = this.x + this.width;
	  this.bottom = this.y + this.height;
	};

	Tile.prototype.buildTile = function () {
	  this.ctx.fillRect(this.x, this.y, this.width, this.height);
	};
	//
	// Tile.prototype.removeTile = function() {
	//   this.visible = false
	//   this.x = -1000;
	// }

	module.exports = Tile;

/***/ }
/******/ ]);