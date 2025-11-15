"use client";

import { Sun, Moon, Loader } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Loader className="mt-2 size-7" />;

  if (resolvedTheme === "dark") {
    return (
      <Sun
        className="mt-2 size-7 cursor-pointer"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <Moon
        className="mt-2 size-7 cursor-pointer"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
