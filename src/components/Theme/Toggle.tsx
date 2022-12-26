import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { transitions } from "../../styles/motion-definitions";
import IconButton from "../Inputs/IconButton";

const variants = {
  initial: { scale: 0, rotate: 90 },
  animate: { scale: 1, rotate: 0 },
  whileTap: { scale: 0.95, rotate: 15 },
};

export default function Toggle({ className }: { className?: string }) {
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
          <motion.div
            key={"light"}
            initial={"initial"}
            animate={"animate"}
            exit={"initial"}
            whileTap={"whileTap"}
            variants={variants}
            transition={transitions.spring}
          >
            <MdDarkMode />
          </motion.div>
        ) : (
          <motion.div
            key={"dark"}
            initial={"initial"}
            animate={"animate"}
            exit={"initial"}
            whileTap={"whileTap"}
            variants={variants}
            transition={transitions.spring}
          >
            <MdLightMode />
          </motion.div>
        )}
      </AnimatePresence>
    </IconButton>
  );
}
