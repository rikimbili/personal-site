import { motion, MotionProps } from "framer-motion";
import { ReactNode } from "react";

interface Props extends MotionProps {
  children: ReactNode;
}

export default function Button({ children, ...rest }: Props) {
  return (
    <motion.button
      className={
        "flex items-center gap-2 rounded-md px-3 py-1 text-indigo-900 transition duration-100 ease-out hover:bg-slate-200 active:duration-75 dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-slate-600"
      }
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
