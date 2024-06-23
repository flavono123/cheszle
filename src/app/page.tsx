'use client'

// store: zustand
import { useStore } from "./store/useStore";
import Board from "./components/Board";

export default function Home() {
  const { isCleared } = useStore();

  return (
    <main>
      <Board />
      {isCleared() && (
        <h1>DONE</h1>
      )}
    </main >
  );
}
