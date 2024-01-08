"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { domMax, LazyMotion } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { type ReactNode, useState } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <LazyMotion strict features={domMax}>
          {children}
        </LazyMotion>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
