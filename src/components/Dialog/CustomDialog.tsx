import Button from "@components/Inputs/Button";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { transitionVariants } from "@styles/motion-definitions";
import { AnimatePresence, m } from "framer-motion";
import { type ReactNode } from "react";
import { MdClose } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: ReactNode | string;
  disableClickOutside?: boolean;
  className?: string;
}

export default function CustomDialog({
  isOpen,
  onClose,
  children,
  title,
  disableClickOutside = false,
  className = "",
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog
          static
          open={isOpen}
          onClose={() => {
            if (disableClickOutside) return;
            onClose();
          }}
          className={
            "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          }
        >
          <DialogBackdrop
            as={m.div}
            initial={"fadeOut"}
            animate={"fadeIn"}
            exit={"fadeOut"}
            variants={transitionVariants}
            className={"fixed inset-0 bg-slate-950/80 backdrop-blur-sm"}
            aria-hidden={"true"}
          />
          <DialogPanel
            as={m.div}
            initial={"growOut"}
            animate={"growIn"}
            exit={"growOut"}
            variants={transitionVariants}
            className={twMerge(
              "flex max-h-[90dvh] z-10 w-full flex-col gap-4 rounded-lg bg-slate-100 py-4 dark:bg-slate-800",
              className,
            )}
          >
            <div className={"flex items-center justify-between px-4"}>
              {typeof title === "string" && (
                <DialogTitle
                  as="h2"
                  className={"truncate text-xl font-semibold"}
                >
                  {title}
                </DialogTitle>
              )}
              {typeof title !== "string" && <DialogTitle>{title}</DialogTitle>}
              <Button
                aria-label={"Close dialog"}
                variant={"text"}
                size={"icon"}
                onClick={onClose}
                className={"ml-auto"}
              >
                <MdClose />
              </Button>
            </div>
            <div className={"flex h-full flex-col overflow-y-auto"}>
              {children}
            </div>
          </DialogPanel>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
