"use client";

import { useRef } from "react";

import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Index() {
  //#region Hooks

  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  //#endregion

  return (
    <>
      <Header
        sectionRefs={[
          { ref: heroRef, name: "Welcome!" },
          { ref: projectsRef, name: "Projects" },
          { ref: contactRef, name: "Contact" },
        ]}
      />
      <div className="my-20 flex grow flex-col gap-16 sm:my-32 sm:gap-28">
        <Hero ref={heroRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </div>
    </>
  );
}
