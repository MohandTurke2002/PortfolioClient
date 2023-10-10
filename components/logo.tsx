"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="flex items-center justify-center">
      <Image
        src={`/logo-${theme === "dark" ? "dark" : "light"}-mode.png`}
        alt="logo"
        width={40}
        height={40}
        priority={true}
      />
    </div>
  );
};

export default Logo;
