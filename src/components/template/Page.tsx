import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";
import Menu from "./Menu";

export interface PageProps {
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1 pt-20">
        <Aside>
          <Menu />
        </Aside>

        <main className="flex-1 ml-72 pt-0 pb-16 px-7 overflow-y-auto h-[calc(100vh-5rem)] scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800 hover:scrollbar-thumb-zinc-600">
          {props.children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
