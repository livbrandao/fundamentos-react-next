"use client";
import Title from "@/components/template/Title";
import UserRegister from "@/components/tree/crud/UserRegister";

export default function Register() {
  return (
    <div className="flex flex-col gap-7">
      <Title
        title="Cadastro de Usuário"
        subtitle="Criação, alteração, consultas e exclusão de usuários (crud)"
      />

      <UserRegister />
    </div>
  );
}
