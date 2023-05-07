import {
  autoUpdate,
  flip,
  offset,
  type Placement,
  shift,
  useFloating,
} from "@floating-ui/react-dom";
import { Popover } from "@headlessui/react";
import useIsTouchCapable from "@hooks/useIsTouchCapable";
import { transitionVariants } from "@styles/motion-definitions";
import { AnimatePresence, m } from "framer-motion";
import { Fragment, type ReactNode, useState } from "react";

interface Props {
  trigger: ReactNode;
  popoverPlacement?: Placement;
  openOnHover?: boolean;
  className?: string;
  children(props: { open: boolean; close: () => void }): ReactNode;
}

export default function CustomPopover({
  trigger,
  popoverPlacement = "bottom",
  openOnHover = false,
  className = "",
  children,
}: Props) {
  //#region Hooks

  const isTouchCapable = useIsTouchCapable();

  const { x, y, refs, strategy } = useFloating<HTMLDivElement>({
    strategy: "absolute",
    placement: popoverPlacement,
    middleware: [offset(12), shift(), flip()],
    whileElementsMounted: autoUpdate,
  });

  const [panelTimeout, setPanelTimeout] = useState<NodeJS.Timeout | null>(null);

  //#endregion

  //#region Handlers

  const handleHoverPanelOpen = (open: boolean) => {
    if (!openOnHover) return;
    if (panelTimeout) clearTimeout(panelTimeout);

    // Only click if the device is not touch capable, prevents infinite state loop
    if (!open && !isTouchCapable) {
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
    <Popover className={`group relative flex ${className}`}>
      {({ open, close }) => (
        <>
          <Popover.Button as={Fragment}>
            <div
              ref={refs.setReference}
              onMouseEnter={() => handleHoverPanelOpen(open)}
              onMouseLeave={() => handleHoverPanelClose(close)}
              className={"flex items-center gap-1"}
            >
              {trigger}
            </div>
          </Popover.Button>
          <AnimatePresence>
            {open && (
              <Popover.Panel static>
                <m.div
                  ref={refs.setFloating}
                  onMouseEnter={() => handleHoverPanelOpen(open)}
                  onMouseLeave={() => handleHoverPanelClose(close)}
                  initial={"growOut"}
                  animate={"growIn"}
                  exit={"growOut"}
                  variants={transitionVariants}
                  custom={0.2}
                  style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                  }}
                  className={`z-50 w-max max-w-[90vw] rounded-lg bg-slate-200/90 p-2 text-base 
                  font-medium text-slate-950 shadow-lg ring-1 ring-slate-300/80 backdrop-blur-lg 
                  transition-colors duration-200 dark:bg-slate-800/90 dark:text-slate-50 dark:ring-slate-700/80`}
                >
                  {children({ open, close })}
                </m.div>
              </Popover.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Popover>
  );
}
