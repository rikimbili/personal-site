import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
  className?: string;
  target?: string;
}

export default function LinkIconButton({
  children,
  className = "",
  target = "_blank",
  ...rest
}: Props) {
  return (
    <Link
      className={`cursor-pointer transition duration-100 ease-out hover:text-indigo-600 active:scale-[96%] active:duration-75
        dark:hover:text-indigo-300 ${className}`}
      target={target}
      {...rest}
    >
      {children}
    </Link>
  );
}
