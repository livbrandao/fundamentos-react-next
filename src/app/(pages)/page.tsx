import Title from "@/components/template/Title";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconComponents,
  IconCode,
  IconStatusChange,
} from "@tabler/icons-react";

export default function Home() {
  const features = [
    {
      title: "Fundamentos React",
      description: "Exemplos práticos de JSX, componentes e renderização",
      icon: IconBrandReact,
    },
    {
      title: "Gerenciamento de Estado",
      description: "Exemplos práticos usando useState e controle de estados",
      icon: IconStatusChange,
    },
    {
      title: "Comunicação entre Componentes",
      description: "Exemplos de comunicação direta e indireta",
      icon: IconComponents,
    },
    {
      title: "Tailwind CSS",
      description: "Estilização moderna e responsiva com Tailwind",
      icon: IconCode,
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <Title
        title="Bem-vindo ao React & Next"
        subtitle="Aprenda desenvolvimento web moderno através de exemplos práticos"
        icon={IconBrandReact}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-zinc-800 rounded-lg">
                <feature.icon size={24} className="text-zinc-400" />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-medium text-zinc-100">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-6 bg-zinc-900 rounded-lg border border-zinc-800">
        <h3 className="text-lg font-medium text-zinc-100 mb-2">
          Como usar este projeto
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed">
          Explore os exemplos através do menu lateral. Cada seção contém
          demonstrações práticas e código-fonte para ajudar no seu aprendizado.
          Os exemplos vão desde conceitos básicos do JSX até gerenciamento de
          estado e comunicação entre componentes.
        </p>
      </div>
    </div>
  );
}
