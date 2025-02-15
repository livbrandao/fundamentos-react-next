import Input from "@/components/template/Input";
import User from "@/data/model/User";

export interface FormsProps {
  user: Partial<User>;
  alterUser: (user: Partial<User>) => void;
  cancel: () => void;
  save: () => void;
}

export default function Forms({ user, alterUser, cancel, save }: FormsProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Nome completo"
          type="text"
          value={user.name ?? ""}
          onChange={(e) => alterUser({ ...user, name: e.target.value })}
        />
        <Input
          label="E-mail"
          type="email"
          value={user.email ?? ""}
          onChange={(e) => alterUser({ ...user, email: e.target.value })}
        />
        <Input
          label="Senha"
          type="password"
          value={user.senha ?? ""}
          onChange={(e) => alterUser({ ...user, senha: e.target.value })}
        />
      </div>

      <div className="flex gap-2 pt-4">
        <button className="button primary" onClick={save}>
          Salvar
        </button>
        <button
          className="button bg-zinc-500 hover:bg-zinc-300"
          onClick={cancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
