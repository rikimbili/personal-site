import { type HTMLAttributes, type ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

export default function Card({ className = "", children, ...rest }: Props) {
  return (
    <div
      className={`rounded-xl border border-slate-300 bg-slate-200 dark:border-slate-700 dark:bg-slate-800 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
