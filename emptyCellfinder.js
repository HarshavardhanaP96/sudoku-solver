export default function findEmptyCell(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      // empty will be represented with 0
      if (board[i][j] === 0) {
        return [i, j];
      }
    }
  }
  return null;
}
