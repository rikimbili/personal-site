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
      fadeInDelay={0.04}
      className={
        "z-10 grid min-h-[calc(100vh-12rem)] scroll-mt-20 items-center gap-10 overflow-visible text-pretty sm:w-full lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16"
      }
    >
      <div className={"flex max-w-3xl flex-col gap-5 sm:gap-7"}>
        <h2
          className={
            "group w-fit select-none text-4xl font-semibold leading-tight tracking-normal sm:text-5xl lg:text-6xl"
          }
        >
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
        <m.div
          aria-hidden
          className={
            "h-1.5 w-28 rounded-full bg-[linear-gradient(90deg,#4f46e5,#14b8a6)] dark:bg-[linear-gradient(90deg,#a5b4fc,#5eead4)]"
          }
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.55, ease: "easeOut" }}
        />
        <p
          className={
            "max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-200 sm:text-xl sm:leading-9"
          }
        >
          My name is Raciel. I&apos;m a software engineer who enjoys building
          practical and efficient digital solutions. My passion lies in
          full-stack development, from designing user-friendly interfaces to
          architecting scalable cloud infrastructure. I love the challenge of
          turning complex problems into simple, useful tools, a drive that led
          me to start Docures.
        </p>
      </div>
      <m.div
        className={
          "relative mx-auto hidden aspect-square w-full max-w-80 items-center justify-center overflow-visible sm:flex lg:max-w-none"
        }
        drag
        dragSnapToOrigin
        whileHover={{ cursor: "grab" }}
        whileDrag={{
          scale: 1.1,
          cursor: "grabbing",
        }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
      >
        <m.div
          aria-hidden
          className={
            "absolute inset-8 rotate-6 rounded-[2rem] border border-indigo-300/60 bg-indigo-200/20 shadow-2xl shadow-indigo-900/10 dark:border-indigo-300/20 dark:bg-indigo-300/10"
          }
          animate={{ rotate: [6, 9, 6], y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <m.div
          aria-hidden
          className={
            "absolute inset-2 -rotate-3 rounded-[2rem] border border-teal-300/50 bg-teal-200/20 dark:border-teal-200/20 dark:bg-teal-200/10"
          }
          animate={{ rotate: [-3, -6, -3], y: [0, 8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <CustomImage
          src={"/images/headshot.png"}
          alt={"Headshot Photo"}
          fill
          priority
          draggable={false}
          sizes="(max-width: 1024px) 30vw,
                     (max-width: 1400px) 20vw,
                     15vw"
          containerClassName={`relative z-10 shrink-0 overflow-hidden rounded-[2rem] bg-slate-200/80 shadow-2xl shadow-slate-950/10 ring-1 
        ring-slate-950/10 backdrop-blur-sm dark:bg-slate-800/80 dark:shadow-indigo-950/30 dark:ring-slate-50/10 size-64 lg:size-80`}
          className={"select-none object-contain"}
        />
      </m.div>
    </SectionWrapper>
  );
});
Hero.displayName = "Hero";
export default Hero;
