import { motion } from "framer-motion";
import Image from "next/future/image";

const wavingHandVariants = {
  wave: {
    rotateZ: [0, 20, -20, 20, -20, 0],
    transition: {
      duration: 1.2,
      delay: 2,
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
    <section
      className={
        "flex select-none items-center justify-center sm:h-[22rem] md:h-[32rem] lg:h-[48rem]"
      }
    >
      <div className={"relative -z-10 hidden h-full w-4/5 sm:block"}>
        {/* TODO: Add sizes prop -> https://nextjs.org/docs/api-reference/next/future/image#sizes */}
        <Image
          src={"/../public/images/hero_photo.png"}
          alt={"Hero Photo"}
          className={"object-contain"}
          fill
          priority
        />
      </div>
      <div className={"text-lg sm:w-full sm:text-xl md:w-10/12 lg:text-2xl"}>
        <h2
          className={
            "mb-8 text-center text-4xl sm:mb-10 sm:text-5xl lg:mb-14 lg:text-6xl"
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
        <p className={"text-justify sm:text-center"}>
          My name is <b>Raciel</b> Antela Pardo. I specialize in building
          responsive web and mobile apps, while using modern development
          practices.
        </p>
      </div>
    </section>
  );
}
