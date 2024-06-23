import React, { ReactNode, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { ItemType } from '../types/item';

interface Props {
  children: ReactNode;
}

export default function Draggable({ children }: Props): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  drag(ref);

  return (
    <div
      ref={ref}
      style={{
        opacity: isDragging ? 0.5 : 1
      }}
    >
      {children}
    </div>
  );
};

