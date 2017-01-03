var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x = 50;
var y = 50;
var width = 20;
var height = 20;

requestAnimationFrame(function gameLoop() {
  context.fillRect(x++, y, width, height);
  requestAnimationFrame(gameLoop);
});
