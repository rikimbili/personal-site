import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";

import useSmoothScroll from "../hooks/useScrollSmooth";

function App({ Component, pageProps }: AppProps) {
  // Ensures that the page is scrolled to the top on every route change without applying smooth scrolling
  useSmoothScroll();

  return <Component {...pageProps} />;
}

export default App;
