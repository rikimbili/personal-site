import { motion } from "framer-motion";
import Image from "next/future/image";
import { MdOpenInNew } from "react-icons/md";

import InlineLink from "./Inputs/InlineLink";
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
        "flex flex-col-reverse items-center gap-8 text-justify text-lg sm:w-full sm:flex-row sm:text-xl md:gap-16 lg:text-2xl"
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
          working as a Software Engineer Intern at{" "}
          <InlineLink href={"https://careerfairplus.com"}>
            Career Fair Plus
            <MdOpenInNew />
          </InlineLink>
          . Expecting to get my Bachelor&apos;s in Computer Science at the
          University of Central Florida by May, 2024.
        </p>
      </div>
      <motion.div
        drag
        dragSnapToOrigin
        whileHover={{ cursor: "grab" }}
        whileDrag={{ scale: 1.1, cursor: "grabbing", zIndex: 1 }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 25 }}
        className={
          "relative h-32 w-32 shrink-0 overflow-hidden rounded-full bg-slate-400/70 shadow-xl outline outline-4 outline-offset-4 outline-slate-400/70 backdrop-blur-sm dark:bg-slate-600/70 dark:outline-slate-600/70 md:h-36 md:w-36 lg:h-40 lg:w-40"
        }
      >
        <Image
          src={"/images/headshot.png"}
          alt={"Headshot Photo"}
          className={"select-none object-cover"}
          fill
          priority
          draggable={false}
          sizes="(max-width: 1024px) 30vw,
                     (max-width: 1400px) 20vw,
                     15vw"
        />
      </motion.div>
    </SectionWrapper>
  );
}

// export default function Hero() {
//   return (
//     <SectionWrapper
//       id="hero"
//       className={
//         "flex items-center justify-center sm:h-[22rem] md:h-[32rem] lg:h-[48rem]"
//       }
//     >
//       <div className={"relative -z-10 hidden h-full w-2/5 sm:block"}>
//         <Image
//           src={"/images/hero_photo.png"}
//           alt={"Hero Photo"}
//           className={"select-none object-contain"}
//           fill
//           priority
//           draggable={false}
//           sizes="(max-width: 1024px) 40vw,
//               (max-width: 1400px) 33vw,
//               25vw"
//         />
//       </div>
//       <div className={"text-lg sm:w-full sm:text-xl md:w-10/12 lg:text-2xl"}>
//         <h2
//           className={
//             "mb-8 select-none text-center text-4xl sm:mb-10 sm:text-5xl lg:mb-14 lg:text-6xl"
//           }
//         >
//           Hey there{" "}
//           <motion.span
//             className={"inline-block cursor-grab"}
//             variants={wavingHandVariants}
//             whileHover={"waving"}
//             animate={"wave"}
//           >
//             👋
//           </motion.span>
//         </h2>
//         <p className={"text-justify sm:text-center"}>
//           My name is <b>Raciel</b> Antela Pardo. I specialize in building
//           responsive web and mobile apps, while using modern development
//           practices.
//         </p>
//       </div>
//     </SectionWrapper>
//   );
// }
