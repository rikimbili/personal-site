import "../styles/globals.css";

import Blob from "@components/Surfaces/Blob";
import Noise from "@components/Surfaces/Noise";
import { Analytics } from "@vercel/analytics/react";
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
  viewport: {
    initialScale: 1,
    width: "device-width",
  },
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`bg-slate-50 text-base transition duration-200 ease-out before:[filter:url(#mainBgNoise)] dark:bg-slate-950 sm:text-lg`}
      >
        <Noise />
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
            </div>
            <div className="flex h-screen flex-col items-center justify-center px-2 text-sm xs:hidden">
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
