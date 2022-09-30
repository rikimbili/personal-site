import Head from "next/head";
import { useEffect, useState } from "react";

import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  //#region Hooks
  const [widthWarning, setWidthWarning] = useState(false);

  // Check if the display width is less than 320px and request the user to unfold their device :)
  useEffect(() => {
    const windowWidthCallback = () => {
      if (window.innerWidth < 320) {
        setWidthWarning(true);
      } else {
        setWidthWarning(false);
      }
    };

    window.addEventListener("resize", windowWidthCallback);

    return () => {
      window.removeEventListener("resize", windowWidthCallback);
    };
  }, []);

  //#endregion

  return (
    <>
      <Head>
        <title>{"Raciel Antela Pardo"}</title>
      </Head>
      {!widthWarning && (
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="my-20 flex grow flex-col gap-16 sm:my-24 sm:gap-24 lg:gap-36">
            <Hero />
            <About />
            <Projects />
          </main>
          <Footer />
        </div>
      )}
      {widthWarning && (
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-base">
            Your screen width is too low to view my portfolio. If you have a
            foldable device, please unfold it &#128516;.
          </h1>
        </div>
      )}
    </>
  );
}
