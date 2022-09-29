import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <motion.button
      className={
        "flex items-center gap-2 rounded-md px-3 py-1 transition duration-100 ease-out active:duration-75 dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-slate-600"
      }
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
