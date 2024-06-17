import React, { ReactNode, useRef } from 'react'

import Square from './Square'
import { useDrop } from 'react-dnd'
import { ItemType } from '../types/item'

interface BoardSquareProps {
  x: number
  y: number
  children: React.ReactNode
  handleSquareDrop: (toX: number, toY: number) => void
}

export default function BoardSquare({ x, y, children, handleSquareDrop }: BoardSquareProps): ReactNode {
  const black = (x + y) % 2 === 1
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.KNIGHT,
    drop: () => handleSquareDrop(x, y),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  }), [x, y, handleSquareDrop]);
  const ref = useRef<HTMLDivElement>(null)

  drop(ref)
  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <Square black={black}>{children}</Square>
      {isOver && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: 'yellow',
          }}
        />
      )}
    </div>
  );
}
