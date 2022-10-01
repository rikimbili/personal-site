import { motion, useAnimationControls, useInView } from "framer-motion";
import Image from "next/future/image";
import { useEffect, useRef } from "react";
import { SiGithub } from "react-icons/si";

import OpenInNew from "../Icons/OpenInNew";
import Button from "../Inputs/Button";

interface Props {
  title: string;
  description: string;
  tags?: string[];
  visitLink?: string;
  sourceLink?: string;
  image: string;
  visitTextOverride?: string;
  fadeInDelay?: number;
}

const cardVariants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
    },
  }),
};

export default function ProjectCard({
  title,
  description,
  tags,
  visitLink,
  sourceLink,
  image,
  visitTextOverride = "Try it out!",
  fadeInDelay = 0,
}: Props) {
  //#region Hooks

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-15%" });
  const sectionControl = useAnimationControls();

  // Add the anchor tag to the URL and animate the section when it comes into view.
  useEffect(() => {
    if (isInView) {
      sectionControl.start("visible");
    }
  }, [isInView, sectionControl]);

  //#endregion

  //#region Handlers

  const handleVisitClick = () => {
    window.open(visitLink, "_blank");
  };

  const handleSourceClick = () => {
    window.open(sourceLink, "_blank");
  };

  //#endregion

  return (
    <motion.div
      ref={ref}
      whileHover={{
        scale: 1.01,
        boxShadow: "0rem 0.5rem 1rem rgba(0, 0, 0, 0.5)",
      }}
      initial={"initial"}
      animate={sectionControl}
      variants={cardVariants}
      custom={fadeInDelay}
      className="flex w-full max-w-xl flex-1 flex-col gap-2 overflow-hidden rounded-2xl bg-slate-800 pb-8 sm:min-w-[24rem] sm:gap-4"
    >
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
        {tags?.map((tag) => (
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
        {visitLink && (
          <Button onClick={handleVisitClick}>
            {visitTextOverride} <OpenInNew className={"w-7 fill-slate-50"} />
          </Button>
        )}
        {sourceLink && (
          <Button onClick={handleSourceClick}>
            Source <SiGithub className={"fill-slate-50"} />
          </Button>
        )}
      </div>
    </motion.div>
  );
}
