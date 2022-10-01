import { motion } from "framer-motion";
import Head from "next/head";

import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { useMediaQuery } from "../hooks/useMediaQuery";

const mainVariants = {
  stagger: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

export default function Home() {
  //#region Hooks

  const smallWidth = useMediaQuery("(max-width: 320px)");

  //#endregion

  return (
    <>
      <Head>
        <title>{"Raciel Antela Pardo"}</title>
      </Head>
      {!smallWidth ? (
        <div className="flex min-h-screen flex-col">
          <Header />
          <motion.main
            className="my-20 flex grow flex-col gap-16 sm:my-24 sm:gap-24 lg:gap-36"
            variants={mainVariants}
            animate={"stagger"}
          >
            <Hero />
            <About />
            <Projects />
          </motion.main>
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
