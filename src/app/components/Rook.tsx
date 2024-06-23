// libraries
import React, { ReactNode } from 'react'
import { FaChessRook } from "react-icons/fa6";

import { PieceColor } from '../types/piece';

interface Props {
  color: PieceColor;
}

export default function Rook({ color }: Props): ReactNode {
  return (
    <div
      style={{
        color: color,
        cursor: 'move',
        fontSize: '3em',
      }}
    >
      <FaChessRook />
    </div>
  )
}

