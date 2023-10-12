import { MdOutlineInfo } from "react-icons/md";
import { SiGithub } from "react-icons/si";

import TECHNOLOGIES from "../../data/technologies";
import Button from "../Inputs/Button";
import CustomPopover from "../Inputs/CustomPopover";
import ExternalLink from "../Inputs/ExternalLink";

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
    <CustomPopover
      trigger={
        <Button variant={"text"} className={"cursor-help"}>
          <span className="ml-1">Website Info</span>
          <MdOutlineInfo className={"text-2xl"} />
        </Button>
      }
      popoverPlacement={"top"}
      openOnHover={true}
      className={className}
    >
      {() => (
        <div className={"max-w-xl flex-col text-center sm:text-lg"}>
          <p className="">
            Built with{" "}
            {technologies.map((technology, index) => (
              <span key={technology.name}>
                {index > 0 && index < technologies.length - 2 && ", "}
                {index === technologies.length - 2 && " and "}
                {index === technologies.length - 1 && ". Hosted on "}
                <ExternalLink href={encodeURI(technology.link)}>
                  {technology.name} {technology.icon}
                </ExternalLink>
              </span>
            ))}
          </p>
          <div className="mx-12 my-2 rounded-full border-t-2 border-slate-900/20 dark:border-slate-50/20 sm:mx-24" />
          <p className="">
            The source code is available on{" "}
            <ExternalLink href={"https://github.com/Rikimbili/personal-site"}>
              GitHub <SiGithub />
            </ExternalLink>
          </p>
        </div>
      )}
    </CustomPopover>
  );
}
