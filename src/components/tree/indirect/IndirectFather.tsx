"use client";
import { useState } from "react";
import IndirectChildren from "./IndirectChildren";

export interface IndirectFatherProps {}

export default function IndirectFather(props: IndirectFatherProps) {
  const [result, setResult] = useState("???");

  function getResult(result: string) {
    setResult(result);
  }

  return (
    <div>
      <p className="text-3xl font-bold">Quem descobriu o Brasil?</p>

      <div className="flex gap-2 items-center">
        <span className="text-lg text-zinc-500">Resposta:</span>
        <span className="font-semibold text-sm text-zinc-300 bg-green-600 p-2 rounded-md">
          {result}
        </span>
      </div>

      <div className="py-7">
        <IndirectChildren
          options={["Pedro Álvares Cabral", "Colombo", "índios"]}
          onSelected={getResult}
        />
      </div>
    </div>
  );
}
