import Link from "next/link";

export interface MenuItemProps {
  text: string;
  icon?: React.ElementType;
  link: string;
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link
      href={props.link}
      className="text-zinc-200 px-4 py-2 rounded-md hover:bg-zinc-800/30 hover:font-medium font-light flex items-center gap-1.5"
    >
      {props.icon && <props.icon stroke={1} size={18} />}
      <span>{props.text}</span>
    </Link>
  );
}
