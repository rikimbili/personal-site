import { ButtonHTMLAttributes } from "react";
import { FaHashtag } from "react-icons/fa";

import IconButton from "./IconButton";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  className?: string;
}

export default function AnchorLink({ id, className = "", ...rest }: Props) {
  return (
    <IconButton
      onClick={() => {
        void navigator.clipboard
          .writeText(`${location.origin}/#${id}`)
          .then(() => {
            // TODO: Implement a tooltip to show that the link was copied.
          });
      }}
      className={`inline-block cursor-pointer text-2xl text-indigo-900/70 transition duration-150 ease-out hover:text-indigo-900 
      active:scale-[96%] active:duration-75 dark:text-indigo-200/70 dark:hover:text-indigo-200 sm:text-3xl lg:text-4xl ${className}`}
      {...rest}
    >
      <FaHashtag />
    </IconButton>
  );
}
