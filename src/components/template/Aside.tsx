import { ReactNode } from "react";

export interface AsideProps {
  children: ReactNode;
}

export default function Aside(props: AsideProps) {
  return (
    <aside className="p-4 border-r border-zinc-800 w-72 fixed left-0 bottom-16 top-20 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 hover:scrollbar-thumb-zinc-600">
      {props.children}
    </aside>
  );
}
