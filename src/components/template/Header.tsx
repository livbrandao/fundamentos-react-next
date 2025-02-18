import Link from "next/link";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="flex items-center h-20 border-b border-zinc-800 px-6 fixed top-0 left-0 right-0 z-10">
      <Link href="/">
        <Logo />
      </Link>
    </header>
  );
}
