import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import { Roboto_Flex } from "@next/font/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

import useSmoothScroll from "../hooks/useScrollSmooth";

const roboto = Roboto_Flex({ subsets: ["latin"] });

const queryClient = new QueryClient();

function App({ Component, pageProps }: AppProps) {
  // Ensures that the page is scrolled to the top on every route change without applying smooth scrolling
  useSmoothScroll();

  return (
    <ThemeProvider attribute="class">
      <QueryClientProvider client={queryClient}>
        <main
          className={`bg-light-background-pattern transition duration-200 ease-out dark:bg-dark-background-pattern ${roboto.className}`}
        >
          <Component {...pageProps} />
        </main>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
