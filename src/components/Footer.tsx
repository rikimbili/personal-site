import { MdOutlineInfo } from "react-icons/md";

import CurrentlyPlaying from "./Widgets/CurrentlyPlaying";

export default function Footer() {
  return (
    <footer className="flex flex-wrap-reverse items-center justify-center gap-4 py-6 text-base md:gap-8 lg:justify-between">
      <span className={"text-justify text-sm sm:text-base"}>
        &copy; {new Date().getFullYear()} Raciel Antela Pardo. All rights
        reserved.
      </span>
      <CurrentlyPlaying />
      <span className={"flex"}>
        <MdOutlineInfo className={"inline-block text-2xl"} />
        <span className="ml-1">Website Info</span>
      </span>
    </footer>
  );
}
