import { Popover } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineInfo } from "react-icons/md";
import { SiGithub } from "react-icons/si";

interface Props {
  className?: string;
}

const panelVariants = {
  hidden: {
    opacity: 0,
    y: "-110%",
    x: "-50%",
    left: "50%",
  },
  visible: {
    opacity: 1,
    y: "-115%",
    x: "-50%",
    left: "50%",
  },
};

export default function WebsiteInfo({ className = "" }: Props) {
  //#region Hooks

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [panelTimeout, setPanelTimeout] = useState<NodeJS.Timeout | null>(null);

  //#endregion

  //#region Handlers

  const handlePanelOpen = () => {
    if (panelTimeout) clearTimeout(panelTimeout);
    setIsPanelOpen(true);
  };
  // Debounce the panel close to prevent it from closing immediately. If the mouse is moved back into the panel, the panel will stay open.
  const handlePanelClose = () => {
    if (panelTimeout) clearTimeout(panelTimeout);
    setPanelTimeout(
      setTimeout(() => {
        setIsPanelOpen(false);
      }, 300)
    );
  };

  //#endregion

  return (
    <Popover
      className={"relative block group " + className}
      onMouseLeave={handlePanelClose}
      onMouseEnter={handlePanelOpen}
    >
      <AnimatePresence>
        {isPanelOpen && (
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={panelVariants}
            className="absolute z-10 w-screen max-w-[18rem] rounded-xl p-4 text-base shadow-xl backdrop-blur-md dark:bg-slate-700/80 sm:max-w-[26rem] sm:text-lg md:max-w-[30rem]"
          >
            <Popover.Panel static>
              <div className={"flex-col text-center"}>
                <p className="">
                  Built with Next.js, Tailwind CSS, Framer Motion and
                  TypeScript.
                </p>
                <div className="my-2 mx-12 rounded-full border-t-2 border-slate-50/20 sm:mx-24" />
                <p className="">
                  The source code is available on{" "}
                  <a
                    href="https://github.com/Rikimbili/portfolio"
                    target="_blank"
                    rel="noreferrer"
                    className={"inline-flex items-center font-bold underline"}
                  >
                    GitHub <SiGithub />
                  </a>
                  .
                </p>
              </div>
            </Popover.Panel>
          </motion.div>
        )}
      </AnimatePresence>
      <Popover.Button
        className={
          "flex cursor-help items-center rounded-lg p-2 outline-none transition duration-100 ease-out dark:group-hover:bg-slate-600"
        }
        onMouseOver={handlePanelOpen}
        onClick={handlePanelOpen}
      >
        <MdOutlineInfo className={"inline-block text-2xl"} />
        <span className="ml-1">Website Info</span>
      </Popover.Button>
    </Popover>
  );
}
