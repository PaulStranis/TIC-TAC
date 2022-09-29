// variables

const firstPlayerSymb = "X";
const secondPlayerSymb = "O";
let currentPlayer = firstPlayerSymb;
let cells = Array.from(document.getElementsByClassName("tile"));
let xwins = 0;
let owins = 0;

// info section functions

function startGame() {
  document.getElementById("board").style.visibility = "visible";
  document.getElementById("restartBtn").style.visibility = "visible";
  document.getElementById("victoriesCounter").style.visibility = "visible";
}

// game section functions

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", cellCompletion);
}

function changePlayer() {
  if (currentPlayer === firstPlayerSymb) {
    currentPlayer = secondPlayerSymb;
  } else {
    currentPlayer = firstPlayerSymb;
  }
}

function cellCompletion(event) {
  if (!winningCondition()) {
    if (event.currentTarget.innerHTML === "") {
      event.currentTarget.innerHTML = currentPlayer;
      if (winningCondition()) {
        winningMsg();
      }
      changePlayer();
    }
  }
}

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winningCondition() {
  for (const winCondition of winningCombinations) {
    const [a, b, c] = winCondition;
    if (
      cells[a].innerHTML &&
      cells[a].innerHTML === cells[b].innerHTML &&
      cells[a].innerHTML === cells[c].innerHTML
    ) {
      return true;
    }
  }
  return false;
}

function winningMsg() {
  if (currentPlayer === firstPlayerSymb) {
    xwins = xwins + 1;
  } else {
    owins = owins + 1;
  }
  alert(currentPlayer + " has won!");
  victoriesCount();
}

function victoriesCount() {
  let singular = "victory";
  let plural = "victories";

  if (xwins === 1) {
    document.getElementById("xVictories").innerHTML =
      "X has " + xwins + " " + singular + ".";
  } else {
    document.getElementById("xVictories").innerHTML =
      "X has " + xwins + " " + plural + ".";
  }

  if (owins === 1) {
    document.getElementById("oVictories").innerHTML =
      "O has " + owins + " " + singular + ".";
  } else {
    document.getElementById("oVictories").innerHTML =
      "O has " + owins + " " + plural + ".";
  }
}

// restart section functions

function restartGame() {
  cells.forEach((tile) => {
    tile.innerText = "";
  });
  currentPlayer = firstPlayerSymb;
}

function restartCounting() {
  xwins = 0;
  owins = 0;
  victoriesCount();
  currentPlayer = firstPlayerSymb;
}

// Used Code

// alert(currentPlayer + " " + event.currentTarget.dataset.index);

// if(cells[i] != ""){
//   continue;
// }

// == firstPlayerSymb ? secondPlayerSymb : firstPlayerSymb ;
