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
import { useStore } from '../store/useStore'
import Draggable from './Dragable'

function renderSquare(
  i: number,
  knightPosition: number[],
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

  const { goalCoord } = useStore();
  const [goalX, goalY] = goalCoord;

  return (
    <div
      key={i}
      style={BoardSquareStyle}
    >
      <BoardSquare
        x={x}
        y={y}
        isGoal={x === goalX && y === goalY}
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
    return (
      <Draggable>
        <Knight />
      </Draggable>
    );
  }
}

interface Props {
  knightPosition: number[],
}

export default function Board({ knightPosition }: Props): ReactNode {
  const squares: ReactNode[] = []
  for (let i = 0; i < TotalSquares; i++) {
    squares.push(renderSquare(i, knightPosition))
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
