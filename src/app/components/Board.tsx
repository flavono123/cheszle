import React, { ReactNode } from 'react'
import Square from './Square'
import Knight from './Knight'

function renderSquare(i: number, [knightX, knightY]: number[], handleSquareClick: (toX: number, toY: number) => void
): ReactNode {
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightX && y === knightY
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : null

  return (
    <div
      key={i}
      style={{ width: '12.5%', height: '12.5%' }}
      onClick={() => handleSquareClick(x, y)}
    >
      <Square black={black}>{piece}</Square>
    </div>
  )
}

export default function Board({
  knightPosition,
  handleSquareClick
}: {
  knightPosition: number[],
  handleSquareClick: (toX: number, toY: number) => void
}): ReactNode {
  const squares: ReactNode[] = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition, handleSquareClick))
  }

  return (
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
  )
}
