import Image from "next/image";
import Link from "next/link";
import { Mail, Sun } from "lucide-react";

function Header() {
  return (
    <div className="flex items-center justify-between px-10">
      <Link href="/">
        <Image
          src="/images/logo_green.png"
          alt="Logo"
          width={100}
          height={100}
          className="rounded-md"
        />
      </Link>

      <div className="flex gap-8 font-sans text-3xl font-medium text-white">
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Resume</Link>
        <Link href="/">Blogs</Link>
      </div>
      <div className="flex items-center gap-5 text-green-400">
        <Link href="/">
          <Mail className="mt-2 size-7" />
        </Link>
        <button className="cursor-pointer hover:text-white">
          <Sun className="mt-2 size-7" />
        </button>
      </div>
    </div>
  );
}

export default Header;
