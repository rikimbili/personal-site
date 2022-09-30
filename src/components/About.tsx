import { FaHashtag } from "react-icons/fa";

import AnchorLink from "./Inputs/AnchorLink";
import IconLink from "./Inputs/IconLink";

export default function About() {
  return (
    <section
      id={"about"}
      className={
        "scroll-mt-20 text-justify text-lg sm:w-full sm:text-xl lg:text-2xl"
      }
    >
      <h2
        className={"group mb-4 w-fit text-3xl sm:mb-8 sm:text-4xl lg:text-5xl"}
      >
        About{" "}
        <AnchorLink
          href={"#about"}
          className={"opacity-0 group-hover:opacity-100"}
        />
      </h2>
      <p>
        I&apos;m a student and developer based out of Orlando, Florida.
        Currently working as a Software Engineer Intern at Career Fair Plus.
        Expecting to get my Bachelor&apos;s in Computer Science at the
        University of Central Florida by May, 2024.
      </p>
    </section>
  );
}
