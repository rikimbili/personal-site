import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <motion.button
      className="flex items-center gap-2 rounded-md px-3 py-1 dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-slate-600"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      {children}
    </motion.button>
  );
}
