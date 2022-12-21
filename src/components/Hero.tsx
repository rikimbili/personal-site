"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionWrapper from "./SectionWrapper";

const wavingHandVariants = {
  wave: {
    rotateZ: [0, 20, -20, 20, -20, 0],
    transition: {
      duration: 1.2,
      delay: 1,
    },
  },
  waving: {
    rotateZ: [0, 20, -20, 0],
    transition: {
      duration: 0.6,
    },
  },
};

export default function Hero() {
  return (
    <SectionWrapper
      id={"hero"}
      fadeInDelay={0.05}
      className={
        "z-10 flex flex-col-reverse items-center gap-8 text-justify text-lg sm:w-full sm:flex-row sm:text-xl md:gap-16 lg:text-2xl"
      }
    >
      <div>
        <h2
          className={
            "group mb-4 w-fit select-none text-3xl sm:mb-8 sm:text-4xl lg:text-5xl"
          }
        >
          Hey there{" "}
          <motion.span
            className={"inline-block cursor-grab"}
            variants={wavingHandVariants}
            whileHover={"waving"}
            animate={"wave"}
          >
            👋
          </motion.span>
        </h2>
        <p>
          My name is <b>Raciel</b> Antela Pardo. I specialize in building
          responsive apps, while using modern development practices. Currently
          working as a Software Engineer Intern at Career Fair Plus. Expecting
          to get my Bachelor&apos;s in Computer Science at the University of
          Central Florida by May, 2024.
        </p>
      </div>
      <motion.div
        drag
        dragSnapToOrigin
        whileHover={{ cursor: "grab" }}
        whileDrag={{ scale: 1.1, cursor: "grabbing" }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
        className={`relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-slate-400/70 shadow-xl outline outline-4 
        outline-offset-4 outline-slate-400/70 backdrop-blur-sm dark:bg-slate-600/70 dark:outline-slate-600/70 md:h-36 md:w-36 lg:h-40 lg:w-40`}
      >
        <Image
          src={"/images/headshot.png"}
          alt={"Headshot Photo"}
          fill
          priority
          draggable={false}
          sizes="(max-width: 1024px) 30vw,
                     (max-width: 1400px) 20vw,
                     15vw"
          className={"select-none"}
        />
      </motion.div>
    </SectionWrapper>
  );
}
