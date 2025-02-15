export interface TitleProps {
  title: string;
  subtitle?: string;
  icon?: React.ElementType;
}

export default function Title(props: TitleProps) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2">
        {props.icon && <props.icon stroke={1} size={20} />}
        <h2 className="text-2xl font-bold">{props.title}</h2>
      </div>
      {props.subtitle && (
        <p className=" text-sm text-zinc-500">{props.subtitle}</p>
      )}
    </div>
  );
}
