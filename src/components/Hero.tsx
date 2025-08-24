"use client";

import CustomImage from "@components/DataDisplay/CustomImage";
import { m } from "framer-motion";
import { type ForwardedRef, forwardRef } from "react";

import SectionWrapper from "./SectionWrapper";

const wavingHandVariants = {
  wave: {
    rotateZ: [0, 20, -20, 20, -20, 0],
    transition: {
      duration: 1.2,
      delay: 1,
    },
  },
  hover: {
    rotateZ: [0, 20, -20, 0],
    transition: {
      duration: 0.6,
    },
  },
};

const Hero = forwardRef((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <SectionWrapper
      ref={ref}
      id={"hero"}
      fadeInDelay={0.05}
      className={
        "z-10 flex flex-col-reverse items-center gap-8 text-pretty sm:w-full sm:flex-row sm:gap-16"
      }
    >
      <div className={"flex flex-col gap-4 sm:gap-6"}>
        <h2 className={"group w-fit select-none text-2xl sm:text-3xl"}>
          Hey there{" "}
          <m.span
            className={"inline-block cursor-grab"}
            variants={wavingHandVariants}
            whileHover={"hover"}
            animate={"wave"}
          >
            👋
          </m.span>
        </h2>
        <p>
          My name is Raciel. I&apos;m a software engineer who enjoys building
          practical and efficient digital solutions. My passion lies in
          full-stack development, from designing user-friendly interfaces to
          architecting scalable cloud infrastructure. I love the challenge of
          turning complex problems into simple, useful tools, a drive that led me
          to start Docures.
        </p>
      </div>
      <m.div
        drag
        dragSnapToOrigin
        whileHover={{ cursor: "grab" }}
        whileDrag={{
          scale: 1.1,
          cursor: "grabbing",
        }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
      >
        <CustomImage
          src={"/images/headshot.png"}
          alt={"Headshot Photo"}
          fill
          priority
          draggable={false}
          sizes="(max-width: 1024px) 30vw,
                     (max-width: 1400px) 20vw,
                     15vw"
          containerClassName={`relative hidden sm:block shrink-0 overflow-hidden rounded-full bg-slate-300/70 outline outline-4 
        outline-offset-4 outline-slate-300/70 backdrop-blur-sm dark:bg-slate-700/70 dark:outline-slate-700/70 size-36`}
          className={"select-none object-contain"}
        />
      </m.div>
    </SectionWrapper>
  );
});
Hero.displayName = "Hero";
export default Hero;
