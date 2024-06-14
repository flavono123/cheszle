'use client'

import { useCallback, useEffect, useState } from "react";
import Board from "./components/Board";

const canMoveKnight = (toX: number, toY: number, knightPosition: number[]): boolean => {
  const [x, y] = knightPosition;
  const dx = Math.abs(toX - x);
  const dy = Math.abs(toY - y);
  return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
};

export default function Home() {
  const [knightPosition, setKnightPosition] = useState([7, 4]);

  const handleSquareClick = useCallback((toX: number, toY: number) => {
    if (canMoveKnight(toX, toY, knightPosition)) {
      setKnightPosition([toX, toY]);
    }
  }, [knightPosition]);

  return (
    <main>
      <Board knightPosition={knightPosition} handleSquareClick={handleSquareClick} />
    </main >
  );
}
