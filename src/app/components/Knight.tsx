// libraries
import React, { ReactNode } from 'react'
import { FaChessKnight } from "react-icons/fa6";

import { PieceColor } from '../types/piece';

interface Props {
  color?: PieceColor;
}

export default function Knight({ color = 'black' }: Props): ReactNode {
  return (
    <div
      style={{
        color: color,
        cursor: 'move',
        fontSize: '3em',
      }}
    >
      <FaChessKnight />
    </div>
  )
}
