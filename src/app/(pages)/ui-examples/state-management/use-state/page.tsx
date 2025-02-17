"use client";
import Title from "@/components/template/Title";
import Counter from "@/components/state/Counter";
import {
  IconClipboard,
  IconClipboardCheck,
  IconStatusChange,
} from "@tabler/icons-react";
import { useState } from "react";

export default function UseStateExplained() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const code = `
  export interface CounterProps {
    value?: number;
  }
  
  export default function Counter(props: CounterProps) {
    const [count, setCount] = useState(props.value ?? 0);
    
    function increment() {
      setCount(count + 1);
    }
    
    function decrement() {
      setCount(count - 1);
    }
    
    return (
      <div className="flex flex-col gap-2 items-center">
        <h2 className="text-xl font-bold">Contador</h2>
        <span className="text-6xl font-semibold text-emerald-400">{count}</span>

        <div className="flex gap-2">
          <button onClick={decrement}>
            <IconMinus />
          </button>
          <button onClick={increment}>
            <IconPlus />
          </button>
        </div>
      </div>
    );
  }`;

  return (
    <div className="container mx-auto p-7 flex flex-col gap-10">
      <Title
        icon={IconStatusChange}
        title="Usando Estado"
        subtitle="Como usar gerenciamento de Estado com React Hooks"
      />

      <p className="text-zinc-500">
        Este exemplo demonstra como gerenciar estado no React utilizando o hook
        <code>useState</code>. Aqui temos um contador que pode ser incrementado
        e decrementado dinamicamente.
      </p>

      <div className="flex flex-row gap-28 bg-black p-10 rounded-md text-white items-center justify-center">
        <Counter />
        <Counter value={1000} />
      </div>

      <ul className="list-disc list-inside text-zinc-500">
        <li>
          <strong>Gerenciamento de Estado</strong> → O <code>useState</code> é
          utilizado para armazenar e modificar o valor do contador.
        </li>
        <li>
          <strong>Props Dinâmicas</strong> → O componente aceita uma propriedade{" "}
          <code>value</code> opcional para definir um valor inicial.
        </li>
        <li>
          <strong>Botões Interativos</strong> → Os botões chamam funções que
          atualizam o estado, permitindo interação do usuário.
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
        <pre className="bg-zinc-900 text-zinc-300 p-4 rounded-md overflow-auto">
          <code>{code}</code>
        </pre>
      </div>
      <p className="text-zinc-500">
        O componente <code>Counter</code> é um contador independente que
        gerencia seu próprio estado.
      </p>

      <div className="grid grid-cols-2 gap-2 justify-between items-center">
        <ul className="list-disc list-inside text-zinc-500 flex flex-col gap-2">
          <li>
            <strong>Componente Counter</strong> → Criado para gerenciar um
            estado interno que pode ser atualizado dinamicamente.
          </li>
          <li>
            <strong>Comportamento padrão</strong> → Quando nenhum valor é
            passado, o contador inicia em <code>0</code>.
          </li>
          <li>
            <strong>Propriedade value</strong> → O segundo contador recebe um
            valor inicial de <code>1000</code> passado como prop.
          </li>
          <li>
            <strong>Gerenciamento de Estado</strong> → O estado de cada contador
            é separado, permitindo que cada instância funcione
            independentemente.
          </li>
          <li>
            <strong>Como chamar o componente Counter</strong> → Para utilizar o
            componente <code>Counter</code> no arquivo <code>UseState</code>,
            importe-o da pasta correspondente e adicione-o dentro do JSX. Você
            pode passar a propriedade <code>value</code> para definir um valor
            inicial específico.
          </li>
        </ul>

        <div className="relative text-white rounded-md overflow-hidden ml-20">
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
          <pre className="bg-zinc-900 text-zinc-300 p-10 rounded-md overflow-auto">
            <code>{` 
    <Counter />
    <Counter value={1000} />`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
