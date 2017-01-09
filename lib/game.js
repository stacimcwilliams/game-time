var canvas = document.getElementById('game');
var ctx = canvas.getContext('2d');

var Paddle = require('./paddle');
var Ball = require('./ball');
var Tile = require('./tile');

var rightPressed = false;
var leftPressed = false;

function Game() {
  this.paddle = new Paddle({ctx: ctx, canvas: canvas});
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
}

Game.prototype.buildGame = function() {
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
  if (this.ball.top > canvas.height)

  {
    alert("GAME OVER");
    document.location.reload();
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
