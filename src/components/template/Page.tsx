import {
  IconCode,
  IconComponents,
  IconHome,
  IconObjectScan,
} from "@tabler/icons-react";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

export interface PageProps {
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex flex-1">
        <Aside>
          <Menu>
            <MenuItem icon={IconHome} text="Home" link="/" />
            <MenuItem icon={IconCode} text="JSX" link="/" />
            <MenuItem
              icon={IconComponents}
              text="Componentes"
              link="/basico/jsx"
            />
          </Menu>
        </Aside>
        <main className="container mx-auto p-7 flex-1">{props.children}</main>
      </div>

      <Footer />
    </div>
  );
}
