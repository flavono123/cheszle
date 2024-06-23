import { create } from 'zustand';

import { Position, Piece } from '../types/piece';

type Store = {
  pieces: Piece[];
  goalPosition: Position;
  findPiece: (name: string, type: string) => Piece;
  findPieceByPosition: (position: Position) => Piece;
  setPiecePosition: (piece: Piece, to: Position) => void;
  canMovePiece: (piece: Piece, to: Position) => boolean;
  handleSquareDrop: (from: Piece, to: Position) => void;
  isCleared: () => boolean;
};

function canMoveKnight(from: Position, to: Position) {
  const dx = Math.abs(to.x - from.x);
  const dy = Math.abs(to.y - from.y);
  return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
}


export const useStore = create<Store>((set, get) => ({
  pieces: [
    {
      name: 'black',
      type: 'knight',
      color: 'black',
      position: {
        x: 0, y: 0,
      }
    },
    {
      name: 'one',
      type: 'knight',
      color: 'white',
      position: {
        x: 0, y: 1,
      }
    },
    {
      name: 'two',
      type: 'knight',
      color: 'white',
      position: {
        x: 1, y: 1,
      }
    },
    {
      name: 'three',
      type: 'knight',
      color: 'white',
      position: {
        x: 2, y: 1,
      }
    },
    {
      name: 'four',
      type: 'knight',
      color: 'white',
      position: {
        x: 3, y: 1,
      }
    },
  ],
  goalPosition: { x: 5, y: 2 },
  findPiece: (name, type) => {
    return get().pieces.find((p) => p.name === name && p.type === type) ?? <Piece>{};
  },
  findPieceByPosition: (position) => {
    return get().pieces.find((p) => p.position.x === position.x && p.position.y === position.y) ?? <Piece>{};
  },
  setPiecePosition: (piece, to) => {
    set({
      pieces: get().pieces.map((p) => {
        if (p.name === piece.name && p.type == piece.type) {
          p.position = to;
        }
        return p;
      }),
    });
  },
  canMovePiece: (piece, to) => {
    // if to is occupied no
    if (get().findPieceByPosition(to).name) {
      return false;
    }
    const from = piece.position;
    switch (piece.type) {
      case 'knight':
        return canMoveKnight(from, to);
    }
  },
  handleSquareDrop: (piece, to) => {
    if (get().canMovePiece(piece, to)) {
      get().setPiecePosition(piece, to)
    }
  },
  isCleared: () => {
    const { x, y } = get().findPiece('black', 'knight').position;
    const goal = get().goalPosition;
    return x === goal.x && y === goal.y;
  }
}));
