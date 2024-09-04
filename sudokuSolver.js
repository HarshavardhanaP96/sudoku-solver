import findEmptyCell from "./emptyCellfinder.js";
import isSafe from "./isELementSafe.js";

export default function solveSudoku(board, wrongpath = { count: 0 }) {
  let emptyCell = findEmptyCell(board);

  if (emptyCell == null) {
    return true;
  }

  let [row, col] = emptyCell;

  //checking possibilities of all values in the cell
  for (let i = 1; i < 10; i++) {
    if (isSafe(board, row, col, i)) {
      board[row][col] = i;

      if (solveSudoku(board, wrongpath)) {
        return true;
      }

      board[row][col] = 0;
      wrongpath.count++;
    }
  }
  return false;
}
