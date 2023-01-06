"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { RefObject, useEffect, useState } from "react";

import {
  positionVariants,
  transitions,
  transitionVariants,
} from "../styles/motion-definitions";
import Toggle from "./Theme/Toggle";

interface Props {
  sectionRefs: {
    ref: RefObject<HTMLDivElement>;
    name: string;
  }[];
}

const navStartOffset = 32;

export default function Header({ sectionRefs }: Props) {
  //#region Hooks

  const { scrollY } = useScroll();

  const [navState, setNavState] = useState<"closed" | "open">("open");
  const [headerTitle, setHeaderTitle] = useState(sectionRefs[0].name);

  useEffect(
    () =>
      scrollY.onChange(() => {
        const isScrollingUp = scrollY.get() < scrollY.getPrevious();
        const isScrollingDown =
          scrollY.get() > navStartOffset &&
          scrollY.get() > scrollY.getPrevious();

        // On any change to the scroll position, update the nav state
        if (scrollY.get() < navStartOffset || isScrollingUp) {
          setNavState("open");
        } else if (isScrollingDown) {
          setNavState("closed");
        }

        // Show the header title for the hidden section header
        sectionRefs.forEach(({ ref, name }) => {
          if (
            ref.current &&
            ref.current.getBoundingClientRect().top < 48 &&
            ref.current.getBoundingClientRect().bottom > 0
          ) {
            setHeaderTitle(name);
          }
        });
      }),
    [scrollY, sectionRefs]
  );

  //#endregion

  return (
    <motion.header
      variants={positionVariants}
      animate={
        (navState === "open" && "animate") ||
        (navState === "closed" && "initialTop")
      }
      transition={transitions.easeOut}
      className={`fixed z-20 flex h-14 w-11/12 max-w-7xl select-none items-center justify-between self-center
        overflow-hidden rounded-b-2xl bg-slate-200/80 px-6 text-xl backdrop-blur-md transition duration-200 ease-out dark:bg-slate-800/80`}
    >
      <AnimatePresence mode={"wait"}>
        <motion.div
          key={headerTitle}
          className={"flex gap-2 text-lg sm:text-xl"}
          initial={"growOut"}
          animate={"growIn"}
          exit={"growOut"}
          variants={transitionVariants}
        >
          {headerTitle}
        </motion.div>
      </AnimatePresence>
      <div className={"flex items-center gap-4 text-2xl sm:text-3xl"}>
        <Toggle />
      </div>
    </motion.header>
  );
}
