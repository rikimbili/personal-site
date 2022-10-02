import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props extends HTMLMotionProps<"a"> {
  children: ReactNode;
  className?: string;
  target?: string;
}

export default function ButtonLink({
  children,
  className = "",
  target = "_blank",
  ...rest
}: Props) {
  return (
    <motion.a
      className={
        "cursor-pointer transition duration-100 ease-out hover:text-slate-600 active:duration-75 dark:hover:text-slate-300 " +
        "[&>svg]:text-3xl [&>*]:fill-slate-800 [&>*]:transition [&>*]:duration-100 [&>*]:ease-out [&>*]:hover:fill-slate-600 " +
        "[&>*]:active:duration-75 dark:[&>*]:fill-slate-50 dark:[&>*]:hover:fill-slate-300 " +
        className
      }
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      target={target}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
