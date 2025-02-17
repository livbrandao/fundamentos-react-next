"use client";

import Title from "@/components/template/Title";
import {
  IconBulb,
  IconCheckbox,
  IconClipboard,
  IconClipboardCheck,
  IconComponents,
  IconListDetails,
} from "@tabler/icons-react";
import { useState } from "react";

export default function TailwindExample() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippet = `
  <div className="flex flex-col flex-1 bg-black px-10 
  py-14 gap-9 rounded-md w-full h-full">
    <div>
      <h1 className="text-3xl font-black">Titulo</h1>
      <p className="text-sm text-zinc-400">Subtitulo</p>
    </div>

    <div className="flex flex-col mt-5 gap-10">
      <span className="border border-zinc-300 p-4 mb-2">
        Conteúdo</span>
      <button className="button tertiary"> Salvar</button>
    </div>
  </div>`;

  const codeSnippetClasses = `
      .button {
        @apply flex gap-1 items-center self-start text-white font-bold py-2 px-6 rounded-lg;
      }

      .primary {
        @apply bg-green-500 hover:bg-green-300;
      }

      .secondary {
        @apply bg-red-500 hover:bg-red-300;
      }

      .tertiary {
        @apply bg-yellow-500 hover:bg-yellow-300;
      }
      `;

  return (
    <div className="container mx-auto p-7 flex flex-col gap-10">
      <Title
        title="Estrutura básica com Tailwind CSS"
        subtitle="Explicando os conceitos de um layout básico utilizando
         Tailwind CSS"
        icon={IconComponents}
      />

      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-col flex-1 bg-black px-10 py-14 gap-9 rounded-md w-full h-full">
          <div>
            <h1 className="text-3xl font-black">Titulo</h1>
            <p className="text-sm text-zinc-400">Subtitulo</p>
          </div>

          <div className="flex flex-col mt-5 gap-10">
            <span className="border border-zinc-300 p-4 mb-2">Conteúdo</span>
            <button className="button tertiary">Salvar</button>
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
          <pre className="bg-zinc-900 text-zinc-300  p-4 rounded-md ">
            <code>{codeSnippet}</code>
          </pre>
        </div>
      </div>

      <div>
        <p className="text-zinc-500 mb-4 break-words">
          Este exemplo demonstra a construção de um layout básico utilizando{" "}
          <strong>Tailwind CSS</strong>. Ele permite criar layouts com classes
          prontas, sem precisar escrever CSS manualmente.
        </p>

        <ul className="list-disc list-inside text-zinc-500">
          <li>
            <strong>Título e Subtítulo</strong> → Definem a identidade visual do
            conteúdo com tamanhos e estilos específicos.
          </li>
          <li>
            <strong>Conteúdo</strong> → Área delimitada para exibição de
            informações.
          </li>
          <li>
            <strong>Botão</strong> → Elemento interativo para ações do usuário.
          </li>
        </ul>

        <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <IconBulb /> Benefícios do Tailwind CSS
        </h3>
        <ul className="list-disc list-inside text-zinc-500 mb-4">
          <li className="flex items-center gap-2">
            <IconCheckbox className="text-green-500" />
            <strong>Código mais rápido de escrever</strong> → Sem necessidade de
            criar classes CSS personalizadas.
          </li>
          <li className="flex items-center gap-2">
            <IconCheckbox className="text-green-500" />{" "}
            <strong>Facilidade na responsividade</strong> → Classes como{" "}
            <code className="bg-zinc-900 p-1 rounded">w-[50%]</code> controlam o
            layout dinamicamente.
          </li>
          <li className="flex items-center gap-2">
            <IconCheckbox className="text-green-500" />{" "}
            <strong>Personalização rápida</strong> → Com{" "}
            <code className="bg-zinc-900 p-1 rounded">hover:bg-zinc-600</code>,
            por exemplo, o botão muda ao passar o mouse.
          </li>
        </ul>

        <p className="text-zinc-500 my-10">
          As classes <code className="bg-zinc-900 p-1 rounded">button</code> e{" "}
          <code className="bg-zinc-900 p-1 rounded">tertiary</code> foram
          definidas no arquivo <strong>global.css</strong>, permitindo uma
          estilização reutilizável e consistente para botões em toda a
          aplicação.
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
          <pre className="bg-zinc-900 text-zinc-300  p-4 rounded-md ">
            <code>{codeSnippetClasses}</code>
          </pre>
        </div>

        <p className="text-zinc-500 my-10">
          Este código exemplifica como o <strong>Tailwind CSS</strong>{" "}
          simplifica a estilização e organização do layout em projetos React e
          Next.js.
        </p>
      </div>
    </div>
  );
}
