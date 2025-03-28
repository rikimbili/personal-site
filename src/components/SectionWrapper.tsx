"use client";

import { spawnVariants } from "@styles/motion-definitions";
import { m } from "framer-motion";
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
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <m.section
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
      </m.section>
    );
  },
);
SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
