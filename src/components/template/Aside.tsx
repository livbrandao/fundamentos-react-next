import { ReactNode } from "react";

export interface AsideProps {
  children: ReactNode;
}

export default function Aside(props: AsideProps) {
  return (
    <aside className="p-6 border-r border-zinc-800 w-72">
      {props.children}
    </aside>
  );
}
