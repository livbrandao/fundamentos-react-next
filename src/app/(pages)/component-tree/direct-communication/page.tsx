import Title from "@/components/template/Title";
import DirectFather from "@/components/tree/direct/DirectFather";
import { IconDirections } from "@tabler/icons-react";

export default function DirectCommunication() {
  return (
    <div className="space-y-4 flex flex-col gap-7">
      <Title
        title="Comunicação Direta"
        icon={IconDirections}
        subtitle="Exemplo de comunicação direta entre Componentes"
      />

      <DirectFather
        name="José"
        lastName="Silva"
        childrens={["Maria", "Paulo", "Pedro"]}
      />
    </div>
  );
}
