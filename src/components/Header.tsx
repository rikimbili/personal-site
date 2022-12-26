"use client";

import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
  positionVariants,
  transitions,
  transitionVariants,
} from "../styles/motion-definitions";
import LinkIconButton from "./Inputs/LinkIconButton";
import Toggle from "./Theme/Toggle";

const navStartOffset = 32;

export default function Header() {
  //#region Hooks

  const pathname = usePathname();

  const { scrollY } = useScroll();

  const [navState, setNavState] = useState<"closed" | "open" | "floating">(
    "open"
  );

  // On any change to the scroll position, update the nav state
  useEffect(
    () =>
      scrollY.onChange(() => {
        const isScrollingUp = scrollY.get() < scrollY.getPrevious();
        const isScrollingDown =
          scrollY.get() > navStartOffset &&
          scrollY.get() > scrollY.getPrevious();

        if (scrollY.get() < navStartOffset) {
          setNavState("open");
        } else if (isScrollingUp) {
          setNavState("floating");
        } else if (isScrollingDown) {
          setNavState("closed");
        }
      }),
    [scrollY]
  );

  //#endregion

  //#region Derived State

  const isPortfolio = pathname === "/";
  const isBlog = pathname?.includes("/blog");

  return (
    <motion.header
      variants={positionVariants}
      animate={
        (navState === "open" && "animate") ||
        (navState === "closed" && "initialTop") ||
        (navState === "floating" && "floatingTop")
      }
      transition={transitions.easeOut}
      className={`fixed z-20 flex h-14 max-w-7xl select-none items-center self-center overflow-hidden 
        ${
          navState === "floating" ? "rounded-2xl" : "rounded-b-2xl"
        } w-11/12 justify-between bg-slate-200/80 px-6 text-xl backdrop-blur-md dark:bg-slate-800/80`}
    >
      <div className={"flex gap-2 text-lg sm:text-xl"}>
        {isPortfolio && (
          <motion.div
            initial={"growOut"}
            animate={"growIn"}
            variants={transitionVariants}
          >
            <LinkIconButton href={"/blog"} target={""}>
              Blog
            </LinkIconButton>
          </motion.div>
        )}
        {isBlog && (
          <motion.div
            initial={"growOut"}
            animate={"growIn"}
            variants={transitionVariants}
          >
            <LinkIconButton href={"/"} target={""}>
              Portfolio
            </LinkIconButton>
          </motion.div>
        )}
      </div>
      <div className={"flex items-center gap-4 text-2xl sm:text-3xl"}>
        <Toggle />
      </div>
    </motion.header>
  );
}
