import { ReactNode } from "react";
import MenuLabel from "./MenuLabel";
import {
  IconHome,
  IconCode,
  IconComponents,
  IconBorderStyle,
  IconArrowDown,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export interface MenuProps {
  children?: ReactNode;
}

export default function Menu(props: MenuProps) {
  return (
    <nav className="flex flex-col">
      <MenuLabel title="Componentes" />
      <MenuItem icon={IconHome} text="Home" link="/" />
      <MenuItem
        icon={IconCode}
        text="Expressões no JSX"
        link="/ui-examples/jsx-basics/jsx-expressions"
      />
      <MenuItem
        icon={IconCode}
        text="Renderização no JSX"
        link="/ui-examples/jsx-basics/jsx-component-render"
      />
      <MenuItem
        icon={IconCode}
        text="Condicional no JSX"
        link="/ui-examples/jsx-basics/jsx-conditional-rendering"
      />
      <MenuItem
        icon={IconBorderStyle}
        text="Fundamentos Tailwind"
        link="/ui-examples/tailwind-basics"
      />
      <MenuItem
        icon={IconComponents}
        text="Mapeamento no JSX"
        link="/ui-examples/list-mapping-example"
      />

      <MenuLabel title="Árvore Componentes" />
      <MenuItem
        icon={IconArrowDown}
        text="Comunicação Direte"
        link="/component-tree/direct-communication"
      />
    </nav>
  );
}
