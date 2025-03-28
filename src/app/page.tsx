import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Index() {
  return (
    <div className="my-20 flex grow flex-col gap-16 sm:my-32 sm:gap-28">
      <Hero />
      <Projects />
      <Contact />
    </div>
  );
}
