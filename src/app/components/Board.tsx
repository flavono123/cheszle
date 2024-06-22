// libraries
import React, { ReactNode } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// components
import Knight from './Knight'
import BoardSquare from './BoardSquare'
import InstuctionSquares from './InstructionSquares'

// constants
import {
  BoardStyle,
  BoardSquareStyle,
  InstructionSquaresStyle,
  TotalSquares
} from '../constants/styles'

interface HandleSquareDropCallback {
  (toX: number, toY: number): void
}

function renderSquare(
  i: number,
  knightPosition: number[],
  handleSquareDrop: HandleSquareDropCallback,
): ReactNode {
  const x = i % 6
  const y = Math.floor(i / 6)

  if (y === 2 && x === 0) {
    return (
      <div
        style={InstructionSquaresStyle}
      >
        <InstuctionSquares />
      </div>
    );
  }

  if (y === 2 && (x === 1 || x === 2 || x === 3)) {
    return null; // 이 부분은 InstructionSquares에 의해 대체됩니다.
  }


  return (
    <div
      key={i}
      style={BoardSquareStyle}
    >
      <BoardSquare
        x={x}
        y={y}
        handleSquareDrop={handleSquareDrop}
      >
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div >
  )
}

function renderPiece(
  x: number,
  y: number,
  [knightX, knightY]: number[]
) {
  if (x === knightX && y === knightY) {
    return <Knight />
  }
}

interface Props {
  knightPosition: number[],
  handleSquareDrop: HandleSquareDropCallback,
}

export default function Board({ knightPosition, handleSquareDrop }: Props): ReactNode {
  const squares: ReactNode[] = []
  for (let i = 0; i < TotalSquares; i++) {
    squares.push(renderSquare(i, knightPosition, handleSquareDrop))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          ...BoardStyle,
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    </DndProvider>
  )
}
