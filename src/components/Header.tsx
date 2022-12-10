import { motion, useScroll, useSpring } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import { BiWindows } from "react-icons/bi";

import ResumeDialog from "./Dialogs/ResumeDialog";
import Button from "./Inputs/Button";
import ButtonLink from "./Inputs/ButtonLink";

interface Props {
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

const PROGRESS = {
  hiddenWidth: 0,
  hiddenX: -30,
  visibleWidth: 20,
  visibleX: 0,
  projectsX: 27,
  contactX: 115,
};

const HEADER = {
  hiddenY: -56,
  dockedBorderRadius: 0,
  dockedBorderBottomRadius: 16,
  dockedY: 0,
  floatingBorderRadius: 32,
  floatingY: 16,
};

export default function Header({ projectsRef, contactRef }: Props) {
  //#region Hooks.
  const { scrollY } = useScroll();
  const progressX = useSpring(PROGRESS.hiddenX, dampenedSpringConfig);
  const progressWidth = useSpring(PROGRESS.hiddenWidth, dampenedSpringConfig);
  const headerY = useSpring(HEADER.dockedY, springConfig);
  const headerBorderRadius = useSpring(HEADER.dockedBorderRadius, springConfig);
  const headerBorderBottomRadius = useSpring(
    HEADER.dockedBorderBottomRadius,
    springConfig
  );

  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);

  useEffect(() => {
    return scrollY.onChange((scroll) => {
      // Scroll will be 0 when the user is at the top of the page.
      if (scroll === 0) {
        headerY.set(HEADER.dockedY);
        headerBorderRadius.set(HEADER.dockedBorderRadius);
        headerBorderBottomRadius.set(HEADER.dockedBorderBottomRadius);
      } else {
        headerY.set(HEADER.floatingY);
        headerBorderRadius.set(HEADER.floatingBorderRadius);
        headerBorderBottomRadius.set(HEADER.floatingBorderRadius);
      }

      // Get the offset position of all the main sections and update the progress dot.
      const projectsOffset = projectsRef?.current?.offsetTop || Infinity;
      const contactOffset = contactRef?.current?.offsetTop || Infinity;

      updateProgress(scroll, projectsOffset, contactOffset);
    });
  }, [
    headerBorderBottomRadius,
    headerBorderRadius,
    headerY,
    progressX,
    progressWidth,
    scrollY,
    projectsRef,
    contactRef,
  ]);

  useEffect(() => {
    // Retain header state if a previous scrollY value is retained (e.g. Refreshing the page)
    if (window.scrollY > 0) {
      headerY.set(HEADER.floatingY);
      headerBorderRadius.set(HEADER.floatingBorderRadius);
      headerBorderBottomRadius.set(HEADER.floatingBorderRadius);
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
    projectsOffset = Infinity,
    contactOffset = Infinity
  ) => {
    if (
      scroll + window.innerHeight > contactOffset + 100 ||
      (contactOffset === Infinity && window.location.hash === "#contact") ||
      scroll + window.innerHeight === document.body.scrollHeight // If the user is at the bottom of the page.
    ) {
      progressX.set(PROGRESS.contactX);
      progressWidth.set(PROGRESS.visibleWidth);
    } else if (
      scroll > projectsOffset - 200 ||
      (projectsOffset === Infinity && window.location.hash === "#projects")
    ) {
      progressX.set(PROGRESS.projectsX);
      progressWidth.set(PROGRESS.visibleWidth);
    } else {
      progressX.set(PROGRESS.hiddenX);
      progressWidth.set(PROGRESS.hiddenWidth);
    }
  };

  //#region Handlers

  function closeResumeDialog() {
    setIsResumeDialogOpen(false);
    // Re-open the header
    if (headerBorderRadius.get() === 0) {
      headerY.set(HEADER.dockedY);
    } else {
      headerY.set(HEADER.floatingY);
    }
  }

  function openResumeDialog() {
    setIsResumeDialogOpen(true);
    // Close the header while the dialog is open
    headerY.set(HEADER.hiddenY);
  }

  //#endregion

  return (
    <motion.header
      className={
        "fixed z-10 flex h-14 w-fit max-w-7xl select-none justify-center self-center px-6 text-xl shadow-weak " +
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
          <ButtonLink className={"text-xl"} href={"#projects"} target={""}>
            Projects
          </ButtonLink>
          <ButtonLink className={"text-xl"} href={"#contact"} target={""}>
            Contact
          </ButtonLink>
        </div>
        <motion.span
          className={
            "-mt-1 h-1 w-4 rounded-full bg-indigo-900 dark:bg-indigo-200"
          }
          style={{ x: progressX, width: progressWidth }}
        />
      </div>
      <div className={"flex items-center gap-4"}>
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
