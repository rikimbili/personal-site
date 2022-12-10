import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface Props extends LinkProps {
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
    <Link
      className={`cursor-pointer transition duration-100 ease-out hover:text-slate-600 active:scale-[96%] active:duration-75
        dark:hover:text-slate-300 [&>svg]:text-3xl [&>*]:fill-slate-800 [&>*]:transition [&>*]:duration-100 [&>*]:ease-out 
        [&>*]:hover:fill-slate-600 [&>*]:active:duration-75 dark:[&>*]:fill-slate-50 dark:[&>*]:hover:fill-slate-300 
        ${className}`}
      target={target}
      {...rest}
    >
      {children}
    </Link>
  );
}
