import { HTMLProps, ReactNode } from "react";

interface Props extends HTMLProps<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
  rel?: string;
  target?: string;
}

export default function InlineLink({
  children,
  className = "",
  target = "_blank",
  rel = "noreferrer",
  ...rest
}: Props) {
  return (
    <a
      target={target}
      rel={rel}
      className={
        "inline-flex items-center gap-0.5 font-bold text-indigo-900 underline decoration-transparent transition duration-150 ease-in-out hover:decoration-indigo-900 dark:text-indigo-100 dark:hover:decoration-indigo-100 " +
        className
      }
      {...rest}
    >
      {children}
    </a>
  );
}
