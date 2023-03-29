import { useMediaQuery } from "@hooks/useMediaQuery";
import { spawnVariants, transitions } from "@styles/motion-definitions";
import { AnimatePresence, motion, Reorder } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { MdNavigateBefore, MdNavigateNext, MdOpenInNew } from "react-icons/md";
import { SiGithub } from "react-icons/si";

import Button from "../Inputs/Button";
import IconButton from "../Inputs/IconButton";
import CustomImage from "./CustomImage";

interface Props {
  title: string;
  description: string;
  images: string[];
  logo?: string;
  tags?: string[];
  visitLink?: string;
  sourceLink?: string;
  visitTextOverride?: string;
  fadeInDelay?: number;
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
  fadeInDelay = 0,
}: Props) {
  //#region Hooks

  const xl = useMediaQuery("(min-width: 1280px)");

  const [reorderedTags, setReorderedTags] = useState<string[]>(tags || []);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const imageDirection = useRef<-1 | 1>(1);

  //#endregion

  //#region Handlers

  const handleChangeImage = (direction: -1 | 1) => {
    imageDirection.current = direction;
    setCurrentImageIdx((prev) => {
      if (
        (prev === 0 && direction === -1) ||
        (prev === images.length - 1 && direction === 1)
      ) {
        return prev;
      }
      return prev + direction;
    });
  };

  //#endregion

  //#region Derived State

  const showPrevImageArrow = images.length > 1 && currentImageIdx > 0;
  const showNextImageArrow =
    images.length > 1 && currentImageIdx < images.length - 1;

  //#endregion

  return (
    <motion.div
      initial={"initial"}
      whileInView={"visible"}
      viewport={{
        once: true,
      }}
      variants={spawnVariants}
      custom={fadeInDelay}
      className={`relative flex w-full max-w-xl flex-1 flex-col gap-2 overflow-hidden rounded-2xl bg-slate-200 
      pb-8 dark:bg-slate-800 sm:min-w-[24rem] sm:gap-4`}
    >
      <div className={"group relative text-slate-50"}>
        <div
          className={`absolute -left-16 top-1/2 z-10 flex h-full w-16 -translate-y-1/2 items-center bg-gradient-to-l 
              from-transparent to-black text-6xl transition-all duration-300 ${
                showPrevImageArrow ? "group-hover:left-0" : ""
              }`}
        >
          <IconButton
            className={"h-full"}
            onClick={() => handleChangeImage(-1)}
          >
            <MdNavigateBefore />
          </IconButton>
        </div>
        <AnimatePresence mode={"popLayout"} initial={false}>
          <motion.div
            key={images[currentImageIdx]}
            initial={{ x: imageDirection.current * 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: imageDirection.current * -100, opacity: 0 }}
            transition={transitions.springStiffer}
            className={"relative z-0 aspect-[3/2]"}
          >
            <CustomImage
              src={images[currentImageIdx] || ""}
              alt={title}
              fill
              priority
              className={"select-none object-cover"}
              draggable={false}
              sizes="(max-width: 1024px) 90vw,
              (max-width: 1600px) 50vw,
              33vw"
            />
          </motion.div>
        </AnimatePresence>
        <div
          className={`absolute -right-16 top-1/2 z-10 flex h-full w-16 -translate-y-1/2 items-center justify-end bg-gradient-to-r 
                from-transparent to-black text-6xl transition-all duration-300 ${
                  showNextImageArrow ? "group-hover:right-0" : ""
                }`}
        >
          <IconButton className={"h-full"} onClick={() => handleChangeImage(1)}>
            <MdNavigateNext />
          </IconButton>
        </div>
      </div>
      <h3
        className={
          "flex w-full items-center justify-center gap-2 text-2xl sm:text-3xl lg:text-4xl"
        }
      >
        <span>{title}</span>
        {logo && (
          <CustomImage
            src={logo}
            alt={title}
            fill
            draggable={false}
            containerClassName={
              "relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg overflow-hidden"
            }
            className={
              "h-full w-full select-none !bg-transparent object-contain"
            }
            sizes={"(max-width: 1024px) 4rem, 5rem"}
          />
        )}
      </h3>
      <p className={"mx-2 text-center text-base sm:mx-4 sm:text-lg lg:text-xl"}>
        {description}
      </p>
      <Reorder.Group
        values={reorderedTags}
        axis={"x"}
        onReorder={setReorderedTags}
        className={
          "mx-2 flex select-none flex-wrap justify-center gap-2 sm:mx-4"
        }
      >
        {reorderedTags?.map((tag) => (
          <Reorder.Item
            drag={xl}
            key={tag}
            value={tag}
            whileHover={{ cursor: xl ? "grab" : "default" }}
            whileDrag={{
              cursor: "grabbing",
              rotate: [0, 2, 0, -2],
              transition: {
                duration: 0.4,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            dragTransition={{
              bounceStiffness: 500,
              bounceDamping: 30,
            }}
            className={
              "rounded-full bg-slate-300 px-2 py-1 text-sm font-bold text-slate-700 dark:bg-slate-700 dark:text-slate-100 md:text-base lg:text-lg"
            }
          >
            {tag}
          </Reorder.Item>
        ))}
      </Reorder.Group>
      <div
        className={
          "mx-2 mt-4 flex justify-evenly gap-4 whitespace-nowrap sm:mx-4"
        }
      >
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
    </motion.div>
  );
}
