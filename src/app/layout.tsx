import "../styles/globals.css";

import Blob from "@components/Surfaces/Blob";
import Noise from "@components/Surfaces/Noise";
import { Analytics } from "@vercel/analytics/react";
import { IBM_Plex_Sans } from "next/font/google";
import { type ReactNode } from "react";

import Footer from "../components/Footer";
import Providers from "./Providers";

const roboto = IBM_Plex_Sans({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-50 transition duration-200 ease-out before:[filter:url(#mainBgNoise)] dark:bg-slate-950`}
      >
        <Noise filterId={"mainBgNoise"} />
        <Providers>
          <main
            className={`text-slate-950 transition duration-200 ease-out dark:text-slate-50 ${roboto.className}`}
          >
            <div
              className={
                "relative mx-auto hidden min-h-screen w-11/12 max-w-7xl flex-col px-4 xs:flex"
              }
            >
              <Blob className={"left-1/2 h-10 w-full -translate-x-1/2"} />
              {children}
              <Footer />
              <Blob
                className={"bottom-0 left-1/2 h-10 w-full -translate-x-1/2"}
              />
            </div>
            <div className="flex h-screen flex-col items-center justify-center px-2 xs:hidden">
              Your screen width is too low to view my site. If you have a
              foldable device, please unfold it &#128516;.
            </div>
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
