const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  const level = e.target.innerText;
  switch (level) {
    case "easy":
      gameInstance(10);
    case "medium":
      gameInstance(15);
    case "hard":
      gameInstance(20);
  }
});

function gameInstance(maxNumber) {
  let reponse = window.prompt("Guess a number");
  const x = getRandomFrom0ToMax(maxNumber);
  while (x != reponse) {
    reponse = window.prompt("Guess again");
  }
  if (x == reponse) {
    alert("You have won !");
  }
  ul.removeEventListener();
}
function getRandomFrom0ToMax(max) {
  return Math.floor(Math.random() * (max + 1));
}
