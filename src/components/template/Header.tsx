import Logo from "./Logo";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <header className="flex items-center h-20 border-b border-zinc-800 px-6">
      <Logo />
    </header>
  );
}
