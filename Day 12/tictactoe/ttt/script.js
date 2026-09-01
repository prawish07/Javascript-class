const cells = document.querySelectorAll(".cell");
const resetBtn = document.getElementById("reset-btn");
// console.log(resetBtn);
let currentPlayer, win, draw, winningPLayer;
function initialize() {
  currentPlayer = "X";
  win = false;
  draw = false;
  winningPLayer = null;
  cells.forEach((cell, index) => {
    cell.innerHTML = "";
    // cell.innerHTML=index --To find the inex
    cell.addEventListener("click", handleClick, {
      once: true,
    });
  });
}
initialize();

resetBtn.addEventListener("click", initialize);

// let currentPlayer = "X";
// let win = false;
// let draw = false;
// let winningPLayer = null;
function handleClick() {
  // console.log("DDD",this)
  this.innerHTML = currentPlayer;
  checkWin();
  if (win) {
    alert("Won by " + winningPLayer);
  } else if (!win && draw) {
    alert("Draw");
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}
winningPatterns = [
  //Row
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  //Coloumn
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  //Diagnol
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin() {
  let data = [].fill("");
  cells.forEach((cell) => {
    data.push(cell.innerHTML);
    // console.log("from data",data)
  });
  winningPatterns.forEach((pattern) => {
    // console.log("WInning",pattern)
    const [a, b, c] = pattern;
    // console.log("A",a)
    // console.log("B",b)
    // console.log("C",c)
    if (data[a] && data[b] && data[c]) {
      if (data[a] == data[b] && data[b] == data[c]) {
        win = true;
        winningPLayer = currentPlayer;

        return;
      }
    }
  });
  if (!data.includes("")) {
    draw = true;
    return;
  }
}
