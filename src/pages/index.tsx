import Head from "next/head";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>{"Raciel's Portfolio"}</title>
      </Head>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="grow"></main>
        <Footer />
      </div>
    </>
  );
}
