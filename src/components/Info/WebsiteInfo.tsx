import { MdOutlineInfo } from "react-icons/md";
import { SiGithub } from "react-icons/si";

import TECHNOLOGIES from "../../data/technologies";
import Button from "../Inputs/Button";
import InlineLink from "../Inputs/InlineLink";
import PopoverButton from "../Inputs/PopoverButton";

interface Props {
  className?: string;
}

const technologies = [
  TECHNOLOGIES.NEXTJS,
  TECHNOLOGIES.TAILWINDCSS,
  TECHNOLOGIES.HEADLESSUI,
  TECHNOLOGIES.MOTION,
  TECHNOLOGIES.TYPESCRIPT,
  TECHNOLOGIES.VERCEL,
];

export default function WebsiteInfo({ className = "" }: Props) {
  return (
    <PopoverButton
      button={
        <Button variant={"text"} className={"cursor-help"}>
          <span className="ml-1">Website Info</span>
          <MdOutlineInfo className={"inline-block text-2xl"} />
        </Button>
      }
      popoverPlacement={"top"}
      openOnHover={true}
      className={className}
    >
      {(close) => (
        <div className={"max-w-xl flex-col text-center"}>
          <p className="">
            Built with{" "}
            {technologies.map((technology, index) => (
              <span key={technology.name}>
                {index > 0 && index < technologies.length - 2 && ", "}
                {index === technologies.length - 2 && " and "}
                {index === technologies.length - 1 && ". Hosted on "}
                <InlineLink href={technology.link}>
                  {technology.name} {technology.icon}
                </InlineLink>
              </span>
            ))}
          </p>
          <div className="my-2 mx-12 rounded-full border-t-2 border-slate-900/20 dark:border-slate-50/20 sm:mx-24" />
          <p className="">
            The source code is available on{" "}
            <InlineLink href={"https://github.com/Rikimbili/portfolio"}>
              GitHub <SiGithub />
            </InlineLink>
          </p>
        </div>
      )}
    </PopoverButton>
  );
}
