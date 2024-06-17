// libraries
import React, { ReactNode } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// components
import Knight from './Knight'
import BoardSquare from './BoardSquare'

interface HandleSquareDropCallback {
  (toX: number, toY: number): void
}

function renderSquare(
  i: number,
  knightPosition: number[],
  handleSquareDrop: HandleSquareDropCallback,
): ReactNode {
  const x = i % 8
  const y = Math.floor(i / 8)

  return (
    <div
      key={i}
      style={{ width: '12.5%', height: '12.5%' }}
    >
      <BoardSquare
        x={x}
        y={y}
        handleSquareDrop={handleSquareDrop}
      >
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
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

interface BoardProps {
  knightPosition: number[],
  handleSquareDrop: HandleSquareDropCallback,
}

export default function Board({ knightPosition, handleSquareDrop }: BoardProps): ReactNode {
  const squares: ReactNode[] = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, handleSquareDrop))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '400px',
          height: '400px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    </DndProvider>
  )
}
