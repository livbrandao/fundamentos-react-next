import Logo from "./Logo";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <header className="flex items-center h-20 border-b border-zinc-800 px-6 fixed top-0 left-0 right-0 z-10">
      <a href="/">
        <Logo />
      </a>
    </header>
  );
}
