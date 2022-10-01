import { ForwardedRef, forwardRef } from "react";

import AnchorLink from "./Inputs/AnchorLink";
import SectionWrapper from "./SectionWrapper";

const About = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <SectionWrapper
      id={"about"}
      fadeInDelay={0.05}
      className={
        "scroll-mt-20 text-justify text-lg sm:w-full sm:text-xl lg:text-2xl"
      }
    >
      <h2
        ref={ref}
        className={
          "group mb-4 w-fit select-none text-3xl sm:mb-8 sm:text-4xl lg:text-5xl"
        }
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
    </SectionWrapper>
  );
});

About.displayName = "About";

export default About;
