import Footer from "./Footer";
import Header from "./Header";

export interface PageProps {
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container mx-auto p-7 flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}
