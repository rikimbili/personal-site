import { ForwardedRef, forwardRef } from "react";

import OpenInNew from "./Icons/OpenInNew";
import AnchorLink from "./Inputs/AnchorLink";
import SectionWrapper from "./SectionWrapper";

const Contact = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <SectionWrapper
      id={"contact"}
      fadeInDelay={0.3}
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
        Contact{" "}
        <AnchorLink
          href={"#contact"}
          className={"opacity-0 group-hover:opacity-100"}
        />
      </h2>
      <p>
        Feel free to reach out to me via email at{" "}
        <a href="mailto:hey@raciel.dev" className={"underline"}>
          hi@raciel.dev
        </a>{" "}
        or shoot me a message on{" "}
        <a
          href="https://www.linkedin.com/in/racielap"
          target={"_blank"}
          rel="noreferrer"
          className={"inline-flex items-center underline"}
        >
          LinkedIn
          <OpenInNew className={"w-6 sm:w-7"} />
        </a>
        . If you are looking for an up-to-date copy of my resume, just click the
        Resume button on the floating header.
      </p>
    </SectionWrapper>
  );
});

Contact.displayName = "Contact";

export default Contact;