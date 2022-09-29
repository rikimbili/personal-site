import { motion, useMotionValue, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import OpenInNew from "./Icons/OpenInNew";
import Button from "./Inputs/Button";

const springConfig = {
  stiffness: 400,
  damping: 21,
};

export default function Header() {
  //#region Hooks.

  const { scrollYProgress } = useScroll({ offset: ["start", "end"] });
  const y = useSpring(0, springConfig);
  const borderRadius = useSpring(0, springConfig);
  const borderBottomRadius = useSpring(16, springConfig);

  useEffect(() => {
    return scrollYProgress.onChange((progress) => {
      // Progress will be 0 as long as the scroll position is below the offset
      if (progress === 0) {
        y.set(0);
        borderRadius.set(0);
        borderBottomRadius.set(16);
      } else {
        y.set(16);
        borderRadius.set(32);
        borderBottomRadius.set(32);
      }
    });
  }, [borderBottomRadius, borderRadius, scrollYProgress, y]);

  // Retain header state if a previous scrollY value is retained (e.g. Refreshing the page)
  useEffect(() => {
    if (window.scrollY > 0) {
      y.set(16);
      borderRadius.set(32);
      borderBottomRadius.set(32);
    }
  }, []);

  //#endregion

  return (
    <motion.header
      className={
        "fixed flex h-12 w-fit max-w-7xl select-none justify-center self-center px-6 text-xl bg-blend-color backdrop-blur-md dark:bg-slate-800/90 sm:w-11/12 sm:justify-between"
      }
      style={{
        y,
        borderRadius,
        borderBottomLeftRadius: borderBottomRadius,
        borderBottomRightRadius: borderBottomRadius,
      }}
    >
      <div className={"hidden items-center sm:flex sm:gap-4"}>
        <a className={"cursor-pointer"}>About</a>
        <a className={"cursor-pointer"}>Projects</a>
        <a className={"cursor-pointer"}>Contact</a>
      </div>
      <div className={"flex items-center gap-4"}>
        <a>
          <SiGithub className={"cursor-pointer fill-slate-50 text-3xl"} />
        </a>
        <a>
          <SiLinkedin className={"cursor-pointer fill-slate-50 text-3xl"} />
        </a>
        <Button>
          Resume
          <OpenInNew className={"w-6 fill-slate-50"} />
        </Button>
      </div>
    </motion.header>
  );
}
