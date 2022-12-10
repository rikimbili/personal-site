import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
}

export default function Button({ className = "", children, ...rest }: Props) {
  return (
    <button
      className={`flex select-none items-center gap-2 rounded-md bg-slate-300 px-3 py-1 text-slate-900 transition duration-100 
        ease-out hover:bg-slate-400 active:scale-[98%] active:duration-75 dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-slate-600 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
