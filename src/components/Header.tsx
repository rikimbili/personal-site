import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { useMediaQuery } from "../hooks/useMediaQuery";
import OpenInNew from "./Icons/OpenInNew";
import Button from "./Inputs/Button";
import ButtonLink from "./Inputs/ButtonLink";

const springConfig = {
  stiffness: 400,
  damping: 21,
};

const dampenedSpringConfig = {
  stiffness: 300,
  damping: 25,
};

export default function Header() {
  //#region Hooks.
  const lg = useMediaQuery("(min-width: 1024px)");

  const { scrollYProgress } = useScroll();
  const progressX = useSpring(20, dampenedSpringConfig);
  const progressWidth = useSpring(16, dampenedSpringConfig);
  const headerY = useSpring(0, springConfig);
  const headerBorderRadius = useSpring(0, springConfig);
  const headerBorderBottomRadius = useSpring(16, springConfig);

  useEffect(() => {
    return scrollYProgress.onChange((progress) => {
      // Progress will be 0 as long as the scroll position is below the offset
      if (progress === 0) {
        headerY.set(0);
        headerBorderRadius.set(0);
        headerBorderBottomRadius.set(16);
      } else {
        headerY.set(16);
        headerBorderRadius.set(32);
        headerBorderBottomRadius.set(32);
      }
      // Update the progress indicator
      const projectsOffset = lg ? 0.63 : 0.23;

      if (progress > 0.95) {
        progressX.set(185);
        progressWidth.set(16);
      } else if (progress > projectsOffset) {
        progressX.set(100);
        progressWidth.set(16);
      } else if (progress > 0.1) {
        progressX.set(20);
        progressWidth.set(16);
      } else {
        progressX.set(-30);
        progressWidth.set(0);
      }
    });
  }, [
    headerBorderBottomRadius,
    headerBorderRadius,
    scrollYProgress,
    headerY,
    lg,
    progressX,
    progressWidth,
  ]);

  // Retain header state if a previous scrollY value is retained (e.g. Refreshing the page)
  useEffect(() => {
    if (window.scrollY > 0) {
      headerY.set(16);
      headerBorderRadius.set(32);
      headerBorderBottomRadius.set(32);
    }
  }, []);

  //#endregion

  //#region Handlers

  const handleResumeClick = () => {
    window.open(
      "https://drive.google.com/file/d/1mF6Z4U6Hk5yPq3V7c5y1J5V7XuZnX9j7/view?usp=sharing",
      "_blank"
    );
  };

  //#endregion

  return (
    <motion.header
      className={
        "fixed z-50 flex h-12 w-fit max-w-7xl select-none justify-center self-center px-6 text-xl shadow-weak " +
        "backdrop-blur-md dark:bg-slate-800/80 sm:w-11/12 sm:justify-between items-center overflow-hidden"
      }
      style={{
        y: headerY,
        borderRadius: headerBorderRadius,
        borderBottomLeftRadius: headerBorderBottomRadius,
        borderBottomRightRadius: headerBorderBottomRadius,
      }}
    >
      <div className={"hidden flex-col gap-1 sm:flex"}>
        <div className={"mt-1 flex gap-4"}>
          <ButtonLink className={"text-xl"} href={"#about"} target={""}>
            About
          </ButtonLink>
          <ButtonLink className={"text-xl"} href={"#projects"} target={""}>
            Projects
          </ButtonLink>
          <ButtonLink className={"text-xl"} href={"#contact"} target={""}>
            Contact
          </ButtonLink>
        </div>
        <motion.span
          className={"-mt-1 h-1 w-4 rounded-full dark:bg-slate-50"}
          style={{ x: progressX, width: progressWidth }}
        />
      </div>
      <div className={"flex items-center gap-4"}>
        <ButtonLink href={"https://github.com/Rikimbili"}>
          <SiGithub />
        </ButtonLink>
        <ButtonLink href={"https://www.linkedin.com/in/racielap"}>
          <SiLinkedin />
        </ButtonLink>
        <Button>
          Resume
          <OpenInNew className={"w-6 fill-slate-50"} />
        </Button>
      </div>
    </motion.header>
  );
}
