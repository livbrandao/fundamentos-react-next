"use client";
import Title from "@/components/template/Title";
import IndirectFather from "@/components/tree/indirect/IndirectFather";
import {
  IconArrowsDoubleNeSw,
  IconClipboard,
  IconClipboardCheck,
} from "@tabler/icons-react";
import { useState } from "react";

export default function IndirectCommunicationExplained() {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: any) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const indirectChildrenCode = `
  export default function IndirectChildren(props: IndirectChildrenProps) {
    return (
      <div className="flex gap-3">
        {props.options.map((option, index) => (
          <button
            key={index}
            className="button tertiary"
            onClick={() => 
              props.onSelected?.(option)}>
            {option}
          </button>
        ))}
      </div>
    );
  }
  `;

  const indirectFatherCode = `
  import { useState } from "react";
  import IndirectChildren from "./IndirectChildren";

  export default function IndirectFather() {
    const [result, setResult] = useState("???");

    function getResult(result: string) {
      setResult(result);
    }

    return (
      <div>
        <p className="text-3xl font-bold">
        Quem descobriu o Brasil?</p>
        <div className="flex gap-2 items-center">
          <span className="text-lg text-zinc-500">
            Resposta:</span>
          <span className="font-semibold text-sm 
            text-zinc-300 bg-green-600 p-2 
            rounded-md">
            {result}
          </span>
        </div>
        <div className="py-7">
          <IndirectChildren
            options={["Pedro Álvares Cabral", 
              "Colombo", "Índios"]}
            onSelected={getResult}
          />
        </div>
      </div>
    );
  }
  `;

  const indirectCommunicationCode = `
  import IndirectFather from "@/components/tree/indirect/IndirectFather";

  export default function IndirectCommunication() {
    return (
      <div>
        <IndirectFather />
      </div>
    );
  }
  `;

  return (
    <div className="container mx-auto p-7 flex flex-col gap-10">
      <Title
        title="Comunicação Indireta"
        icon={IconArrowsDoubleNeSw}
        subtitle="Exemplo de comunicação indireta entre Componentes"
      />

      <p className="text-zinc-500">
        Este exemplo demonstra a <strong>comunicação indireta</strong> entre
        componentes no React, onde um componente filho pode enviar informações
        para o pai através de callbacks.
      </p>

      <div className="flex flex-row gap-3 justify-around">
        <div className="flex flex-col gap-3 items-center border border-zinc-600 rounded-md p-6 w-[50%]">
          <h3 className="text-lg font-light mt-5">IndirectChildren</h3>
          <p className="text-zinc-500 text-center">
            O componente <code>IndirectChildren</code> recebe um array de opções
            e uma função <code>onSelected</code>. Quando um botão é clicado, ele
            chama essa função passando a opção escolhida para o componente pai.
          </p>

          <div className="relative text-white rounded-md overflow-hidden ">
            <button
              onClick={() => handleCopy(indirectChildrenCode)}
              className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all"
            >
              {copied ? (
                <IconClipboardCheck size={18} />
              ) : (
                <IconClipboard size={18} />
              )}
            </button>
            <pre className="bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto text-wrap">
              <code>{indirectChildrenCode}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col gap-3 ml-4 items-center border border-zinc-600 rounded-md p-6 w-[50%]">
          <h3 className="text-lg font-light mt-5">IndirectFather</h3>
          <p className="text-zinc-500 text-center">
            O componente <code>IndirectFather</code> gerencia um estado para
            armazenar a resposta. Ele passa a função <code>getResult</code> para{" "}
            <code>IndirectChildren</code>, que a chama ao clicar em uma opção.
          </p>

          <div className="relative text-white rounded-md overflow-hidden ">
            <button
              onClick={() => handleCopy(indirectFatherCode)}
              className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all"
            >
              {copied ? (
                <IconClipboardCheck size={18} />
              ) : (
                <IconClipboard size={18} />
              )}
            </button>
            <pre className="bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto text-wrap">
              <code>{indirectFatherCode}</code>
            </pre>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-light mt-5">Página principal</h3>
      <p className="text-zinc-500">
        A página <code>IndirectCommunication</code> monta a árvore de
        componentes ao chamar <code>IndirectFather</code>, que por sua vez chama{" "}
        <code>IndirectChildren</code> para oferecer opções ao usuário.
      </p>

      <div className="flex flex-row gap-3 justify-between">
        <div className="bg-black px-10 pb-8 rounded-md text-white w-[50%] flex items-center justify-center">
          <IndirectFather />
        </div>
        <div className="w-[50%] relative text-white rounded-md overflow-hidden ">
          <button
            onClick={() => handleCopy(indirectCommunicationCode)}
            className="absolute top-2 right-2 bg-zinc-700 hover:bg-zinc-600 text-white p-2 rounded-md transition-all"
          >
            {copied ? (
              <IconClipboardCheck size={18} />
            ) : (
              <IconClipboard size={18} />
            )}
          </button>
          <pre className="bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto text-wrap">
            <code>{indirectCommunicationCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
