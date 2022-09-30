import { HTMLMotionProps, motion } from "framer-motion";
import { FaHashtag } from "react-icons/fa";

interface Props extends HTMLMotionProps<"a"> {
  className?: string;
}

export default function AnchorLink({ className, ...rest }: Props) {
  return (
    <motion.a
      className={
        "inline-block cursor-pointer transition duration-150 ease-out active:duration-75 text-2xl sm:text-3xl lg:text-4xl " +
        className
      }
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      {...rest}
    >
      <FaHashtag
        className={
          "fill-indigo-300 transition duration-100 ease-out hover:fill-indigo-100 active:duration-75"
        }
      />
    </motion.a>
  );
}
