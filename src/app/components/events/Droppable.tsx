import React, { ReactNode, useRef } from 'react';
import Overlay from '../ui/Overlay';
import { useDrop } from 'react-dnd';
import { ItemType } from '../../types/item';
import { Piece } from '../../types/piece';
import { store } from '../../store/useStore';

interface Props {
  x: number;
  y: number;
  children: ReactNode;
};

export default function Droppable({ x, y, children }: Props): ReactNode {
  const { canDropPiece, handleSquareDrop } = store();
  const to = { x, y };
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemType.KNIGHT,
    canDrop: (item: Piece) => canDropPiece(item, to),
    drop: (item: Piece) => handleSquareDrop(item, to),
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
      style={{ // HACK: 여기 맞아?
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
}
