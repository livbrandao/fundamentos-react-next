import Header from "./Header";

export interface PageProps {
  children: React.ReactNode;
}

export default function Page(props: PageProps) {
  return (
    <div>
      <Header />
      <h1>{props.children}</h1>
    </div>
  );
}
