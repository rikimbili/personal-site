import { type HTMLProps } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  className?: string;
}

export default function Blob({ className = "", ...rest }: Props) {
  return (
    <div
      className={`absolute rounded-full bg-indigo-500 opacity-80 blur-[100px] ${className}`}
      {...rest}
    />
  );
}
