var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var startScreen = document.querySelector(".start-screen");
var gameOverScreen = document.querySelector(".game-over")
var canvasScreen = document.querySelector('.game-canvas');
var beatLevelScreen = document.querySelector('.beat-level');

var Paddle = require('./paddle');
var Ball = require('./ball');
var Tile = require('./tile');

var rightPressed = false;
var leftPressed = false;
var gameStart = false;

function Game() {
  this.paddle = new Paddle({ctx: ctx, canvas: canvas});
  this.ball = new Ball({y:90,ctx: ctx, canvas: canvas});
  this.level = 1;
  this.tiles = this.makeTileArray();
  this.startBall = false;
}

Game.prototype.gameOver = function() {
  if (this.ball.y > canvas.height) {
    canvasScreen.style.visibility = 'hidden';
    startScreen.style.visibility = 'hidden';
    gameOverScreen.style.visibility = 'visible';
    };
};

Game.prototype.beatLevel = function () {
  if (this.tiles.length === 0) {
    canvasScreen.style.visibility = 'visible';
    startScreen.style.visibility = 'hidden';
    gameOverScreen.style.visibility = 'hidden';
    beatLevelScreen.style.visibility = 'visible';
  }
}

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

Game.prototype.makeTileArray = function() {
  var tileArray = [];
  for (column = 0; column < 10; column++) {
    for (row = 0; row < 3; row++) {
      tileArray.push(new Tile({x: 5 + column * canvas.width/10,y: 5 + row * 25, width: 30, height:20, ctx:ctx, canvas:canvas}));
    }
  }
  return tileArray;
}

Game.prototype.drawTiles = function() {
  for (i = 0; i < this.tiles.length; i++) {
    this.tiles[i].buildTile();
  }
}

Game.prototype.moveBall = function() {
  if (gameStart === false) {
    this.ball.x = this.paddle.x + this.paddle.width/2 - this.ball.width/2;
    this.ball.y = this.paddle.y - this.ball.height;
  }

  if (gameStart === true) {
    this.ball.x += this.ball.directionX;
    this.ball.y -= this.ball.directionY;
  }
}

Game.prototype.buildGame = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.drawTiles();
  this.ball.draw();
  this.paddle.draw();
  this.moveBall();
  this.ballPaddleCollision();
  for (i = 0; i < this.tiles.length; i++) {
    this.ballTileCollision(this.tiles[i]);
  }
  this.ball.canvasBoundaries();
  // this.levelUp();
  this.paddle.movePaddle(rightPressed, leftPressed);
  // this.levelUp();
}

Game.prototype.ballPaddleCollision = function() {

  if ((this.ball.y + this.ball.height > this.paddle.y) &&
      (this.ball.x + this.ball.width > this.paddle.x) &&
      (this.ball.x < this.paddle.x + this.paddle.width))

     {
       this.ball.changeDirectionY();
     }

// if ((this.ball.x + this.ball.width > this.paddle.x) &&
//     (this.ball.y + this.ball.height  > this.paddle.y) &&
//     (this.ball.y < this.paddle.y + this.paddle.height))
//
//     {
//       this.ball.changeDirectionX();
//     }
//
// if ((this.ball.x  < this.paddle.x + this.paddle.width) &&
//     (this.ball.y + this.ball.height > this.paddle.y) &&
//     (this.ball.y < this.paddle.y + this.paddle.height))
//
//     {
//       this.ball.changeDirectionX();
//     };
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

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);


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

module.exports = Game;





// this.ball.x += this.ball.directionX;
// this.ball.y += this.ball.directionY;
// this.left = this.x + this.directionX;
// this.top = this.y + this.directionY;
// this.right = this.x + this.width + this.directionY;
// this.bottom = this.y + this.height + this.directionY;
// }







// Game.prototype.levelUp = function() {
//   if (this.tile.length == 0) {
//     this.level++;
//     this.tiles = this.makeTileArray();
//   }
// }
