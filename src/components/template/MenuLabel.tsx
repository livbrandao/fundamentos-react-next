export interface MenuLabelProps {
  title: string;
}

export default function MenuLabel(props: MenuLabelProps) {
  return (
    <span className="text-sm uppercase text-zinc-500 p-4  font-light">
      {props.title}
    </span>
  );
}
