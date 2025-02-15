import { ReactNode } from "react";
import MenuLabel from "./MenuLabel";
import {
  IconHome,
  IconCode,
  IconComponents,
  IconBorderStyle,
  IconArrowDown,
  IconClick,
  IconStatusChange,
  IconArrowUp,
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
      <MenuItem icon={IconClick} text="Botão" link="/ui-examples/button" />

      <MenuLabel title="Árvore Componentes" />
      <MenuItem
        icon={IconArrowDown}
        text="Comunicação Direta"
        link="/component-tree/direct-communication"
      />
      <MenuItem
        icon={IconArrowUp}
        text="Comunicação Indireta"
        link="/component-tree/indirect-communication"
      />

      <MenuLabel title="Gerenciamento de Estado" />
      <MenuItem
        icon={IconStatusChange}
        text="Usando Estado"
        link="/ui-examples/state-management/use-state"
      />
    </nav>
  );
}
