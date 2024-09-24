// Example animation logic for button hover
const saveBtn = document.getElementById('saveDesign');

saveBtn.addEventListener('mouseover', function () {
  saveBtn.style.transform = 'scale(1.1)';
});

saveBtn.addEventListener('mouseout', function () {
  saveBtn.style.transform = 'scale(1)';
});
