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
  this.tile = new Tile({ctx: ctx, canvas: canvas});
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
  if (this.ball.y + this.ball.directionY > canvas.height - (this.ball.height + this.paddle.height)) {
    if (this.ball.x > this.paddle.x && this.ball.x < this.paddle.x + this.paddle.width) {
      this.ball.directionY = -this.ball.directionY
    } else if(this.ball.y + this.ball.directionY > canvas.height) {
      alert("GAME OVER - Better luck next time!");
      document.location.reload();
    }
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
