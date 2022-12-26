"use client";

import { useRef } from "react";

import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Index() {
  //#region Hooks

  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  //#endregion

  return (
    <div className="mt-28 mb-20 flex grow flex-col gap-16 sm:my-32 sm:gap-24 lg:gap-36">
      <Hero />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}
