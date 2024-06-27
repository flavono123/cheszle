'use client'

// store: zustand
import { store } from "./store/useStore";
import Board from "./components/ui/Board";
import Result from "./components/ui/Result";
import MoveMethodToggleButton from "./components/ui/MoveMethodToggleButton";

export default function Home() {
  const { isCleared } = store();

  return (
    <main>
      <Board />
      <MoveMethodToggleButton />
      {isCleared() && (
        <Result />
      )}
    </main >
  );
}
