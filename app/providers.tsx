"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className="flex gap-x-8">
      <NextThemesProvider attribute="class" defaultTheme="system">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export default Providers;
