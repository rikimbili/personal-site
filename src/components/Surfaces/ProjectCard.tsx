import Image from "next/future/image";
import { RiExternalLinkLine } from "react-icons/ri";
import { SiGithub } from "react-icons/si";

import OpenInNew from "../Icons/OpenInNew";
import Button from "../Inputs/Button";

interface Props {
  title: string;
  description: string;
  tags: string[];
  hostedLink?: string;
  sourceLink?: string;
  image: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  hostedLink,
  sourceLink,
  image,
}: Props) {
  return (
    <div className="flex w-full max-w-xl flex-1 flex-col gap-2 overflow-hidden rounded-2xl bg-slate-800 pb-8 sm:min-w-[24rem] sm:gap-4">
      <div
        className={
          "relative h-[56vw] w-full sm:h-[58vw] md:h-96 lg:h-[28vw] xl:h-96"
        }
      >
        <Image
          src={image}
          alt={title}
          fill
          className={"object-cover"}
          draggable={false}
        />
      </div>
      <h3 className={"mx-4 text-center text-2xl sm:text-3xl lg:text-4xl"}>
        {title}
      </h3>
      <p className={"mx-2 text-center text-base sm:mx-4 sm:text-lg lg:text-xl"}>
        {description}
      </p>
      <div className={"mx-2 flex flex-wrap justify-center gap-2 sm:mx-4"}>
        {tags.map((tag) => (
          <span
            key={tag}
            className={
              "rounded-full bg-slate-700 px-2 py-1 text-sm font-bold text-slate-100 md:text-base lg:text-lg"
            }
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        className={
          "mx-2 mt-4 flex justify-evenly gap-4 whitespace-nowrap sm:mx-4"
        }
      >
        {hostedLink && (
          <Button>
            Try it out! <OpenInNew className={"w-7 fill-slate-50"} />
          </Button>
        )}
        {sourceLink && (
          <Button>
            Source <SiGithub className={"fill-slate-50"}></SiGithub>
          </Button>
        )}
      </div>
    </div>
  );
}
