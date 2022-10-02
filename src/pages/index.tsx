import Head from "next/head";
import { useRef } from "react";

import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Home() {
  //#region Hooks

  const aboutRef = useRef<HTMLDivElement>(null);
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
        <meta name="twitter:title" content="Raciel's Portfolio" />
        <meta
          name="twitter:description"
          content="I'm a software developer with a passion for building full-stack web apps. Check out what I've been working on and get in touch!"
        />
        <meta name="twitter:site" content="@rikimbili_dev" />
        <meta property="og:title" content="Raciel's Portfolio" />
        <meta
          property="og:description"
          content="I'm a software developer with a passion for building full-stack web apps. Check out what I've been working on and get in touch!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://raciel.dev" />
        <title>{"Raciel's Portfolio"}</title>
      </Head>
      {!smallWidth ? (
        <div className="flex min-h-screen flex-col px-4">
          <Header
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <main className="my-20 flex grow flex-col gap-16 sm:mt-24 sm:mb-48 sm:gap-24 lg:mb-64 lg:gap-36">
            <Hero />
            <About ref={aboutRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
          </main>
          <Footer />
        </div>
      ) : (
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
