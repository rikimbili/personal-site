import { spawnVariants } from "@styles/motion-definitions";
import { motion } from "framer-motion";
import { type ForwardedRef, forwardRef, type ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  fadeInDelay?: number;
  id: string;
}

const SectionWrapper = forwardRef(
  (
    { id, children, fadeInDelay = 0, className = "" }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <motion.section
        ref={ref}
        id={id}
        initial={"initial"}
        whileInView={"visible"}
        viewport={{
          once: true,
        }}
        variants={spawnVariants}
        className={className}
        custom={fadeInDelay}
      >
        {children}
      </motion.section>
    );
  }
);
SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
