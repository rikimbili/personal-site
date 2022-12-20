import Head from "next/head";
import { useRef } from "react";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import personal from "../data/personal";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Home() {
  //#region Hooks

  const name = "Raciel";

  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const smallWidth = useMediaQuery("(max-width: 319px)");

  //#endregion

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta
          name="twitter:image:src"
          content="https://i.imgur.com/2km7IeI.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={personal.title} />
        <meta name="twitter:description" content={personal.description} />
        <meta property="og:title" content={personal.title} />
        <meta property="og:description" content={personal.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raciel.dev" />
        <title>{personal.title}</title>
      </Head>
      {!smallWidth ? (
        <main className="mx-auto flex min-h-screen w-11/12 max-w-7xl flex-col px-4">
          <Header projectsRef={projectsRef} contactRef={contactRef} />
          <div className="mt-28 mb-20 flex grow flex-col gap-16 sm:my-32 sm:gap-24 lg:gap-36">
            <Hero />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
          </div>
          <Footer />
        </main>
      ) : (
        <div className="flex h-screen flex-col items-center justify-center">
          <h1 className="text-base">
            Your screen width is too low to view my site. If you have a foldable
            device, please unfold it &#128516;.
          </h1>
        </div>
      )}
    </>
  );
}
