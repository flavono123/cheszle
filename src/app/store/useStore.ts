import { create } from 'zustand';

import { Position } from '../types/position';

type Store = {
  knightPosition: Position;
  goalPosition: Position;
  setKnightPosition: (position: Position) => void;
  canMoveKnight: (to: Position) => boolean;
  handleSquareDrop: (to: Position) => void;
  isCleared: () => boolean;
};

export const useStore = create<Store>((set, get) => ({
  knightPosition: { x: 0, y: 0 },
  goalPosition: { x: 5, y: 2 },
  setKnightPosition: (position) => set({ knightPosition: position }),
  canMoveKnight: (to) => {
    const { x, y } = get().knightPosition;
    const dx = Math.abs(to.x - x);
    const dy = Math.abs(to.y - y);
    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  },
  handleSquareDrop: (to) => {
    if (get().canMoveKnight(to)) {
      get().setKnightPosition(to);
    }
  },
  isCleared: () => {
    const { x, y } = get().knightPosition;
    const goal = get().goalPosition;
    return x === goal.x && y === goal.y;
  }
}));
