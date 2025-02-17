"use client";
import Title from "@/components/template/Title";
import { IconClick } from "@tabler/icons-react";

export default function ButtonExample() {
  function handleClick(text: string) {
    alert(`Botão clicado. ${text}!`);
  }

  const code = `
  function handleClick(text: string) {
    alert(\`Botão clicado. \${text}!\`);
      }

      return (
    <button className="button primary"
      onClick={() => handleClick("Bom dia")}>
        Executar
    </button>
      );
      `;

  return (
    <div className="container mx-auto p-7 flex flex-col gap-10">
      <Title
        title="Usando botão"
        subtitle="Como utilizar botão com alerta no React"
        icon={IconClick}
      />

      <p className="text-zinc-500">
        Este exemplo demonstra como criar e utilizar botões em React, incluindo
        o uso de eventos de clique para interações dinâmicas.
      </p>

      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-col flex-1 bg-black px-10 py-24 gap-9 rounded-md w-full h-full">
          <button
            className="button primary self-center"
            onClick={() => handleClick("Bom dia")}
          >
            Executar
          </button>
          <p className="text-center text-sm font-light text-zinc-400 mt-4">
            Clique no botão acima para ver o alerta.
          </p>
        </div>

        <div className="relative text-white rounded-md overflow-hidden ">
          <pre className="bg-zinc-900 text-zinc-300 px-4 py-3 rounded-md ">
            <code>{code}</code>
          </pre>
        </div>
      </div>

      <p className="text-zinc-500">
        No React, eventos de clique são gerenciados diretamente nos elementos
        JSX, sem a necessidade de manipulação de DOM manual.
      </p>
      <ul className="list-disc list-inside text-zinc-500">
        <li>
          <strong>Função de clique</strong> → A função{" "}
          <code>handleClick()</code>é chamada ao clicar no botão, exibindo um
          alerta com uma mensagem dinâmica.
        </li>
        <li>
          <strong>Eventos inline</strong> → O evento <code>onClick</code> pode
          receber uma função diretamente dentro do JSX.
        </li>
        <li>
          <strong>Classes CSS</strong> → O botão usa a classe{" "}
          <code>button primary</code>
          para estilização consistente com Tailwind CSS.
        </li>
      </ul>
    </div>
  );
}
