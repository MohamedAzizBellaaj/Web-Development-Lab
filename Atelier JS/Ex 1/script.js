const guess = document.querySelector("button");
const difficulty = document.querySelector("select");
guess.addEventListener("click", playGame);

function playGame() {
  const level = difficulty.value;
  switch (level) {
    case "easy":
      gameInstance(10);
    case "medium":
      gameInstance(15);
    case "hard":
      gameInstance(20);
  }
}

function gameInstance(maxNumber) {
  let reponse = window.prompt("Guess a number");
  const x = getRandomFrom0ToMax(maxNumber);
  while (x != reponse) {
    reponse = window.prompt("Guess again");
  }
  if (x == reponse) {
    alert("You have won !");
  }
}
function getRandomFrom0ToMax(max) {
  return Math.floor(Math.random() * (max + 1));
}
