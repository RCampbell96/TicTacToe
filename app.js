const gameWins = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,4,8], [2,4,6], [0,3,6],
  [1,4,7], [2,5,8]
]

const cells = document.querySelectorAll(".cell")
  cells.forEach(function(cell) {
    cell.addEventListener("click", function(e) {
      cell.innerHTML = "X";
  })
});

// function sameMove(cell) {
//   if (cell.innerHTML === "X" || cell.innerHTML === "O") {
//     return true;
//   } else {
//     return false; 
//   }
// }

function restart() {
  document.location.href = "";
}
