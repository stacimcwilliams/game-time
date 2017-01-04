var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

function Paddle(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Paddle.prototype.draw = function() {
  context.fillRect(this.x, this.y, this.width, this.height);
}

var paddle = new Paddle(150, 250, 100, 20)


// left arrow 37
// right arrow 39

// document.addEventListener("keydown", function(event) {
//   if(event.keycode == 37) {
//     paddle.x -= 1;
//   }
// })

module.exports = paddle;
