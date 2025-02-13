import { IconBrandReact } from "@tabler/icons-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 container mx-auto py-4 text-zinc-300">
      <IconBrandReact size={36} stroke={1} />
      <span className="text-lg font-light">React & Next</span>
    </div>
  );
}
