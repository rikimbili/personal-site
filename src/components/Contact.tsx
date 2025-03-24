import { type ForwardedRef, forwardRef } from "react";
import { MdEmail, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";

import HoverJump from "./Animations/HoverJump";
import AnchorLink from "./Inputs/AnchorLink";
import CustomLink from "./Inputs/CustomLink";
import ExternalLink from "./Inputs/ExternalLink";
import SectionWrapper from "./SectionWrapper";

const Contact = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <SectionWrapper
      ref={ref}
      id={"contact"}
      fadeInDelay={0.15}
      className={
        "flex scroll-mt-20 flex-col gap-4 text-pretty sm:w-full sm:gap-8"
      }
    >
      <h2
        className={
          "group flex w-fit select-none items-center gap-2 text-center text-2xl sm:text-3xl"
        }
      >
        Contact{" "}
        <AnchorLink
          href={"#contact"}
          className={"opacity-0 group-hover:opacity-100"}
        />
      </h2>
      <div className={"flex flex-col gap-2 sm:gap-4"}>
        <p>
          Feel free to reach out to me via email at{" "}
          <ExternalLink href="mailto:hey@raciel.dev" target={"_self"}>
            hi@raciel.dev
            <MdEmail />
          </ExternalLink>
          . You can also find me on the following places:
        </p>
        <div
          className={"flex justify-start gap-4 text-3xl sm:gap-6 sm:text-4xl"}
        >
          <MdOutlineSubdirectoryArrowRight />
          <HoverJump>
            <CustomLink href={"https://github.com/Rikimbili"}>
              <SiGithub />
            </CustomLink>
          </HoverJump>
          <HoverJump>
            <CustomLink href={"https://www.linkedin.com/in/racielap"}>
              <SiLinkedin />
            </CustomLink>
          </HoverJump>
        </div>
      </div>
    </SectionWrapper>
  );
});

Contact.displayName = "Contact";

export default Contact;
