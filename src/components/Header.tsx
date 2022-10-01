import { motion, useScroll, useSpring } from "framer-motion";
import { RefObject, useEffect } from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import OpenInNew from "./Icons/OpenInNew";
import Button from "./Inputs/Button";
import ButtonLink from "./Inputs/ButtonLink";

interface Props {
  aboutRef: RefObject<HTMLDivElement>;
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const springConfig = {
  stiffness: 400,
  damping: 21,
};

const dampenedSpringConfig = {
  stiffness: 300,
  damping: 30,
};

export default function Header({ aboutRef, projectsRef, contactRef }: Props) {
  //#region Hooks.
  const { scrollY } = useScroll();
  const progressX = useSpring(-30, dampenedSpringConfig);
  const progressWidth = useSpring(0, dampenedSpringConfig);
  const headerY = useSpring(0, springConfig);
  const headerBorderRadius = useSpring(0, springConfig);
  const headerBorderBottomRadius = useSpring(16, springConfig);

  useEffect(() => {
    return scrollY.onChange((scroll) => {
      // Scroll will be 0 when the user is at the top of the page.
      if (scroll === 0) {
        headerY.set(0);
        headerBorderRadius.set(0);
        headerBorderBottomRadius.set(16);
      } else {
        headerY.set(16);
        headerBorderRadius.set(32);
        headerBorderBottomRadius.set(32);
      }
      // Get the offset position of all the main sections.
      const aboutOffset = aboutRef?.current?.offsetTop || Infinity;
      const projectsOffset = projectsRef?.current?.offsetTop || Infinity;
      const contactOffset = contactRef?.current?.offsetTop || Infinity;

      // Updates the progress dot position and width based on the scroll position.
      // If the offset is Infinity due to the ref not being set / the section not being rendered, the progress dot will
      // be set based on the hash in the URL.
      if (
        scroll + window.innerHeight > contactOffset + 100 ||
        (contactOffset === Infinity && window.location.hash === "#contact")
      ) {
        updateProgress(185, 16);
      } else if (
        scroll > projectsOffset - 200 ||
        (projectsOffset === Infinity && window.location.hash === "#projects")
      ) {
        updateProgress(100, 16);
      } else if (
        scroll > aboutOffset - 300 ||
        (aboutOffset === Infinity && window.location.hash === "#about")
      ) {
        updateProgress(20, 16);
      } else {
        updateProgress(-30, 0);
      }
    });
  }, [
    headerBorderBottomRadius,
    headerBorderRadius,
    headerY,
    progressX,
    progressWidth,
    scrollY,
    aboutRef,
    projectsRef,
    contactRef,
  ]);

  useEffect(() => {
    // Retain header state if a previous scrollY value is retained (e.g. Refreshing the page)
    if (window.scrollY > 0) {
      headerY.set(16);
      headerBorderRadius.set(32);
      headerBorderBottomRadius.set(32);
    }
  }, []);

  //#endregion

  //#region Utility functions.

  const updateProgress = (x: number, width: number) => {
    progressX.set(x);
    progressWidth.set(width);
  };

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
