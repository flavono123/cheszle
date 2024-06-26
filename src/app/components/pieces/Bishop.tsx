// libraries
import React, { ReactNode } from 'react'
import { FaChessBishop } from "react-icons/fa6";

import { PieceColor } from '../../types/piece';

interface Props {
  color: PieceColor;
}

export default function Bishop({ color }: Props): ReactNode {
  return (
    <div
      style={{
        color: color,
        cursor: 'move',
        fontSize: '3em',
      }}
    >
      <FaChessBishop />
    </div>
  )
}

