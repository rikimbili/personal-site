"use client";

import { transitions } from "@styles/motion-definitions";
import { AnimatePresence, m } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import IconButton from "./IconButton";

const variants = {
  initial: { scale: 0, rotate: 90 },
  animate: { scale: 1, rotate: 0 },
  whileTap: { scale: 0.95, rotate: 15 },
};

export default function ToggleButton({
  className = "",
}: {
  className?: string;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <IconButton
      onClick={() => {
        if (theme === "light") {
          return setTheme("dark");
        }
        return setTheme("light");
      }}
      className={`relative ${className}`}
    >
      <AnimatePresence mode={"popLayout"}>
        {theme === "light" ? (
          <m.div
            key={"light"}
            initial={"initial"}
            animate={"animate"}
            exit={"initial"}
            whileTap={"whileTap"}
            variants={variants}
            transition={transitions.spring}
          >
            <MdLightMode className={"size-full"} />
          </m.div>
        ) : (
          <m.div
            key={"dark"}
            initial={"initial"}
            animate={"animate"}
            exit={"initial"}
            whileTap={"whileTap"}
            variants={variants}
            transition={transitions.spring}
          >
            {/* Set color to amber */}
            <MdDarkMode className={"size-full"} />
          </m.div>
        )}
      </AnimatePresence>
    </IconButton>
  );
}
