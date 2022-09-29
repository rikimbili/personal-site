import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Set background-color for root element
    document.documentElement.style.backgroundColor = "#0D0E16";
  }, []);

  return (
    <>
      <Head>
        <title>{"Raciel's Portfolio"}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
