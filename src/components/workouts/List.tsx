export interface ListProps {
  item: string;
}

export default function List(props: ListProps) {
  return (
    <div className="bg-black p-3 rounded-md flex justify-between">
      <span className="text-zinc-400">{props.item}</span>

      <div className="flex gap-2">
        <button className="tertiary p-2 rounded-md text-sm">Editar</button>
        <button className="secondary p-2 rounded-md text-sm">Excluir</button>
      </div>
    </div>
  );
}
