// libraries
import React, { ReactNode, useRef } from 'react'

// constants
import { ItemType } from '../types/item'
import { useDrag } from 'react-dnd'

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
        opacity: isDragging ? 0.5 : 1,
        fontSize: '3em',
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♘
    </div>
  )
}
