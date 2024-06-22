// libraries
import React, { ReactNode, useRef } from 'react'
import { FaChessKnight } from "react-icons/fa6";
import { useDrag } from 'react-dnd'

// constants
import { ItemType } from '../types/item'

export default function Knight(): ReactNode {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    }),
  }));

  drag(ref);

  return (
    <div
      ref={ref}
      style={{
        color: 'black',
        cursor: 'move',
        fontSize: '3em',
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      <FaChessKnight />
    </div>
  )
}
