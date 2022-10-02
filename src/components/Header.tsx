import { motion, useScroll, useSpring } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import { BiWindows } from "react-icons/bi";
import { SiGithub, SiLinkedin } from "react-icons/si";

import ResumeDialog from "./Dialogs/ResumeDialog";
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

  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);

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

      // Get the offset position of all the main sections and update the progress dot.
      const aboutOffset = aboutRef?.current?.offsetTop;
      const projectsOffset = projectsRef?.current?.offsetTop;
      const contactOffset = contactRef?.current?.offsetTop;

      updateProgress(scroll, aboutOffset, projectsOffset, contactOffset);
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

    updateProgress(window.scrollY);
  }, []);

  //#endregion

  //#region Utility functions.

  // Updates the progress dot position and width based on the scroll position.
  // If the offset is Infinity due to the ref not being set / the section not being rendered, the progress dot will
  // be set based on the hash in the URL.
  const updateProgress = (
    scroll: number,
    aboutOffset = Infinity,
    projectsOffset = Infinity,
    contactOffset = Infinity
  ) => {
    console.log(scroll, contactOffset, aboutOffset, projectsOffset);
    if (
      scroll + window.innerHeight > contactOffset + 100 ||
      (contactOffset === Infinity && window.location.hash === "#contact") ||
      scroll + window.innerHeight === document.body.scrollHeight // If the user is at the bottom of the page.
    ) {
      progressX.set(185);
      progressWidth.set(16);
    } else if (
      scroll > projectsOffset - 200 ||
      (projectsOffset === Infinity && window.location.hash === "#projects")
    ) {
      progressX.set(100);
      progressWidth.set(16);
    } else if (
      scroll > aboutOffset - 300 ||
      (aboutOffset === Infinity && window.location.hash === "#about")
    ) {
      progressX.set(20);
      progressWidth.set(16);
    } else {
      progressX.set(-30);
      progressWidth.set(0);
    }
  };

  //#region Handlers

  function closeResumeDialog() {
    setIsResumeDialogOpen(false);
    // Re-open the header
    if (headerBorderRadius.get() === 0) {
      headerY.set(0);
    } else {
      headerY.set(16);
    }
  }

  function openResumeDialog() {
    setIsResumeDialogOpen(true);
    // Close the header while the dialog is open
    headerY.set(-56);
  }

  //#endregion

  return (
    <motion.header
      className={
        "fixed z-50 flex h-12 w-fit max-w-7xl select-none justify-center self-center px-6 text-xl shadow-weak " +
        "backdrop-blur-md bg-slate-200/80 dark:bg-slate-800/80 sm:w-11/12 sm:justify-between items-center overflow-hidden"
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
          className={
            "-mt-1 h-1 w-4 rounded-full bg-slate-900 dark:bg-slate-100"
          }
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
        <Button onClick={openResumeDialog}>
          Resume
          <BiWindows />
        </Button>
        <ResumeDialog
          isDialogOpen={isResumeDialogOpen}
          closeDialog={closeResumeDialog}
        />
      </div>
    </motion.header>
  );
}
