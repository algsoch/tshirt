// JavaScript for the T-shirt design tool

// Example feature: change T-shirt color
function changeTshirtColor(color) {
  const canvas = document.getElementById('tshirtCanvas');
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Hooking the color change to button events
document.getElementById('changeColor').addEventListener('click', function () {
  changeTshirtColor('red');
});
