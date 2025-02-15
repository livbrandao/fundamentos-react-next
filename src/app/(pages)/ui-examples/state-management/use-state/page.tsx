"use client";
import Counter from "@/components/state/Counter";
import Title from "@/components/template/Title";
import { IconNumbers } from "@tabler/icons-react";

export default function UseState() {
  return (
    <div className="flex flex-col gap-7">
      <Title
        icon={IconNumbers}
        title="Usando Estado"
        subtitle="Como usar gerenciamento de Estado com React Hooks"
      />

      <div className="flex flex-row gap-28">
        <Counter />
        <Counter value={1000} />
      </div>
    </div>
  );
}
