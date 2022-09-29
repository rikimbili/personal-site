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
        "flex select-none items-center sm:h-[22rem] md:h-[32rem] lg:h-[48rem]"
      }
    >
      <div className={"relative -z-10 hidden h-full w-4/5 sm:block"}>
        <Image
          src={"/../public/images/hero_photo.png"}
          alt={"Hero Photo"}
          className={"object-contain"}
          fill
          priority
        />
      </div>
      <div className={"text-center text-lg sm:text-xl lg:text-2xl"}>
        <h2
          className={"mb-6 text-4xl sm:mb-8 sm:text-5xl lg:mb-12 lg:text-6xl"}
        >
          Hey there{" "}
          <motion.span
            className={"inline-block cursor-grab"}
            whileHover={"waving"}
            variants={wavingHandVariants}
            animate={"wave"}
          >
            👋
          </motion.span>
        </h2>
        <p>
          My name is <b>Raciel</b> Antela Pardo.
        </p>
        <p>
          I'm a software developer interested in building responsive and
          approachable web and mobile applications
        </p>
      </div>
    </section>
  );
}
