import { Dialog } from "@headlessui/react";
import { transitionVariants } from "@styles/motion-definitions";
import { AnimatePresence, m } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

export default function StyledDialog({
  isOpen,
  onClose,
  className = "",
  children,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          as={m.div}
          variants={transitionVariants}
          initial={"fadeOut"}
          animate={"fadeIn"}
          exit={"fadeOut"}
          open={isOpen}
          onClose={onClose}
          className={
            "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 md:p-12"
          }
        >
          <Dialog.Backdrop
            as={m.div}
            variants={transitionVariants}
            initial={"fadeOut"}
            animate={"fadeIn"}
            exit={"fadeOut"}
            className={"fixed inset-0 z-40 bg-black/80 backdrop-blur-md"}
            aria-hidden={"true"}
          />
          <Dialog.Panel
            as={m.div}
            variants={transitionVariants}
            initial={"growOut"}
            animate={"growIn"}
            exit={"growOut"}
            className={`flex w-full max-w-7xl items-center justify-center ${className}`}
          >
            {children}
          </Dialog.Panel>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
