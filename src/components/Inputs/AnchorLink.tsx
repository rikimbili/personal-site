import { HTMLMotionProps, motion } from "framer-motion";
import { FaHashtag } from "react-icons/fa";

interface Props extends HTMLMotionProps<"a"> {
  className?: string;
}

export default function AnchorLink({ className = "", ...rest }: Props) {
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
          "text-indigo-900/70 transition duration-100 ease-out hover:text-indigo-900 active:duration-75 dark:text-indigo-200/70 dark:hover:text-indigo-200"
        }
      />
    </motion.a>
  );
}
