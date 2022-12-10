import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";

import useSmoothScroll from "../hooks/useScrollSmooth";

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  // Ensures that the page is scrolled to the top on every route change without applying smooth scrolling
  useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default App;
