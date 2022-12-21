import { motion, useAnimationControls, useInView } from "framer-motion";
import { ReactNode, RefObject, useEffect, useRef } from "react";

import { spawnVariants } from "../styles/motion-definitions";

interface Props {
  ref?: RefObject<HTMLDivElement>;
  className?: string;
  children: ReactNode;
  fadeInDelay?: number;
  id: string;
}

export default function SectionWrapper({
  id,
  children,
  fadeInDelay = 0,
  className = "",
}: Props) {
  //#region Hooks

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-5%" });
  const sectionControl = useAnimationControls();

  // Add the anchor tag to the URL and animate the section when it comes into view.
  useEffect(() => {
    if (isInView) {
      void sectionControl.start("visible");
    }
  }, [isInView, sectionControl]);

  //#endregion

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={"initial"}
      animate={sectionControl}
      variants={spawnVariants}
      className={className}
      custom={fadeInDelay}
    >
      {children}
    </motion.section>
  );
}
