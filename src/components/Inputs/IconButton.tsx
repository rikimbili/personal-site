import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function IconButton({
  children,
  className = "",
  ...rest
}: Props) {
  return (
    <button
      className={`flex size-10 cursor-pointer items-center justify-center transition duration-100 ease-out *:size-7 hover:text-indigo-500 focus:outline-none focus-visible:outline-none active:scale-[96%]
        active:duration-75 dark:hover:text-indigo-400 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
