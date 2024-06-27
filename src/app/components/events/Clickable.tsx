import React, { ReactNode } from 'react';

import { store } from '@/app/store/useStore';
import { Piece } from '@/app/types/piece';

interface Props {
  piece: Piece;
  children: ReactNode;
}

export default function Clickable({ piece, children }: Props): ReactNode {
  const { handleSquareClick } = store();
  return (
    <div
      onClick={() => handleSquareClick(piece)}
      style={{
        cursor: 'pointer',
      }}
    >
      {children}
    </div>
  );
};

