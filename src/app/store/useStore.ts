import { create } from 'zustand';

import { Position, Piece } from '../types/piece';

type Store = {
  pieces: Piece[];
  goalPosition: Position;
  findPiece: (name: string, type: string) => Piece | null;
  findPieceByPosition: (position: Position) => Piece | null;
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

function canMoveBishop(from: Position, to: Position) {
  const dx = Math.abs(to.x - from.x);
  const dy = Math.abs(to.y - from.y);
  return dx === dy;
}

function canMoveRook(from: Position, to: Position) {
  return from.x === to.x || from.y === to.y;
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
    {
      name: 'hana',
      type: 'bishop',
      color: 'white',
      position: {
        x: 1, y: 0,
      }
    },
    {
      name: 'dul',
      type: 'bishop',
      color: 'white',
      position: {
        x: 2, y: 0,
      }
    },
    {
      name: 'set',
      type: 'bishop',
      color: 'white',
      position: {
        x: 3, y: 0,
      }
    },
    {
      name: 'net',
      type: 'bishop',
      color: 'white',
      position: {
        x: 4, y: 0,
      }
    },
    {
      name: 'yi',
      type: 'rook',
      color: 'white',
      position: {
        x: 5, y: 0,
      }
    },
    {
      name: 'er',
      type: 'rook',
      color: 'white',
      position: {
        x: 4, y: 1,
      }
    },
    {
      name: 'san',
      type: 'rook',
      color: 'white',
      position: {
        x: 5, y: 1,
      }
    },
    {
      name: 'si',
      type: 'rook',
      color: 'white',
      position: {
        x: 4, y: 2,
      }
    },
  ],
  goalPosition: { x: 5, y: 2 },
  findPiece: (name, type) => {
    return get().pieces.find((p) => p.name === name && p.type === type) ?? null;
  },
  findPieceByPosition: (position) => {
    return get().pieces.find((p) => p.position.x === position.x && p.position.y === position.y) ?? null;
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
    if (get().findPieceByPosition(to)) {
      return false;
    }
    const from = piece.position;
    switch (piece.type) {
      case 'knight':
        return canMoveKnight(from, to);
      case 'bishop':
        return canMoveBishop(from, to);
      case 'rook':
        return canMoveRook(from, to);
      default:
        return false
    }
  },
  handleSquareDrop: (piece, to) => {
    if (get().canMovePiece(piece, to)) {
      get().setPiecePosition(piece, to)
    }
  },
  isCleared: () => {
    const blackKnight = get().findPiece('black', 'knight');
    if (!blackKnight) {
      throw new Error('black knight not found');
    }
    const { x, y } = blackKnight.position;
    const goal = get().goalPosition;
    return x === goal.x && y === goal.y;
  }
}));
