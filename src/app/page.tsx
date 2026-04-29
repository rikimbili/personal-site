import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Index() {
  return (
    <div className="relative isolate my-12 flex grow flex-col gap-20 overflow-visible py-8 sm:my-20 sm:gap-28 sm:py-12 lg:gap-36">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 w-screen bg-[linear-gradient(120deg,rgba(79,70,229,0.08),transparent_28%,transparent_72%,rgba(20,184,166,0.08)),linear-gradient(rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:100%_100%,4rem_4rem,4rem_4rem] dark:bg-[linear-gradient(120deg,rgba(129,140,248,0.12),transparent_28%,transparent_72%,rgba(45,212,191,0.08)),linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]"
      />
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
