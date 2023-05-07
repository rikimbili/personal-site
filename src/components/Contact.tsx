import { type ForwardedRef, forwardRef } from "react";
import { MdEmail, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { SiGithub, SiLinkedin, SiSpotify } from "react-icons/si";

import HoverJump from "./Animations/HoverJump";
import AnchorLink from "./Inputs/AnchorLink";
import ExternalLink from "./Inputs/ExternalLink";
import LinkIconButton from "./Inputs/LinkIconButton";
import SectionWrapper from "./SectionWrapper";

const Contact = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <SectionWrapper
      ref={ref}
      id={"contact"}
      fadeInDelay={0.15}
      className={
        "flex scroll-mt-20 flex-col gap-4 text-justify text-lg sm:w-full sm:gap-8 sm:text-xl lg:text-2xl"
      }
    >
      <h2
        className={"group w-fit select-none text-3xl sm:text-4xl lg:text-5xl"}
      >
        Contact{" "}
        <AnchorLink
          href={"#contact"}
          className={"opacity-0 group-hover:opacity-100"}
        />
      </h2>
      <p>
        Feel free to reach out to me via email at{" "}
        <ExternalLink href="mailto:hey@raciel.dev" target={"_self"}>
          hi@raciel.dev
          <MdEmail />
        </ExternalLink>
        . You can also find me on the following places:
      </p>
      <div
        className={
          "-mt-2 flex justify-start gap-4 text-3xl sm:gap-6 sm:text-4xl"
        }
      >
        <MdOutlineSubdirectoryArrowRight />
        <HoverJump>
          <LinkIconButton href={"https://github.com/Rikimbili"}>
            <SiGithub />
          </LinkIconButton>
        </HoverJump>
        <HoverJump>
          <LinkIconButton href={"https://www.linkedin.com/in/racielap"}>
            <SiLinkedin />
          </LinkIconButton>
        </HoverJump>
        <HoverJump>
          <LinkIconButton
            href={
              "https://open.spotify.com/user/hq4b6g53rt66krufjr2pnfqhc?si=035315f5f0d24075"
            }
          >
            <SiSpotify />
          </LinkIconButton>
        </HoverJump>
      </div>
    </SectionWrapper>
  );
});

Contact.displayName = "Contact";

export default Contact;
