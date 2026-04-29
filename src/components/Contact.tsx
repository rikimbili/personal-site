"use client";

import { type ForwardedRef, forwardRef } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { SiGithub } from "react-icons/si";

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
      fadeInDelay={0.12}
      className={
        "relative flex scroll-mt-20 flex-col gap-4 text-pretty sm:w-full sm:gap-6"
      }
    >
      <h2
        className={
          "group flex w-fit select-none items-center gap-2 text-center text-3xl font-semibold sm:text-4xl"
        }
      >
        Contact{" "}
        <AnchorLink
          href={"#contact"}
          className={"opacity-0 group-hover:opacity-100"}
        />
      </h2>
      <div className={"flex max-w-3xl flex-col gap-5 sm:gap-6"}>
        <p className={"leading-8 text-slate-700 dark:text-slate-200"}>
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
          <MdOutlineSubdirectoryArrowRight
            className={"text-indigo-600 dark:text-indigo-300"}
          />
          <HoverJump>
            <CustomLink href={"https://github.com/Rikimbili"}>
              <SiGithub />
            </CustomLink>
          </HoverJump>
          <HoverJump>
            <CustomLink href={"https://www.linkedin.com/in/racielap"}>
              <FaLinkedin />
            </CustomLink>
          </HoverJump>
        </div>
      </div>
    </SectionWrapper>
  );
});

Contact.displayName = "Contact";

export default Contact;
