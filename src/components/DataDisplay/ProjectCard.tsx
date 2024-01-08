import SpotlightCard from "@components/Surfaces/SpotlightCard";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";
import { SiGithub } from "react-icons/si";

import Button from "../Inputs/Button";
import CustomImage from "./CustomImage";

interface Props {
  title: string;
  description: string;
  images: string[];
  logo: string | undefined;
  tags: string[] | undefined;
  visitLink: string | undefined;
  sourceLink: string | undefined;
  visitTextOverride: string | undefined;
}

export default function ProjectCard({
  title,
  description,
  images,
  logo,
  tags,
  visitLink,
  sourceLink,
  visitTextOverride = "Try it out!",
}: Props) {
  //#region Hooks

  const [emblaRef] = useEmblaCarousel();

  //#endregion

  return (
    <SpotlightCard
      className={`relative flex w-full flex-col gap-2 pb-8 sm:gap-4`}
    >
      <div
        ref={images.length > 1 ? emblaRef : null}
        className={`group relative h-fit overflow-x-hidden rounded-t-xl text-slate-50 ${
          images.length > 1 ? "cursor-grab active:cursor-grabbing" : ""
        }`}
      >
        <div className={"flex"}>
          {images.map((image, index) => (
            <CustomImage
              key={index}
              src={image}
              alt={title}
              fill
              priority
              draggable={false}
              sizes="(max-width: 1024px) 90vw,
              (max-width: 1600px) 50vw,
              33vw"
              containerClassName={
                "relative grow-0 shrink-0 basis-full min-w-0 aspect-[3/2]"
              }
              className={"select-none object-cover"}
            />
          ))}
        </div>
      </div>
      <div className={"flex grow flex-col gap-4 px-4 sm:px-6"}>
        <div className={"flex w-full items-center justify-center gap-2"}>
          <h3 className={"text-xl font-semibold sm:text-2xl"}>{title}</h3>
          {logo && (
            <CustomImage
              src={logo}
              alt={title}
              fill
              draggable={false}
              containerClassName={
                "relative size-6 sm:size-8 rounded-lg overflow-hidden"
              }
              className={"size-full select-none !bg-transparent object-contain"}
              sizes={"(max-width: 1024px) 4rem, 5rem"}
            />
          )}
        </div>
        <p className={"text-center"}>{description}</p>
        <ul className={"flex select-none flex-wrap justify-center gap-2"}>
          {tags?.map((tag) => (
            <li
              key={title + tag}
              className={
                "rounded-full bg-slate-300 px-3 py-1.5 text-slate-700 dark:bg-slate-700 dark:text-slate-100 " +
                "ring-indigo-500 hover:ring-1 ring-0 transition duration-200 ease-out"
              }
            >
              {tag}
            </li>
          ))}
        </ul>
        <div className={"mt-auto flex justify-evenly gap-4 whitespace-nowrap"}>
          {visitLink && (
            <Link href={visitLink} target={"_blank"}>
              <Button>
                {visitTextOverride} <MdOpenInNew />
              </Button>
            </Link>
          )}
          {sourceLink && (
            <Link href={sourceLink} target={"_blank"}>
              <Button variant={visitLink ? "text" : "filled"}>
                Source <SiGithub />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
