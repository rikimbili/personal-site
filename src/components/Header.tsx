import { motion, useScroll } from "framer-motion";
import { RefObject, useEffect, useState } from "react";
import { BiWindows } from "react-icons/bi";

import { positionVariants, transitions } from "../styles/motion-definitions";
import ResumeDialog from "./Dialogs/ResumeDialog";
import Button from "./Inputs/Button";
import ButtonLink from "./Inputs/ButtonLink";

interface Props {
  projectsRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

const navStartOffset = 32;

export default function Header({ projectsRef, contactRef }: Props) {
  //#region Hooks

  const { scrollY } = useScroll();

  const [navState, setNavState] = useState<"closed" | "open" | "floating">(
    "closed"
  );
  const [isResumeDialogOpen, setIsResumeDialogOpen] = useState(false);

  // On any change to the scroll position, updateHiddenState will be called.
  useEffect(() => scrollY.onChange(updateHiddenState), []);

  //#endregion

  //#region Utility functions

  const updateHiddenState = () => {
    const isScrollingUp = scrollY.get() < scrollY.getPrevious();
    const isScrollingDown =
      scrollY.get() > navStartOffset && scrollY.get() > scrollY.getPrevious();

    if (scrollY.get() < navStartOffset) {
      setNavState("open");
    } else if (isScrollingUp) {
      setNavState("floating");
    } else if (isScrollingDown) {
      setNavState("closed");
    }
  };

  //#endregion

  //#region Handlers

  function closeResumeDialog() {
    setIsResumeDialogOpen(false);
    if (scrollY.get() < navStartOffset) {
      setNavState("open");
    } else {
      setNavState("floating");
    }
  }

  function openResumeDialog() {
    setIsResumeDialogOpen(true);
    setNavState("closed");
  }

  //#endregion

  return (
    <motion.header
      variants={positionVariants}
      animate={
        (navState === "open" && "animate") ||
        (navState === "closed" && "initialTop") ||
        (navState === "floating" && "floatingTop")
      }
      transition={transitions.easeOut}
      className={`fixed z-10 flex h-14 w-fit max-w-7xl select-none items-center justify-center self-center overflow-hidden 
        ${
          navState === "floating" ? "rounded-2xl" : "rounded-b-2xl"
        } bg-slate-200/80 px-6 text-xl backdrop-blur-md dark:bg-slate-800/80 sm:w-11/12 sm:justify-between`}
    >
      <div className={"hidden gap-4 sm:flex"}>
        <ButtonLink className={"text-xl"} href={"#projects"} target={""}>
          Projects
        </ButtonLink>
        <ButtonLink className={"text-xl"} href={"#contact"} target={""}>
          Contact
        </ButtonLink>
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
