import { ForwardedRef, forwardRef } from "react";
import { MdEmail } from "react-icons/md";
import { SiGithub, SiLinkedin, SiSpotify } from "react-icons/si";

import HoverJump from "./Animations/HoverJump";
import AnchorLink from "./Inputs/AnchorLink";
import ButtonLink from "./Inputs/ButtonLink";
import InlineLink from "./Inputs/InlineLink";
import SectionWrapper from "./SectionWrapper";

const Contact = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <SectionWrapper
      id={"contact"}
      fadeInDelay={0.15}
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
        <InlineLink href="mailto:hey@raciel.dev" target={"_self"}>
          hi@raciel.dev
          <MdEmail />
        </InlineLink>
        . You can also find me on the following places:
      </p>
      <div className={"mt-4 flex justify-center gap-6 text-3xl sm:text-4xl"}>
        <HoverJump>
          <ButtonLink href={"https://github.com/Rikimbili"}>
            <SiGithub />
          </ButtonLink>
        </HoverJump>
        <HoverJump>
          <ButtonLink href={"https://www.linkedin.com/in/racielap"}>
            <SiLinkedin />
          </ButtonLink>
        </HoverJump>
        <HoverJump>
          <ButtonLink
            href={
              "https://open.spotify.com/user/hq4b6g53rt66krufjr2pnfqhc?si=035315f5f0d24075"
            }
          >
            <SiSpotify />
          </ButtonLink>
        </HoverJump>
      </div>
    </SectionWrapper>
  );
});

Contact.displayName = "Contact";

export default Contact;
