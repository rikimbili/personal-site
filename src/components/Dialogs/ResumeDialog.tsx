import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose, MdOpenInNew } from "react-icons/md";

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
    y: 20,
  },
};

export default function ResumeDialog({ isDialogOpen, closeDialog }: Props) {
  return (
    <AnimatePresence>
      {isDialogOpen && (
        <Dialog
          static
          as={motion.div}
          variants={dialogVariants}
          initial={"closed"}
          animate={"open"}
          exit={"closed"}
          transition={{ duration: 0.15 }}
          open={isDialogOpen}
          onClose={closeDialog}
          className={
            "fixed inset-0 z-10 flex items-center justify-center p-4 sm:p-8 md:p-12"
          }
        >
          <Dialog.Backdrop
            as={motion.div}
            variants={dialogVariants}
            initial={"backdropHidden"}
            animate={"backdropVisible"}
            exit={"backdropHidden"}
            transition={{ duration: 0.15 }}
            className={"fixed inset-0 bg-black/60 backdrop-blur-sm"}
            aria-hidden={"true"}
          />
          <Dialog.Panel
            className={
              "h-full max-h-full w-full max-w-7xl rounded-2xl bg-slate-100/90 p-4 backdrop-blur-md dark:bg-slate-800/80 "
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
                data="https://drive.google.com/file/d/1QeabHVP-wJERMum3EX4oRIN4x6WCOPXl/preview"
                className={
                  "flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl text-base sm:gap-4 sm:text-2xl"
                }
              >
                <p>The resume cannot be displayed &#128542;</p>
                <InlineLink href="https://drive.google.com/file/d/1QeabHVP-wJERMum3EX4oRIN4x6WCOPXl/preview">
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
      )}
    </AnimatePresence>
  );
}
