import { type HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  className?: string;
}

export default function Blob({ className = "", ...rest }: Props) {
  return (
    <div
      className={`absolute rounded-full bg-indigo-500 opacity-0 blur-0 transition duration-200 ease-in-out dark:opacity-80
      dark:blur-[100px] dark:duration-1000 ${className}`}
      {...rest}
    />
  );
}
