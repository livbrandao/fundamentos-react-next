import { IconHeartFilled } from "@tabler/icons-react";

export default function Footer() {
  return (
    <footer className="p-6 text-center text-white border-t border-zinc-800 h-16">
      <span className="flex float-end flex-row items-center text-sm font-thin text-zinc-400">
        Desenvolvido com{" "}
        <IconHeartFilled size={24} className="px-1 text-red-100" /> por Lívia
      </span>
    </footer>
  );
}
