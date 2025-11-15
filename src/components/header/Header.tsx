import Image from "next/image";
import Link from "next/link";
import { Mail, Sun } from "lucide-react";

function Header() {
  return (
    <div className="flex justify-between items-center px-10">
      <Link href="/">
        <Image
          src="/images/logo_green.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-md"
        />
      </Link>

      <div className="flex gap-8 text-white text-3xl font-medium font-sans">
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Resume</Link>
        <Link href="/">Blogs</Link>
      </div>
      <div className="flex gap-5  items-center text-green-400">
        <Link href="/">
          <Mail className="size-7 mt-2" />
        </Link>
        <button className="hover:text-white cursor-pointer">
          <Sun className="size-7 mt-2" />
        </button>
      </div>
    </div>
  );
}

export default Header;
