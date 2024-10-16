"use client";

import {
  positionVariants,
  transitions,
  transitionVariants,
} from "@styles/motion-definitions";
import { AnimatePresence, m, useScroll } from "framer-motion";
import { type RefObject, useEffect, useState } from "react";
import { useDebounce } from "usehooks-ts";

import ToggleButton from "./Inputs/ToggleButton";

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

  const [isNavOpen, setIsNavOpen] = useState(true);
  const debouncedIsNavOpen = useDebounce(isNavOpen, 300);
  const [headerTitle, setHeaderTitle] = useState(sectionRefs[0]?.name);

  useEffect(
    () =>
      scrollY.on("change", () => {
        const [y, prevY] = [scrollY.get(), scrollY.getPrevious()];
        if (!prevY) return;
        const isScrollingUp = y < prevY;
        const isScrollingDown = y > navStartOffset && y > prevY;
        // On any change to the scroll position, update the nav state
        if (y < navStartOffset || isScrollingUp) {
          setIsNavOpen(true);
        } else if (isScrollingDown) {
          setIsNavOpen(false);
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
    [scrollY, sectionRefs],
  );

  //#endregion

  return (
    <m.header
      variants={positionVariants}
      animate={debouncedIsNavOpen ? "animate" : "initialTop"}
      transition={transitions.easeOut}
      className={`fixed z-20 flex h-14 w-11/12 max-w-7xl select-none items-center justify-between self-center overflow-hidden 
      rounded-b-2xl border-x border-b border-slate-300 bg-slate-200/90 px-6 backdrop-blur-md transition duration-200 ease-out dark:border-slate-700 dark:bg-slate-800/80`}
    >
      <AnimatePresence mode={"wait"}>
        <m.div
          key={headerTitle}
          className={"flex gap-2"}
          initial={"growOut"}
          animate={"growIn"}
          exit={"growOut"}
          variants={transitionVariants}
        >
          {headerTitle}
        </m.div>
      </AnimatePresence>
      <ToggleButton />
    </m.header>
  );
}
