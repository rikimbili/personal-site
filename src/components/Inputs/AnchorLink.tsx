import Link, { type LinkProps } from "next/link";
import { FaHashtag } from "react-icons/fa";

interface Props extends LinkProps {
  className?: string;
}

export default function AnchorLink({ className = "", ...rest }: Props) {
  return (
    <Link
      className={`inline-block cursor-pointer text-3xl text-indigo-900/70 transition duration-150 ease-out 
      hover:text-indigo-900 active:scale-[96%] active:duration-75 dark:text-indigo-200/70 dark:hover:text-indigo-200 sm:text-4xl ${className}`}
      {...rest}
    >
      <FaHashtag />
    </Link>
  );
}
