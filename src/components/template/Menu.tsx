import MenuLabel from "./MenuLabel";
import {
  IconHome,
  IconCode,
  IconComponents,
  IconClick,
  IconStatusChange,
  IconUsersPlus,
  IconListDetails,
  IconArrowsDiff,
  IconArrowsDoubleNeSw,
} from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <nav className="flex flex-col">
      <MenuItem icon={IconHome} text="Home" link="/" />
      <MenuLabel title="Componentes" />
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
        icon={IconComponents}
        text="Fundamentos Tailwind"
        link="/ui-examples/tailwind-basics"
      />
      <MenuItem
        icon={IconListDetails}
        text="Mapeamento no JSX"
        link="/ui-examples/list-mapping-example"
      />
      <MenuItem icon={IconClick} text="Botão" link="/ui-examples/button" />

      <MenuLabel title="Árvore Componentes" />
      <MenuItem
        icon={IconArrowsDiff}
        text="Comunicação Direta"
        link="/component-tree/direct-communication"
      />
      <MenuItem
        icon={IconArrowsDoubleNeSw}
        text="Comunicação Indireta"
        link="/component-tree/indirect-communication"
      />
      <MenuItem
        icon={IconUsersPlus}
        text="Cadastro de Usuário"
        link="/component-tree/crud"
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
