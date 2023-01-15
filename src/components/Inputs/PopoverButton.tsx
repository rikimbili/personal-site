import {
  type Placement,
  flip,
  offset,
  shift,
  useFloating,
} from "@floating-ui/react-dom";
import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Fragment, ReactNode, useState } from "react";

import useIsTouchCapable from "../../hooks/useIsTouchCapable";
import { transitionVariants } from "../../styles/motion-definitions";

interface Props {
  button: JSX.Element;
  popoverPlacement?: Placement;
  openOnHover?: boolean;
  className?: string;
  children(props: { open: boolean; close: () => void }): ReactNode;
}

export default function PopoverButton({
  button,
  popoverPlacement = "bottom",
  openOnHover = false,
  className = "",
  children,
}: Props) {
  //#region Hooks

  const isTouchCapable = useIsTouchCapable();

  const { x, y, refs, floating, strategy } = useFloating<HTMLDivElement>({
    strategy: "absolute",
    placement: popoverPlacement,
    middleware: [offset(16), shift(), flip()],
  });

  const [panelTimeout, setPanelTimeout] = useState<NodeJS.Timeout | null>(null);

  //#endregion

  //#region Handlers

  const handleHoverPanelOpen = (open: boolean) => {
    if (!openOnHover) return;
    if (panelTimeout) clearTimeout(panelTimeout);
    if (!open && !isTouchCapable) {
      // Only click if the device is not touch capable, prevents infinite state loop
      refs.reference.current?.click();
    }
  };

  const handleHoverPanelClose = (close: () => void) => {
    if (!openOnHover) return;
    if (panelTimeout) clearTimeout(panelTimeout);
    setPanelTimeout(
      setTimeout(() => {
        close();
      }, 300)
    );
  };

  //#endregion

  return (
    <Popover className={`group relative select-none ${className}`}>
      {({ open, close }) => (
        <>
          <Popover.Button as={Fragment}>
            <div
              ref={refs.reference}
              onMouseEnter={() => handleHoverPanelOpen(open)}
              onMouseLeave={() => handleHoverPanelClose(close)}
            >
              {button}
            </div>
          </Popover.Button>
          <AnimatePresence>
            {open && (
              <Popover.Panel static>
                <motion.div
                  ref={floating}
                  onMouseEnter={() => handleHoverPanelOpen(open)}
                  onMouseLeave={() => handleHoverPanelClose(close)}
                  initial={"growOut"}
                  animate={"growIn"}
                  exit={"growOut"}
                  variants={transitionVariants}
                  style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                  }}
                  className={
                    "z-50 w-max max-w-[90vw] rounded-xl bg-slate-300/90 p-4 shadow-md backdrop-blur-md transition-colors duration-200 dark:bg-slate-700/90"
                  }
                >
                  {children({ open, close })}
                </motion.div>
              </Popover.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
}
