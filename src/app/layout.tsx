import "../styles/globals.css";

import { Roboto_Flex } from "@next/font/google";
import { ReactNode } from "react";

import Providers from "./Providers";

const roboto = Roboto_Flex({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={"bg-slate-100 dark:bg-slate-900"}>
        <Providers>
          <div
            className={`bg-light-background-pattern text-slate-900 transition duration-200 ease-out 
            dark:bg-dark-background-pattern dark:text-slate-50 ${roboto.className}`}
          >
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
