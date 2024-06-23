'use client'

// store: zustand
import { store } from "./store/useStore";
import Board from "./components/Board";

export default function Home() {
  const { isCleared } = store();

  return (
    <main>
      <Board />
      {isCleared() && (
        <h1>DONE</h1>
      )}
    </main >
  );
}
