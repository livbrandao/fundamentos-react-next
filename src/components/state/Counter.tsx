"use client";
import { IconMinus, IconPlus } from "@tabler/icons-react";
import { useState } from "react";

export interface CounterProps {
  value?: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.value ?? 0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="flex flex-col gap-2 items-center">
      <h2 className="text-xl font-bold">Contador</h2>
      <div className="flex flex-col gap-2 items-center">
        <span className="text-6xl font-semibold text-emerald-400">{count}</span>

        <div className="flex gap-2">
          <button onClick={decrement}>
            <IconPlus />
          </button>
          <button onClick={increment}>
            <IconMinus />
          </button>
        </div>
      </div>
    </div>
  );
}
