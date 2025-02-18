"use client";
import Title from "@/components/template/Title";
import {
  IconClipboard,
  IconClipboardCheck,
  IconCode,
} from "@tabler/icons-react";
import { useState } from "react";

export default function JSXConditionalRendering() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const number = 10;
  const numberPair = number % 2 === 0;

  function renderPair(number: number) {
    if (number % 2 === 0) {
      return <span className="primary text-white p-2 rounded-full">Par</span>;
    } else {
      return (
        <span className="secondary text-white p-2 rounded-full">Ímpar</span>
      );
    }
  }

  const code = `
    const number = 10;
    const numberPair = number % 2 === 0;
    
    function renderPair(number) {
      if (number % 2 === 0) {
        return <span className="primary text-white p-2 mx-auto rounded-full">Par</span>;
      } else {
        return <span className="secondary text-white p-2 mx-auto rounded-full">Ímpar</span>;
      }
    }
    
    return (
      <div className="card">
        <div className="card-case">
          <div className="content">
            {numberPair ? (
              <span className="primary p-2 mx-auto rounded-full">Par</span>
            ) : (
              <span className="secondary p-2 mx-auto rounded-full">Ímpar</span>
            )}
            {numberPair && <span>Esse número é par!</span>}
            {renderPair(number)}
          </div>
        </div>
      </div>
    );
    `;

  return (
    <div className="container mx-auto p-7 flex flex-col gap-10">
      <Title
        title="Renderização Condicional"
        subtitle="Explicando os conceitos do código JSX"
        icon={IconCode}
      />

      <div className="flex flex-col gap-10 justify-between">
        <p className="text-zinc-500 ">
          Este exemplo demonstra como utilizar a{" "}
          <strong>renderização condicional</strong> em JSX, permitindo exibir
          componentes e elementos dinamicamente.
        </p>

        <div className="flex flex-col items-center  bg-black px-10 py-14 gap-2 rounded-md w-full h-full text-white">
          <div className=" text-zinc-400 flex gap-2 justify-center items-center">
            {numberPair ? (
              <span className="primary text-white p-2  rounded-full">Par</span>
            ) : (
              <span className="secondary text-white p-2  rounded-full">
                Ímpar
              </span>
            )}
            {renderPair(number)}
          </div>
          {numberPair && <span>Esse número é par!</span>}
        </div>

        <ul className="list-disc list-inside text-zinc-500">
          <li>
            <strong>Operador ternário</strong> → Decide entre &quot;Par&quot; ou
            &quot;Ímpar&quot; baseado no valor de <code>numberPair</code>.
          </li>
          <li>
            <strong>Operador lógico AND (&&)</strong> → Renderiza um texto
            adicional caso o número seja par.
          </li>
          <li>
            <strong>Função renderPair</strong> → Separa a lógica de verificação
            e exibe o resultado de forma organizada.
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

        <p className="text-zinc-500">
          A renderização condicional no React é uma ferramenta poderosa para
          exibir conteúdos dinamicamente, tornando a interface mais flexível e
          interativa.
        </p>
      </div>
    </div>
  );
}
