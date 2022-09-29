import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Raciel's Portfolio"}</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="mt-24 grow">
          <Hero />
        </main>
        <Footer />
      </div>
    </>
  );
}
