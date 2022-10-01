import { motion, useAnimationControls, useInView } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";

interface Props {
  className?: string;
  children: ReactNode;
  delay?: number;
  id: string;
}

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
    },
  }),
};

export default function SectionWrapper({
  id,
  children,
  delay = 0,
  className = "",
}: Props) {
  //#region Hooks

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-15%" });
  const sectionControl = useAnimationControls();

  // Add the anchor tag to the URL and animate the section when it comes into view.
  useEffect(() => {
    if (isInView) {
      sectionControl.start("visible");
    }
  }, [isInView, sectionControl]);

  //#endregion

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={"hidden"}
      animate={sectionControl}
      variants={sectionVariants}
      className={className}
      custom={delay}
    >
      {children}
    </motion.section>
  );
}
