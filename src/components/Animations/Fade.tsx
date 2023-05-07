import { transitionVariants } from "@styles/motion-definitions";
import { type HTMLMotionProps, m } from "framer-motion";
import { type ReactNode } from "react";

interface Props extends HTMLMotionProps<"div"> {
  children: ReactNode;
}
export default function Fade({ children, ...rest }: Props) {
  return (
    <m.div
      initial={"fadeOut"}
      animate={"fadeIn"}
      exit={"fadeOut"}
      variants={transitionVariants}
      {...rest}
    >
      {children}
    </m.div>
  );
}
