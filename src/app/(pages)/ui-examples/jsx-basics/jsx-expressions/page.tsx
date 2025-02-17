"use client";
import Title from "@/components/template/Title";
import {
  IconClipboard,
  IconClipboardCheck,
  IconCode,
} from "@tabler/icons-react";
import { useState } from "react";

export default function JSXExpressionsExplained() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const code = `
  const title = <h1>Entendendo JSX #01</h1>;
  const mult = "{7 * 7}";
      return (
        <div className="card">
          <div className="card-case">
            {title}
            <div className="content">
              <pre>code: {mult} | println: {7 * 7}</pre>
              <pre>code: Math.random() * 5 | 
                println: {Math.random() * 1000}</pre>
            </div>
          </div>
        </div>
      );`;

  return (
    <div className="container mx-auto p-7">
      <Title
        title="Expressões do JSX "
        subtitle="Explicando os conceitos do código JSX"
        icon={IconCode}
      />

      <div className="flex flex-col gap-2 justify-between my-10">
        <div className="flex flex-col flex-1 bg-black px-10 py-14 gap-9 rounded-md w-full h-full text-white">
          <div className="mt-5 text-zinc-400">
            <pre>
              code: {"{7 * 7}"} | println: {7 * 7}
            </pre>
            <pre>code: Math.random() * 5 | println: {Math.random() * 1000}</pre>
          </div>
        </div>

        <p className="text-zinc-500  my-5">
          Este exemplo demonstra o uso de expressões JSX dentro do React. JSX
          permite escrever código que se assemelha a HTML dentro do JavaScript.
        </p>

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
      </div>

      <div className="mt-10">
        <ul className="list-disc list-inside text-zinc-500 mb-4">
          <li>
            <strong>Variável JSX</strong> → A variável <code>title</code>{" "}
            armazena um elemento JSX e pode ser renderizada dinamicamente.
          </li>
          <li>
            <strong>Interpolação de expressões</strong> → O React avalia
            expressões dentro de
            <code>{`{}`}</code>, como <code>{`{7 * 7}`}</code>, resultando em{" "}
            <code>49</code>.
          </li>
          <li>
            <strong>Funções dentro de JSX</strong> → Funções como{" "}
            <code>Math.random()</code> podem ser usadas dentro de JSX para gerar
            valores dinâmicos.
          </li>
        </ul>
        <p className="text-zinc-500 my-10">
          JSX é uma forma poderosa de escrever interfaces declarativas no React,
          tornando o código mais legível e intuitivo.
        </p>
      </div>
    </div>
  );
}
