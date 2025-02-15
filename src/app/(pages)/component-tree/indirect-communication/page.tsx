import Title from "@/components/template/Title";
import IndirectFather from "@/components/tree/indirect/IndirectFather";
import { IconArrowsDiff } from "@tabler/icons-react";

export default function IndirectCommunication() {
  return (
    <div className="space-y-4 flex flex-col gap-7">
      <Title
        title="Comunicação Indireta"
        icon={IconArrowsDiff}
        subtitle="Exemplo de comunicação indireta entre Componentes"
      />

      <IndirectFather
        name="José"
        lastName="Silva"
        childrens={["Maria", "Paulo", "Pedro"]}
      />
    </div>
  );
}
