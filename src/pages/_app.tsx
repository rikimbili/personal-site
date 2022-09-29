import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
