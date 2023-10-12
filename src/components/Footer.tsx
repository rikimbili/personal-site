"use client";

import WebsiteInfo from "./Info/WebsiteInfo";
import CurrentlyPlaying from "./Widgets/CurrentlyPlaying";

export default function Footer() {
  return (
    <footer
      className={`z-20 mt-auto flex w-full flex-col items-center gap-4 self-center rounded-t-2xl bg-slate-300/90 px-8 pb-4 
    pt-2 text-base shadow-md backdrop-blur-md dark:bg-slate-800/80 sm:gap-6 sm:pb-6 sm:pt-4 sm:text-xl`}
    >
      <WebsiteInfo className={"lg:-mb-14"} />
      <div
        className={
          "flex w-full flex-wrap-reverse justify-center gap-4 sm:gap-6 lg:justify-between"
        }
      >
        <span className={"select-none text-justify"}>
          &copy; {new Date().getFullYear()} Raciel Antela Pardo
        </span>
        <CurrentlyPlaying />
      </div>
    </footer>
  );
}
