"use client";

import Card from "@components/Surfaces/Card";
import { transitions } from "@styles/motion-definitions";
import { m, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({ children, className = "" }: Props) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x = useSpring(mouseX, transitions.springStiff);
  const y = useSpring(mouseY, transitions.springStiff);

  return (
    <Card
      className={`group relative ${className}`}
      onMouseMove={({ currentTarget, clientX, clientY }) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
      }}
    >
      <m.div
        className="pointer-events-none absolute -inset-px hidden rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${x}px ${y}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </Card>
  );
}
