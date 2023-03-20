import "../styles/globals.css";

import { Roboto_Flex } from "next/font/google";
import { type ReactNode } from "react";

import Footer from "../components/Footer";
import Providers from "./Providers";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={
          "bg-slate-100 transition duration-200 ease-out dark:bg-slate-900"
        }
      >
        <Providers>
          <main
            className={`bg-light-background-pattern text-slate-900 transition duration-200 ease-out 
            dark:bg-dark-background-pattern dark:text-slate-50 ${roboto.className}`}
          >
            <div
              className={
                "mx-auto hidden min-h-screen w-11/12 max-w-7xl flex-col px-4 xs:flex"
              }
            >
              {children}
              <Footer />
            </div>
            <div className="flex h-screen flex-col items-center justify-center px-2 xs:hidden">
              Your screen width is too low to view my site. If you have a
              foldable device, please unfold it &#128516;.
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
