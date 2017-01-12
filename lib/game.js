// var canvas = document.getElementById('game');
// var ctx = canvas.getContext('2d');

//Pages called in Game methods
var startScreen = document.querySelector(".start-screen");
var gameOverScreen = document.querySelector(".game-over");
var canvasScreen = document.querySelector('.game-canvas');
var beatLevelScreen = document.querySelector('.beat-level');

var Paddle = require('./paddle');
var Ball = require('./ball');
var Tile = require('./tile');

//keydown and keyup listeners
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
var rightPressed = false;
var leftPressed = false;
var gameStart = false;

function keyDown(e) {
  if(e.keyCode == 37) {
    rightPressed = true;
  }
  if(e.keyCode == 39) {
    leftPressed = true;
  }
  if (e.keyCode == 32) {
    gameStart = true;
  }
}

function keyUp(e) {
  if(e.keyCode == 37) {
    rightPressed = false;
  }
  if(e.keyCode == 39) {
    leftPressed = false;
  }
}

//Game constructor w/methods
function Game(options) {
  this.level = 1;
  this.startBall = false;
  this.canvas = options.canvas;
  this.ctx = options.ctx;
  this.paddle = new Paddle({ctx: this.ctx, canvas: this.canvas});
  this.ball = new Ball({y:90,ctx: this.ctx, canvas: this.canvas});
  this.tiles = this.makeTileArray();
}

Game.prototype.buildGame = function() {
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

Game.prototype.drawTiles = function() {
  for (i = 0; i < this.tiles.length; i++) {
    this.tiles[i].buildTile();
  }
};

Game.prototype.makeTileArray = function() {
  var tileArray = [];
  for (column = 0; column < 10; column++) {
    for (row = 0; row < 3; row++) {
      tileArray.push(new Tile({x: 5 + column * this.canvas.width/10,y: 5 + row * 25, width: 30, height:20, ctx:this.ctx, canvas:this.canvas}));
    }
  }
  return tileArray;
};

Game.prototype.ballTileCollision = function (myTile) {
  collision = false;
  if ((this.ball.y + this.ball.height <= myTile.y) &&
      (this.ball.y >= myTile.y + myTile.height) &&
      (this.ball.x + this.ball.width >= myTile.x) &&
      (this.ball.x <= myTile.x + myTile.width))
     {
       this.ball.changeDirectionY();
     }
if ((this.ball.x + this.ball.width >= myTile.x) &&
    (this.ball.x  <= myTile.x + myTile.height) &&
    (this.ball.y + this.ball.height  >= myTile.y) &&
    (this.ball.y <= myTile.y + myTile.height))
    {
      collision = true;
      this.ball.changeDirectionX();
    }
if ((this.ball.x  <= myTile.x + myTile.width) &&
    (this.ball.x + this.ball.width >= myTile.x) &&
    (this.ball.y + this.ball.height >= myTile.y) &&
    (this.ball.y <= myTile.y + myTile.height))
    {
      collision = true;
      this.ball.changeDirectionX();
    }
if ((this.ball.y <= (myTile.y + myTile.height)) &&
    (this.ball.y >= myTile.y) &&
    ((this.ball.x + this.ball.width) >= myTile.x) &&
    (this.ball.x <= (myTile.x + myTile.width)))
    {
      collision = true;
      this.ball.changeDirectionY();
    }

  if (collision) {
    this.tiles.splice(this.tiles.indexOf(myTile), 1);
  }

};


//Ball methods
Game.prototype.moveBall = function() {
  if (gameStart === false) {
    this.ball.x = this.paddle.x + this.paddle.width/2 - this.ball.width/2;
    this.ball.y = this.paddle.y - this.ball.height;
  }

  if (gameStart === true) {
    this.ball.x += this.ball.directionX;
    this.ball.y -= this.ball.directionY;
  }
};

Game.prototype.ballPaddleCollision = function() {
  if ((this.ball.y + this.ball.height > this.paddle.y) &&
      (this.ball.x + this.ball.width > this.paddle.x) &&
      (this.ball.x < this.paddle.x + this.paddle.width))
  {
    this.ball.changeDirectionY();
  }
};

//Page methods
Game.prototype.levelUp = function() {
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

Game.prototype.gameOver = function() {
  if (this.ball.y > this.canvas.height) {
    canvasScreen.style.visibility = 'hidden';
    startScreen.style.visibility = 'hidden';
    gameOverScreen.style.visibility = 'visible';
  }
};

module.exports = Game;
