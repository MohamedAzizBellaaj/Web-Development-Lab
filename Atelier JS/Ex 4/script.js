const ol = document.querySelector("ol");
ol.addEventListener("click", (e) => {
  e.target.style.color = generateRandomRGBA();
});

function generateRandomFrom0ToMax(max) {
  return Math.floor(Math.random() * (max + 1));
}
function generateRandomRGBA() {
  return `rgba(${generateRandomFrom0ToMax(255)},${generateRandomFrom0ToMax(
    255
  )},${generateRandomFrom0ToMax(255)},${Math.random()})`;
}
