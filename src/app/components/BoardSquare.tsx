import React, { ReactNode } from 'react'

import Square from './Square'
import Droppable from './Droppable'

interface Props {
  x: number
  y: number
  isGoal: boolean
  children: ReactNode
}

const BOARD_COLORS = {
  dark: '#8B4513',
  light: '#DEB887'
}

export default function BoardSquare({ x, y, isGoal, children }: Props): ReactNode {
  const dark = (x + y) % 2 === 1
  const color = isGoal ? 'black' : dark ? BOARD_COLORS.dark : BOARD_COLORS.light

  return (
    <Droppable x={x} y={y}>
      <Square color={color}>{children}</Square>
    </Droppable>
  );
}

