var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var Paddle = require('./paddle');
var Ball = require('./ball');
var Tile = require('./tile');

var rightPressed = false;
var leftPressed = false;
var gameStart = false;

function Game() {
  this.paddle = new Paddle({ctx: ctx, canvas: canvas});
  this.ball = new Ball({y:90,ctx: ctx, canvas: canvas});
  // this.level = 1;
  this.tiles = this.makeTileArray();
  this.startBall = false;
}



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
  // this.collision(this.paddle);
  // for (i = 0; i < this.tiles.length; i++) {
  //   this.collision(this.tiles[i]);
  // }
  this.ballPaddleCollision();
  this.ball.canvasBoundaries();
  this.paddle.movePaddle(rightPressed, leftPressed);
  // this.levelUp();
}

Game.prototype.ballPaddleCollision = function() {
  var left = this.ball.x;
  var top = this.ball.y;
  var right = this.ball.x + this.ball.width;
  var bottom = this.ball.y + this.ball.height;
  if ((bottom > this.paddle.y) &&
     (right > this.paddle.x) &&
     (left  < this.paddle.x + this.paddle.width))
  {
    this.ball.changeDirectionY();
  }
  }


// Game.prototype.collision = function(tileOrPaddle) {
//   var collision = false;
//   if ((this.ball.bottom > tileOrPaddle.top) &&
//     // (this.ball.top < tileOrPaddle.bottom) &&
//     (this.ball.right  > tileOrPaddle.left) &&
//     (this.ball.left < tileOrPaddle.right)
//     // (this.ball.directionY == 1)
//   ){
//     collision = true;
//     // this.ball.changeDirectionY();
//     this.ball.y -= this.ball.directionY;
//   }
//   if ((this.ball.top == tileOrPaddle.bottom) &&
//     (this.ball.left <= tileOrPaddle.right) &&
//     (this.ball.right >= tileOrPaddle.left) && (this.ball.directionY == -1)
//   ){
//     collision = true;
//     // this.ball.changeDirectionY();
//     this.ball.directionY = -this.ball.directionY;
//   }
//   if((this.ball.left == tileOrPaddle.right || this.ball.right == tileOrPaddle.left) &&
//     (this.ball.top <= tileOrPaddle.bottom) &&
//     (this.ball.bottom >= tileOrPaddle.top)
//   ){
//     collision = true;
//     // this.ball.changeDirectionX();
//     this.ball.directionY = -this.ball.directionY;
//     this.ball.directionX = -this.ball.directionX;
//   }
//   if (collision && (tileOrPaddle instanceof Tile)) {
//     this.tiles.splice(this.tiles.indexOf(tileOrPaddle), 1);
//   }
//   if (this.ball.top > canvas.height)
//
//   {
//     alert("GAME OVER");
//     document.location.reload();
//   }
// }

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
