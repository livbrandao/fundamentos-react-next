"use client";
import Title from "@/components/template/Title";
import UserRegister from "@/components/tree/crud/UserRegister";
import { IconUsersPlus } from "@tabler/icons-react";

export default function Register() {
  return (
    <div className="container mx-auto p-7 flex flex-col gap-4">
      <Title
        icon={IconUsersPlus}
        title="Cadastro de Usuário"
        subtitle="Criação, alteração, consultas e exclusão de usuários (crud)"
      />

      <p className="text-zinc-500 mt-7">
        Este exemplo demonstra um sistema de <strong>CRUD</strong> para
        usuários. O CRUD permite criar, ler, atualizar e deletar registros em
        uma aplicação.
      </p>

      <div>
        <h3 className="text-lg font-light">Componentes do Sistema:</h3>

        <p className="text-zinc-500">
          O CRUD é composto pelos seguintes componentes
        </p>
      </div>

      <ul className="list-disc list-inside text-zinc-500">
        <li>
          <strong>Forms</strong> → Formulário para entrada e edição de dados.
        </li>
        <li>
          <strong>UserList</strong> → Lista exibindo os usuários cadastrados.
        </li>
        <li>
          <strong>UserRegister</strong> → Componente que gerencia a lógica do
          CRUD.
        </li>
      </ul>

      <p className="text-zinc-500 mt-7">
        Interaja com a lista abaixo para ver como o sistema está funcionando.
      </p>

      <UserRegister />
    </div>
  );
}
