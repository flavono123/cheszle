const boardSquareStyleConst = {
  side: 50, // both pxs of width and height
}

const boardStyleConst = {
  row: 6,
  col: 3,
}


// HACK: hard coded values are better now
// const instructionCoords = [ // 4 squares in the last row from left
//   [2, 0],
//   [2, 1],
//   [2, 2],
//   [2, 3],
// ]

// local utils
function px(size: number): string {
  return `${size}px`;
}


export const TotalSquares: number = boardStyleConst.row * boardStyleConst.col; // this is not a style but a constant actually

// styles: should be used in the upper div of components
export const BoardSquareStyle: React.CSSProperties = {
  width: px(boardSquareStyleConst.side),
  height: px(boardSquareStyleConst.side),
};
export const BoardStyle: React.CSSProperties = {
  width: px(boardSquareStyleConst.side * boardStyleConst.row),
  height: px(boardSquareStyleConst.side * boardStyleConst.col),
};

export const InstructionSquaresStyle: React.CSSProperties = {
  width: px(boardSquareStyleConst.side * 4),
  height: px(boardSquareStyleConst.side * 1),
  textAlign: 'center',
  backgroundColor: '#FAF0E6',
}
