import { type HTMLMotionProps, motion } from "framer-motion";
import { type ReactNode } from "react";

import { transitionVariants } from "../../styles/motion-definitions";

interface Props extends HTMLMotionProps<"div"> {
  children: ReactNode;
}
export default function Fade({ children, ...rest }: Props) {
  return (
    <motion.div
      initial={"fadeOut"}
      animate={"fadeIn"}
      exit={"fadeOut"}
      variants={transitionVariants}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
