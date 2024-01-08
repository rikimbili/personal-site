import Link, { type LinkProps } from "next/link";
import { type ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
  target?: string;
}

export default function CustomLink({
  children,
  className = "",
  target = "_blank",
  ...rest
}: Props) {
  return (
    <Link
      target={target}
      {...rest}
      className={`transition duration-100 ease-out hover:text-indigo-500 dark:hover:text-indigo-400 ${className}`}
    >
      {children}
    </Link>
  );
}
