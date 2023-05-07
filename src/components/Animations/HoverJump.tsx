import { m } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function HoverJump({ children }: Props) {
  return (
    <m.div
      whileHover={{
        y: [0, -4, 0],
        transition: {
          duration: 0.3,
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
    </m.div>
  );
}
