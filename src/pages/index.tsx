import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Raciel's Portfolio"}</title>
      </Head>
      <motion.div className="flex min-h-screen flex-col">
        <Header />
        <main className="h-[200vh] grow"></main>
        <Footer />
      </motion.div>
    </>
  );
}
