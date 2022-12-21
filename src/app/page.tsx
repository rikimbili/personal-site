"use client";

import { useRef } from "react";

import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Index() {
  //#region Hooks

  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const smallWidth = useMediaQuery("(max-width: 319px)");

  //#endregion

  return !smallWidth ? (
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
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-base">
        Your screen width is too low to view my site. If you have a foldable
        device, please unfold it &#128516;.
      </h1>
    </main>
  );
}
