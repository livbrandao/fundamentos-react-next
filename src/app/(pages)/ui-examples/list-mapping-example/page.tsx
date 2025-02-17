"use client";
import Title from "@/components/template/Title";
import {
  IconListDetails,
  IconClipboard,
  IconClipboardCheck,
} from "@tabler/icons-react";
import { useState } from "react";
import List from "@/components/workouts/List";

export default function ListMapping() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const list = ["Pedro", "João", "Maria", "Ana", "José"];

  const code = `
  const list = ["Pedro", "João", "Maria",
    "Ana", "José"];
   
  return (
    <div className="card">
      <div className="card-case">
          <div className="content">

            <div className="flex flex-col gap-3">
            {list.map((item, index) => {
            return 
              <List key={index} item={item} />;
            })}
            </div>
        </div>
      </div>
    </div>
  );
  `;

  return (
    <div className="container mx-auto p-7 flex flex-col gap-10">
      <Title
        title="Mapeamento de Listas"
        subtitle="Explicando os conceitos do código JSX"
        icon={IconListDetails}
      />

      <p className="text-zinc-500">
        Este exemplo demonstra como mapear e renderizar uma lista de nomes em
        JSX, utilizando a função <code>map()</code>.
      </p>

      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-col flex-1 bg-black px-10 py-20 gap-9 rounded-md w-full h-full">
          <div className="flex flex-col gap-3 ">
            {list.map((item, index) => (
              <List key={index} item={item} />
            ))}
          </div>
        </div>

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

      <p className="text-zinc-500">
        O método <code>map()</code> no React é amplamente utilizado para criar
        listas dinâmicas a partir de arrays.
      </p>
      <ul className="list-disc list-inside text-zinc-500">
        <li>
          <strong>Uso do método map()</strong> → Itera sobre a lista e retorna
          um componente <code>List</code> para cada item.
        </li>
        <li>
          <strong>Uso da prop key</strong> → Cada item renderizado recebe uma
          chave única (<code>key={`index`}</code>) para evitar erros no React.
        </li>
        <li>
          <strong>Componente List</strong> → Responsável por renderizar cada
          nome individualmente na lista.
        </li>
      </ul>
    </div>
  );
}
