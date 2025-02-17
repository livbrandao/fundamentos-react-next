"use client";

import Title from "@/components/template/Title";
import {
  IconClipboard,
  IconClipboardCheck,
  IconCode,
} from "@tabler/icons-react";
import { useState } from "react";

export default function JSXComponentRenderExplained() {
  function renderCircle(text: string) {
    return (
      <div className="flex justify-center items-center h-12 w-12 rounded-full bg-blue-500 text-white text-sm">
        {text}
      </div>
    );
  }

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const code = `
    function renderCircle(text: string) {
      return (
        <div className="flex justify-center items-center h-12 w-12 rounded-full 
          bg-blue-500 text-white text-sm">
          {text}
        </div>
      );
    }
    
    return (
      <div className="grid grid-cols-3 gap-4">
        {renderCircle("#01")}
        {renderCircle("#02")}
        {renderCircle("#03")}
        {renderCircle("#04")}
        {renderCircle("#05")}
        {renderCircle("#06")}
      </div>
    );
  `;

  return (
    <div className="container mx-auto p-7 flex flex-col gap-10">
      <Title
        title="Renderização de Componentes do JSX "
        subtitle="Explicando os conceitos do código JSX"
        icon={IconCode}
      />

      <div className="flex flex-col gap-10 justify-between">
        <p className="text-zinc-500">
          Este exemplo demonstra a renderização de componentes em JSX. A função
          <code>renderCircle</code> é responsável por criar um elemento
          reutilizável para renderizar círculos numerados.
        </p>
        <div className="flex flex-col flex-1 bg-black px-10 py-14 gap-9 rounded-md w-full h-full text-white">
          <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
            {renderCircle("#01")}
            {renderCircle("#02")}
            {renderCircle("#03")}
            {renderCircle("#04")}
            {renderCircle("#05")}
            {renderCircle("#06")}
          </div>
        </div>

        <ul className="list-disc list-inside text-zinc-500 mb-4">
          <li>
            <strong>Função de renderização</strong> → A função{" "}
            <code>renderCircle</code>
            cria um componente de círculo estilizado.
          </li>
          <li>
            <strong>Uso de componentes reutilizáveis</strong> → Chamamos a
            função várias vezes para gerar os elementos dentro da grade.
          </li>
          <li>
            <strong>Grid Layout</strong> → Utilizamos <code>grid-cols-3</code>{" "}
            para organizar os elementos em três colunas.
          </li>
        </ul>

        <div className="relative text-white rounded-md overflow-hidden ">
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all"
          >
            {copied ? (
              <IconClipboardCheck size={18} />
            ) : (
              <IconClipboard size={18} />
            )}
          </button>
          <pre className="bg-zinc-900 text-zinc-300 p-4 rounded-md">
            <code>{code}</code>
          </pre>
        </div>

        <p className="text-zinc-500 ">
          A reutilização de componentes torna o código mais modular e fácil de
          manter. Podemos alterar a função <code>renderCircle</code> sem
          precisar modificar diretamente cada instância dos elementos
          renderizados.
        </p>
      </div>
    </div>
  );
}
