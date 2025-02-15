"use client";
import Title from "@/components/template/Title";

export default function ButtonExample() {
  function handleClick(text: string) {
    alert(`Botão clicado. ${text}!`);
  }

  return (
    <div>
      <Title title="Usando botão" subtitle="Como utilizar botão com React" />

      <div className="py-7">
        <button
          className="button primary"
          onClick={() => handleClick("Bom dia")}
        >
          Execultar
        </button>
      </div>
    </div>
  );
}
