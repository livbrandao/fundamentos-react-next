import Image from "next/image";

export default function LogoAlt() {
  return (
    <div className="container mx-auto py-4 flex items-center space-x-4">
      <Image
        src={"https://logodix.com/logo/418926.png"}
        alt="Logo"
        width={50}
        height={50}
      />

      <span className="text-xl font-black">Home</span>
    </div>
  );
}
