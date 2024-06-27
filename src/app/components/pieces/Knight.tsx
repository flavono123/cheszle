// libraries
import React, { ReactNode } from 'react'
import { FaChessKnight } from "react-icons/fa6";

import { PieceColor } from '../../types/piece';

interface Props {
  color: PieceColor;
}

export default function Knight({ color }: Props): ReactNode {
  return (
    <div
      style={{
        color: color,
        fontSize: '3em',
      }}
    >
      <FaChessKnight />
    </div>
  )
}
