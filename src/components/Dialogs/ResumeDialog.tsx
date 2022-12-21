import { Dialog } from "@headlessui/react";
import { MdClose, MdOpenInNew } from "react-icons/md";

import personal from "../../data/personal";
import Button from "../Inputs/Button";
import InlineLink from "../Inputs/InlineLink";
import Card from "../Surfaces/Card";
import StyledDialog from "./StyledDialog";

interface Props {
  isDialogOpen: boolean;
  closeDialog: () => void;
}

export default function ResumeDialog({ isDialogOpen, closeDialog }: Props) {
  return (
    <StyledDialog isOpen={isDialogOpen} onClose={closeDialog}>
      <Card
        className={
          "relative flex aspect-tall max-h-[90vh] w-full flex-col overflow-hidden bg-slate-100/90 p-4 backdrop-blur-md dark:bg-slate-800/80"
        }
      >
        <Dialog.Title
          className={"mb-2 text-center text-2xl sm:mb-4 sm:text-4xl"}
        >
          Resume
        </Dialog.Title>
        <div className={"h-full w-full rounded-2xl"}>
          <object
            aria-label={"Resume Preview"}
            data={personal.resumeLink}
            className={
              "flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl text-base sm:text-2xl"
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
      </Card>
    </StyledDialog>
  );
}
