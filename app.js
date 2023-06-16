var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';
var gameActive = true;

function placeMark(cellIndex) {
  if (gameActive && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
    if (checkWin()) {
      alert('Player ' + currentPlayer + ' wins!');
      gameActive = false;
    } else if (board.indexOf('') === -1) {
      alert('It\'s a tie!');
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
  var winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];
  for (var i = 0; i < winningCombos.length; i++) {
    var combo = winningCombos[i];
    if (board[combo[0]] !== '' && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      return true;
    }
  }
  return false;
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameActive = true;
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}
