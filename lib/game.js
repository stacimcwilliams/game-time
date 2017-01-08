var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var Paddle = require('./paddle');
var Ball = require('./ball');
var Tile = require('./tile');

var rightPressed = false;
var leftPressed = false;

function Game() {
  this.paddle = new Paddle({ctx: ctx, canvas: canvas});
  this.ball = new Ball({ctx: ctx, canvas: canvas});
  this.tile = new Tile({x: canvas.width/2, ctx: ctx, canvas: canvas});
  this.brickColums = 8;
  this.brickRows = 4;
  this.brickWidth = 100;
  this.brickHeight = 25;
}

Game.prototype.buildGame = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  this.ball.draw();
  this.paddle.draw();
  this.ball.moveBall();
  this.collisionWithPaddle();
  this.ball.sideRebound();
  this.ball.topRebound();
  this.tile.buildTile();
  this.paddle.movePaddle(rightPressed, leftPressed);
}


Game.prototype.collisionWithPaddle = function() {
if ((this.ball.y + this.ball.height) + this.ball.directionY > this.paddle.y &&
    (this.ball.x + this.ball.width) + this.ball.directionX > this.paddle.x &&
     this.ball.x + this.ball.directionX < this.paddle.x + this.paddle.width)

     {
       this.ball.directionY = -this.ball.directionY;
     }

if ((this.ball.x + this.ball.width) + this.ball.directionX > this.paddle.x &&
    (this.ball.y + this.ball.height) + this.ball.directionY > this.paddle.y &&
     this.ball.y + this.ball.directionY < this.paddle.y + this.paddle.height)

if (this.ball.x + this.ball.directionX < this.paddle.x + this.paddle.width &&
    (this.ball.y + this.ball.height) + this.ball.directionY > this.paddle.y &&
    this.ball.y + this.ball.directionY < this.paddle.y + this.paddle.height)

    {
      this.ball.directionX = -this.ball.directionX;
      this.ball.directionY = -this.ball.directionY
    }
}

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
