"use client";

import { domMax, LazyMotion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { type ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <LazyMotion strict features={domMax}>
        {children}
      </LazyMotion>
    </ThemeProvider>
  );
}
