var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var Paddle = require('./paddle');
var Ball = require('./ball');
var Tile = require('./tile');

var rightPressed = false;
var leftPressed = false;

function Game() {
  this.paddle = new Paddle({ctx: ctx, canvas: canvas});
// <<<<<<< sm-breakout-v1
  this.ball = new Ball({y:90,ctx: ctx, canvas: canvas});
  this.tiles = makeTileArray();
}

function makeTileArray() {
  var tileArray = [];
  for (column = 0; column < 10; column++) {
    for (row = 0; row < 3; row++) {
      tileArray.push(new Tile({x: 5 + column * canvas.width/10,y: 5 + row * 25, width: 30, height:20, ctx:ctx, canvas:canvas}));
    }
  }
  return tileArray;
}

Game.prototype.drawTiles = function() {
  makeTileArray(this.tiles);
  for (i = 0; i < this.tiles.length; i++) {
    this.tiles[i].buildTile();
  }
// =======
//   this.ball = new Ball({ctx: ctx, canvas: canvas});
//   this.tile = new Tile({x: 180, y:230, ctx: ctx, canvas: canvas});
//   this.brickColums = 8;
//   this.brickRows = 4;
//   this.brickWidth = 100;
//   this.brickHeight = 25;
// >>>>>>> master
}

// Game.prototype.buildGame = function() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   this.drawTiles();
//   this.ball.draw();
//   this.paddle.draw();
//   this.ball.moveBall();
// <<<<<<< sm-breakout-v1
  this.collision(this.paddle);
  for (i = 0; i < this.tiles.length; i++) {
    this.collision(this.tiles[i]);
  }
// =======
// //   this.collisionWithPaddle();
// //   this.collisionWithTile();
// >>>>>>> master
  this.ball.sideRebound();
  this.ball.topRebound();
  this.paddle.movePaddle(rightPressed, leftPressed);
}

Game.prototype.collisionWithTile = function(tile) {
if ((this.ball.y + this.ball.height) + this.ball.directionY > this.tile.y &&
    (this.ball.x + this.ball.width) + this.ball.directionX > this.tile.x &&
     this.ball.x + this.ball.directionX < this.tile.x + this.tile.width)

     {
       this.ball.directionY = -this.ball.directionY;
       this.tile.removeTile(tile);
     }
}

Game.prototype.collision = function(tileOrPaddle) {
  var collision = false;
  if ((this.ball.bottom == tileOrPaddle.top) &&
    // (this.ball.top < tileOrPaddle.bottom) &&
    (this.ball.right >= tileOrPaddle.left) &&
    (this.ball.left <= tileOrPaddle.right) && (this.ball.directionY == 1)
  ){
    collision = true;
    this.ball.directionY = -this.ball.directionY;
  }
  if ((this.ball.top == tileOrPaddle.bottom) &&
    (this.ball.left <= tileOrPaddle.right) &&
    (this.ball.right >= tileOrPaddle.left) && (this.ball.directionY == -1)
  ){
    collision = true;
    this.ball.directionY = -this.ball.directionY;
  }
  if((this.ball.left == tileOrPaddle.right || this.ball.right == tileOrPaddle.left) &&
    (this.ball.top <= tileOrPaddle.bottom) &&
    (this.ball.bottom >= tileOrPaddle.top)
  ){
    collision = true;
    this.ball.directionY = -this.ball.directionY;
    this.ball.directionX = -this.ball.directionX;
  }
  if (collision && (tileOrPaddle instanceof Tile)) {
    this.tiles.splice(this.tiles.indexOf(tileOrPaddle), 1);
  }

}

  // if (this.ball.top > tileOrPaddle.bottom &&
  //   this.ball.left > tileOrPaddle.left &&
  //   this.ball.right < tileOrPaddle.right && this.ball.directionY == -1
  // ){
  //   this.ball.directionY = -this.ball.directionY;
  // }
  //
  // if (this.ball.bottom > tileOrPaddle.top &&
  //   this.ball.left < tileOrPaddle.left &&
  //   this.ball.right < tileOrPaddle.right && this.ball.directionY == -1
  // ){
  //   this.ball.directionY = -this.ball.directionY;
  // }
  //
  // if (this.ball.right < tileOrPaddle.left &&
  //   this.ball.left > tileOrPaddle.left &&
  //   this.ball.top < tileOrPaddle.top &&
  //   this.ball.bottom > this.tileOrPaddle.bottom
  // ){
  //   this.ball.directionY = -this.ball.directionY;
  //   this.ball.directionX = -this.ball.directionX;
  // }



// <<<<<<< sm-breakout-v1
// =======
//   {
//       this.ball.directionX = -this.ball.directionX;
//       this.ball.directionY = -this.ball.directionY
//   }

// if (this.ball.y > canvas.height)

//   {
//     alert("GAME OVER");
//     document.location.reload();
//   }
// }
// >>>>>>> master

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

function keyDown(e) {
    if(e.keyCode == 37) {
        rightPressed = true;
    }
    if(e.keyCode == 39) {
        leftPressed = true;
    }}


function keyUp(e) {
    if(e.keyCode == 37) {
        rightPressed = false;
    }
   if(e.keyCode == 39) {
        leftPressed = false;
    }
}


module.exports = Game;


//   var ballTop = this.ball.y + this.ball.directionY;
//   var ballBottom = this.ball.y + this.ball.height + this.ball.directionY;
//   var ballLeft = this.ball.x + this.ball.directionX;
//   var ballRight = this.ball.x + this.ball.width + this.ball.directionX;
//   var paddleOrTileTop = this.ball.y + this.ball.directionY;
//   var paddleOrTileBottom = paddleOrTile.y + paddleOrTile.height;
//   var paddleOrTileLeft = paddleOrTile.x + paddleOrTile.directionX;
//   var paddleOrTileRight = paddleOrTile.x + paddleOrTile.width + paddleOrTile.directionX;
//
// if ((this.ball.y + this.ball.height) + this.ball.directionY > paddleOrTile.y &&
//     (this.ball.x + this.ball.width) + this.ball.directionX > paddleOrTile.x &&
//      this.ball.x + this.ball.directionX < paddleOrTile.x + paddleOrTile.width)
//
//      {
//        this.ball.directionY = -this.ball.directionY;
//      }
//
// // if ((this.ball.x + this.ball.width) + this.ball.directionX > paddleOrTile.x &&
// //     (this.ball.y + this.ball.height) + this.ball.directionY > paddleOrTile.y &&
// //      this.ball.y + this.ball.directionY < paddleOrTile.y + paddleOrTile.height)
//
// if (this.ball.x + this.ball.directionX < paddleOrTile.x + paddleOrTile.width &&
//     (this.ball.y + this.ball.height) + this.ball.directionY > paddleOrTile.y &&
//     this.ball.y + this.ball.directionY < paddleOrTile.y + paddleOrTile.height)
//
//     {
//       this.ball.directionX = -this.ball.directionX;
//       this.ball.directionY = -this.ball.directionY
//     }
// }
