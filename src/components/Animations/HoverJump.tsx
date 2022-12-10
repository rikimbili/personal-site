import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  repeat?: number;
  children: ReactNode;
}
export default function HoverJump({ repeat = Infinity, children }: Props) {
  return (
    <motion.div
      whileHover={{
        y: [0, -3, 0, -3, 0],
        transition: {
          repeat: repeat,
          repeatDelay: 0.8,
          duration: 0.5,
        },
      }}
      whileTap={{
        scale: 0.96,
        y: 0,
        transition: {
          duration: 0.075,
        },
      }}
    >
      {children}
    </motion.div>
  );
}
