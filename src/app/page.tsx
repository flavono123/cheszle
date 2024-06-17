'use client'

import { useCallback, useState } from "react";
import Board from "./components/Board";

const canMoveKnight = (toX: number, toY: number, knightPosition: number[]): boolean => {
  const [x, y] = knightPosition;
  const dx = Math.abs(toX - x);
  const dy = Math.abs(toY - y);
  return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
};

export default function Home() {
  const [knightPosition, setKnightPosition] = useState([7, 3]);

  const handleSquareDrop = useCallback((toX: number, toY: number) => {
    console.log(`Before kngihgtPosition: ${knightPosition}`); // 이동 전 로그
    console.log(`Trying to move to (${toX}, ${toY})`); // 드랍 시도 로그
    if (canMoveKnight(toX, toY, knightPosition)) {
      console.log(`Moving to (${toX}, ${toY})`); // 이동 로그
      setKnightPosition([toX, toY]);
      console.log(`After knightPosition: ${knightPosition}`); // 이동 후 로그
    }
  }, [knightPosition]);

  return (
    <main>
      <Board
        knightPosition={knightPosition}
        handleSquareDrop={handleSquareDrop}
      />
    </main >
  );
}
