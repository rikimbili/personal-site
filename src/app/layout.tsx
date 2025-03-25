import "../styles/globals.css";

import Blob from "@components/Surfaces/Blob";
import { Analytics } from "@vercel/analytics/react";
import { type Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { type ReactNode } from "react";

import personal from "~/data/personal";

import Footer from "../components/Footer";
import Providers from "./Providers";

const roboto = IBM_Plex_Sans({ weight: "400", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://raciel.dev"),
  title: personal.portfolioTitle,
  description: personal.portfolioDescription,
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
  ],
  twitter: {
    title: personal.portfolioTitle,
    description: personal.portfolioDescription,
    card: "summary_large_image",
    images: [
      {
        url: "/images/banner.png",
      },
    ],
  },
  openGraph: {
    title: personal.portfolioTitle,
    description: personal.portfolioDescription,
    type: "website",
    url: "https://raciel.dev",
    images: [
      {
        url: "/images/banner.png",
      },
    ],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-50 bg-custom-pattern-light text-base transition duration-200 ease-out dark:bg-slate-950 dark:bg-custom-pattern-dark sm:text-lg`}
      >
        <Providers>
          <main
            className={`relative text-slate-950 transition duration-200 ease-out dark:text-slate-50 ${roboto.className}`}
          >
            <div
              className={
                "relative mx-auto hidden min-h-screen w-11/12 max-w-7xl flex-col px-4 xs:flex"
              }
            >
              <Blob className={"left-1/2 h-10 w-full -translate-x-1/2"} />
              {children}
              <Footer />
            </div>
            <div className="absolute flex h-screen items-center justify-center px-3 text-sm xs:hidden">
              Your screen width is too low to view my site. If you have a
              foldable device, please unfold it &#128515;.
            </div>
          </main>
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
