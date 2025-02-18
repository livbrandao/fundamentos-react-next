"use client";
import Title from "@/components/template/Title";
import DirectFather from "@/components/tree/direct/DirectFather";
import {
  IconClipboard,
  IconClipboardCheck,
  IconDirections,
} from "@tabler/icons-react";
import { useState } from "react";

export default function DirectCommunication() {
  const [copied, setCopied] = useState(false);
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const directChildrenCode = `
    export default function DirectFather
      (props: FatherProps) {
    return (
      <div className="flex flex-col gap-2">
        <h2>{props.name} {props.lastName}</h2>
        {props.childrens.map((child, index) => (
          <DirectChildren key={index} name={child} 
            lastName={props.lastName} />
        ))}
      </div>
      );
    }
          `;

  const directFatherCode = `
     export default function DirectChildren
        (props: ChildrenProps) {

      return (
        <div>
          <p className="text-sm font-semibold">
            {props.name} 
            <strong>{props.lastName}</strong>
          </p>
        </div>
      );
    }
     `;

  const directCommunicationCode = ` 
  import DirectFather from 
  "@/components/tree/direct/DirectFather";

  export default function 
    DirectCommunication() {
    return (
      <div>
        <DirectFather
          name="José"
          lastName="Silva"
          childrens={["Maria", "Paulo", "Pedro"]}
        />
      </div>
    );
  }
          `;

  return (
    <div className="container mx-auto p-7 flex flex-col gap-10">
      <Title
        title="Comunicação Direta"
        icon={IconDirections}
        subtitle="Exemplo de comunicação direta entre Componentes"
      />

      <p className="text-zinc-500">
        Este exemplo demonstra a <strong>comunicação direta</strong> entre
        componentes no React, onde um componente pai passa dados para seus
        filhos via <code>props</code>.
      </p>

      <div className="flex flex-row gap-3 justify-around">
        <div className="flex flex-col gap-3 items-center border border-zinc-600 rounded-md p-6">
          <h3 className="text-lg font-light mt-5">DirectChildren</h3>
          <p className="text-zinc-500 text-center">
            O componente <code>DirectChildren</code> recebe as{" "}
            <code>props</code> <code>name</code> e <code>lastName</code>
            para exibir o nome completo de um filho.
          </p>

          <div className="relative text-white rounded-md overflow-hidden ">
            <button
              onClick={() => handleCopy(directFatherCode)}
              className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all"
            >
              {copied ? (
                <IconClipboardCheck size={18} />
              ) : (
                <IconClipboard size={18} />
              )}
            </button>
            <pre className="bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto">
              <code>{directFatherCode}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-3 ml-4 items-center border border-zinc-600 rounded-md p-6">
          <h3 className="text-lg font-light mt-5">DirectFather</h3>
          <p className="text-zinc-500 text-center">
            O componente <code>DirectFather</code> recebe as <code>props</code>{" "}
            <code>name</code>, <code>lastName</code>e <code>childrens</code>.
            Ele mapeia a lista de filhos e para cada item, renderiza um{" "}
            <code>DirectChildren</code>.
          </p>

          <div className="relative text-white rounded-md overflow-hidden ">
            <button
              onClick={() => handleCopy(directChildrenCode)}
              className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all"
            >
              {copied ? (
                <IconClipboardCheck size={18} />
              ) : (
                <IconClipboard size={18} />
              )}
            </button>
            <pre className="bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto">
              <code>{directChildrenCode}</code>
            </pre>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-light mt-5">Página principal</h3>

      <p className="text-zinc-500">
        A página principal <code>DirectCommunication</code> monta a árvore de
        componentes ao chamar <code>DirectFather</code>, que por sua vez chama{" "}
        <code>DirectChildren</code> para cada filho na lista.
      </p>
      <ul className="list-disc list-inside text-zinc-500 mt-2 flex flex-col gap-3">
        <li>
          <strong>DirectCommunication</strong> → Componente raiz que instancia{" "}
          <code>DirectFather</code>.
        </li>
        <li>
          <strong>DirectFather</strong> → Componente intermediário que recebe a
          lista de filhos e os mapeia.
        </li>
        <li>
          <strong>DirectChildren</strong> → Componente final que renderiza o
          nome de cada filho.
        </li>
      </ul>
      <p className="text-zinc-500 mt-2">
        Esse modelo de comunicação direta permite a passagem de dados de um
        componente pai para seus filhos, garantindo organização e reutilização
        de componentes no React.
      </p>

      <div className="flex flex-row gap-3 justify-between">
        <div className="w-[50%] relative text-white rounded-md overflow-hidden ">
          <button
            onClick={() => handleCopy(directCommunicationCode)}
            className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all"
          >
            {copied ? (
              <IconClipboardCheck size={18} />
            ) : (
              <IconClipboard size={18} />
            )}
          </button>
          <pre className="bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto">
            <code>{directCommunicationCode}</code>
          </pre>
        </div>
        <div className="bg-black px-10 pb-8 rounded-md text-white w-[50%] flex items-center justify-center">
          <DirectFather
            name="José"
            lastName="Silva"
            childrens={["Maria", "Paulo", "Pedro"]}
          />
        </div>
      </div>
    </div>
  );
}
