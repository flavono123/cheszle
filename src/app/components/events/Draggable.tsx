import React, { ReactNode, useRef } from 'react';
import { useDrag } from 'react-dnd';

import { ItemType } from '../../types/item';
import { Piece } from '../../types/piece';

interface Props {
  piece: Piece;
  children: ReactNode;
}

export default function Draggable({ piece, children }: Props): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.KNIGHT,
    item: piece,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(ref);

  return (
    <div
      ref={ref}
      style={{
        cursor: 'move',
        opacity: isDragging ? 0.5 : 1
      }}
    >
      {children}
    </div>
  );
};

