const board = document.getElementById("board");
const boxList = document.getElementsByClassName("board__cell");
const resetBtn = document.getElementById("resetBtn");
let playerTurn = 1;

resetBtn.addEventListener("click", (event) => {
  playerTurn = 1;
  for (let box of boxList) {
    box.textContent = "";
  }
});

for (let box of boxList) {
  box.textContent = "s";
}

function startGame() {
  for (let box of boxList) {
    box.addEventListener("click", (event) => {
      if (playerTurn % 2 === 1 && box.textContent === "") {
        box.textContent = "X";
        playerTurn += 1;
      } else if (playerTurn % 2 === 0 && box.textContent === "") {
        box.textContent = "O";
        playerTurn += 1;
      } else {
        box.textContent = "";
      }
    });
  }
}

startGame()


