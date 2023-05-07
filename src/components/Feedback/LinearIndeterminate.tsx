import { transitions, transitionVariants } from "@styles/motion-definitions";
import { m } from "framer-motion";

interface Props {
  loopDuration?: number;
  className?: string;
}

export default function LinearIndeterminate({
  loopDuration = 1,
  className = "",
}: Props) {
  return (
    <m.div
      key={"loading"}
      initial={"fadeOut"}
      animate={"fadeIn"}
      exit={"fadeOut"}
      variants={transitionVariants}
      transition={transitions.springStiff}
      className={`z-30 w-full overflow-x-hidden ${className}`}
    >
      <m.div
        animate={{ x: ["-120%", "240%"] }}
        transition={{
          duration: loopDuration,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        className={"h-1 w-1/2 rounded-full bg-slate-500"}
      />
      <span className={"sr-only"}>Loading...</span>
    </m.div>
  );
}
