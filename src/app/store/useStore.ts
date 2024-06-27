// fine should be renamed
import { create } from 'zustand';

import { Position, Piece, PieceType } from '../types/piece';

type MoveCount = {
  total: number;
  knight: number;
  bishop: number;
  rook: number;
};

type Store = {
  pieces: Piece[];
  goalPosition: Position;
  emptyPosition: Position;
  findPiece: (name: string, type: string) => Piece | null;
  findPieceByPosition: (position: Position) => Piece | null;
  setEmptyPosition: (position: Position) => void;
  setPiecePosition: (piece: Piece, to: Position) => void;
  canClickPiece: (piece: Piece) => boolean;
  canDropPiece: (piece: Piece, to: Position) => boolean;
  canMovePiece: (piece: Piece, to: Position) => boolean;
  handleSquareClick: (piece: Piece) => void;
  handleSquareDrop: (from: Piece, to: Position) => void;
  moveCount: MoveCount;
  countMovement: (type: PieceType) => void;
  moveMethod: 'dnd' | 'click';
  setMoveMethod: (method: 'dnd' | 'click') => void;
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

export const store = create<Store>((set, get) => ({
  moveMethod: 'click',
  setMoveMethod: (method) => {
    set({ moveMethod: method });
  },
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
  emptyPosition: { x: 5, y: 2 },
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
  setEmptyPosition: (position) => {
    set({ emptyPosition: position });
  },
  canClickPiece: (piece) => {
    // this piece can be moved to emptyPosition
    return get().canMovePiece(piece, get().emptyPosition);
  },
  canDropPiece: (piece, to) => {
    // if to is occupied no
    if (get().findPieceByPosition(to)) {
      return false;
    }
    return get().canMovePiece(piece, to);
  },
  canMovePiece: (piece, to) => {
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
  handleSquareClick: (piece) => {
    if (get().canClickPiece(piece)) {
      const from = piece.position;
      get().setPiecePosition(piece, get().emptyPosition);
      get().countMovement(piece.type);
      get().setEmptyPosition(from);
    }
  },
  handleSquareDrop: (piece, to) => {
    if (get().canDropPiece(piece, to)) {
      const from = piece.position;
      get().setPiecePosition(piece, to);
      get().countMovement(piece.type);
      get().setEmptyPosition(from);
    }
  },
  moveCount: {
    total: 0,
    knight: 0,
    bishop: 0,
    rook: 0,
  },
  countMovement: (type) => {
    const count = get().moveCount;
    count.total++;
    count[type]++;
    console.log(count);
    set({ moveCount: count });
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
