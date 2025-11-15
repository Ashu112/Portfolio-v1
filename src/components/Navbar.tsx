"use client";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "@/components/ThemeSwitch";
import { useTheme } from "next-themes";

function Header() {
  const { resolvedTheme } = useTheme();
  return (
    <div className="mt-10 flex items-center justify-between px-10">
      <Link href="/">
        <Image
          src={
            resolvedTheme === "light"
              ? "/images/logo_white_G.png"
              : "/images/logo_green.png"
          }
          alt="Logo"
          width={100}
          height={100}
          className="rounded-md"
        />
      </Link>

      <div className="flex gap-8 font-sans text-3xl font-medium">
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Resume</Link>
        <Link href="/">Blogs</Link>
      </div>
      <div className="flex items-center gap-5 text-green-400">
        <Link href="/">
          <Mail className="mt-2 size-7" />
        </Link>
        <ThemeSwitch />
      </div>
    </div>
  );
}

export default Header;
