import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdClose, MdOpenInNew } from "react-icons/md";

import personal from "../../data/personal";
import Button from "../Inputs/Button";
import InlineLink from "../Inputs/InlineLink";

interface Props {
  isDialogOpen: boolean;
  closeDialog: () => void;
}

const dialogVariants = {
  backdropHidden: {
    opacity: 0,
  },
  backdropVisible: {
    opacity: 1,
  },
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    scale: 0.9,
  },
};

const transition = {
  type: "spring",
  duration: 0.3,
  bounce: 0.25,
};

export default function ResumeDialog({ isDialogOpen, closeDialog }: Props) {
  //#region Hooks

  const [hiddenZIndex, setHiddenZIndex] = useState(-1);

  useEffect(() => {
    if (isDialogOpen) {
      setHiddenZIndex(10);
    } else {
      setTimeout(() => setHiddenZIndex(-1), transition.duration * 1000);
    }
  }, [isDialogOpen]);

  //#endregion

  return (
    <Dialog
      static
      as={motion.div}
      variants={dialogVariants}
      initial={"closed"}
      animate={isDialogOpen ? "open" : "closed"}
      exit={"closed"}
      transition={transition}
      open={isDialogOpen}
      onClose={closeDialog}
      style={{ zIndex: hiddenZIndex }}
      className={
        "fixed inset-0 flex items-center justify-center p-4 sm:p-8 md:p-12"
      }
    >
      <Dialog.Backdrop
        as={motion.div}
        variants={dialogVariants}
        initial={"backdropHidden"}
        animate={isDialogOpen ? "backdropVisible" : "backdropHidden"}
        exit={"backdropHidden"}
        transition={transition}
        style={{ zIndex: hiddenZIndex - 1 }}
        className={"fixed inset-0 bg-black/60 backdrop-blur-sm"}
        aria-hidden={"true"}
      />
      <Dialog.Panel
        className={
          "h-full max-h-[135vw] w-full max-w-5xl rounded-2xl bg-slate-100/90 p-4 backdrop-blur-md dark:bg-slate-800/80 lg:max-h-[76rem] "
        }
      >
        <Dialog.Title
          className={"mb-2 text-center text-xl sm:mb-4 sm:text-4xl"}
        >
          Resume
        </Dialog.Title>
        <div className={"h-full w-full rounded-2xl pb-8 sm:pb-16"}>
          <object
            aria-labelledby={"Google Drive Preview"}
            data={personal.resumeLink}
            className={
              "flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl text-base sm:gap-4 sm:text-2xl"
            }
          >
            <p>The resume cannot be displayed &#128542;</p>
            <InlineLink href={personal.resumeLink}>
              Click here to load it in a new tab
              <MdOpenInNew />
            </InlineLink>
          </object>
        </div>
        <Button
          className={"absolute top-3 right-3 text-2xl"}
          onClick={closeDialog}
        >
          <MdClose />
        </Button>
      </Dialog.Panel>
    </Dialog>
  );
}
