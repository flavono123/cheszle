import { create } from 'zustand';

type Store = {
  knightPosition: [number, number];
  goalCoord: [number, number];
  setKnightPosition: (position: [number, number]) => void;
  canMoveKnight: (toX: number, toY: number) => boolean;
  handleSquareDrop: (toX: number, toY: number) => void;
  isCleared: () => boolean;
};

export const useStore = create<Store>((set, get) => ({
  knightPosition: [0, 0],
  goalCoord: [5, 2],
  setKnightPosition: (position) => set({ knightPosition: position }),
  canMoveKnight: (toX, toY) => {
    const [x, y] = get().knightPosition;
    const dx = Math.abs(toX - x);
    const dy = Math.abs(toY - y);
    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
  },
  handleSquareDrop: (toX, toY) => {
    if (get().canMoveKnight(toX, toY)) {
      get().setKnightPosition([toX, toY]);
    }
  },
  isCleared: () => {
    const [x, y] = get().knightPosition;
    const [goalX, goalY] = get().goalCoord;
    return x === goalX && y === goalY;
  }
}));
