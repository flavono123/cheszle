'use client'

// store: zustand
import { store } from "./store/useStore";
import Board from "./components/ui/Board";
import Result from "./components/ui/Result";

export default function Home() {
  const { isCleared } = store();

  return (
    <main>
      <Board />
      {isCleared() && (
        <Result />
      )}
    </main >
  );
}
