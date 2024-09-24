document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.getElementById('tshirtCanvas');
  const context = canvas.getContext('2d');
  const saveBtn = document.getElementById('saveDesign');

  // Canvas size
  canvas.width = 400;
  canvas.height = 400;

  // Basic drawing example
  context.fillStyle = 'blue';
  context.fillRect(50, 50, 300, 300);

  // Save design
  saveBtn.addEventListener('click', function () {
    const image = canvas.toDataURL('image/png');
    console.log(image); // Handle the image saving logic here
    alert('Design saved!');
  });
});
