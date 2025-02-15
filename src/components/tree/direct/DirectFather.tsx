import DirectChildren from "./DirectChildren";

export interface FatherProps {
  name: string;
  lastName: string;
  childrens: string[];
}

export default function DirectFather(props: FatherProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="py-6">
        <span className="text-zinc-500 text-sm font-light uppercase">Pai</span>
        <h2 className="text-lg font-semibold">
          {props.name} {props.lastName}
        </h2>
      </div>

      <div>
        <span className="text-zinc-500 text-sm font-light uppercase">
          Filhos
        </span>
        {props.childrens.map((child, index) => (
          <DirectChildren key={index} name={child} lastName={props.lastName} />
        ))}
      </div>
    </div>
  );
}
