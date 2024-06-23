import React, { ReactNode, useRef } from 'react'

import { useStore } from '../store/useStore'

import Square from './Square'
import Overlay from './Overlay'
import { useDrop } from 'react-dnd'
import { ItemType } from '../types/item'

interface Props {
  x: number
  y: number
  isGoal: boolean
  children: ReactNode
  handleSquareDrop: (toX: number, toY: number) => void
}

const BOARD_COLORS = {
  dark: '#8B4513',
  light: '#DEB887'
}

export default function BoardSquare({ x, y, isGoal, children, handleSquareDrop }: Props): ReactNode {
  const dark = (x + y) % 2 === 1
  const color = isGoal ? 'black' : dark ? BOARD_COLORS.dark : BOARD_COLORS.light
  const { canMoveKnight } = useStore();
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemType.KNIGHT,
    canDrop: () => canMoveKnight(x, y),
    drop: () => handleSquareDrop(x, y),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
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
      <Square color={color}>{children}</Square>
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
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
}

