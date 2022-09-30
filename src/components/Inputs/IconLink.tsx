import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props extends HTMLMotionProps<"a"> {
  children: ReactNode;
  target?: string;
}

export default function IconLink({
  children,
  target = "_blank",
  ...rest
}: Props) {
  return (
    <motion.a
      className={
        "cursor-pointer text-3xl transition duration-100 ease-out active:duration-75 [&>*]:fill-slate-50 [&>*]:transition [&>*]:duration-100 [&>*]:ease-out [&>*]:hover:fill-slate-200 [&>*]:active:duration-75 " +
        rest.className
      }
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      target={target}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
