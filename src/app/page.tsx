'use client'

// store: zustand
import { useStore } from "./store/useStore";
import Board from "./components/Board";

export default function Home() {
  const { knightPosition, handleSquareDrop, isCleared } = useStore();

  return (
    <main>
      <Board
        knightPosition={knightPosition}
        handleSquareDrop={handleSquareDrop}
      />
      {isCleared() && (
        <h1>DONE</h1>
      )}
    </main >
  );
}
