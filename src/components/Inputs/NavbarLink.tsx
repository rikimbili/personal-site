import { transitions } from "@styles/motion-definitions";
import { AnimatePresence, m } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import { type HTMLProps, type ReactNode, type Ref } from "react";

interface Props extends LinkProps, HTMLProps<HTMLAnchorElement> {
  href: string;
  label: string;
  isCurrentPage: boolean;
  as?: string;
  ref?: Ref<HTMLAnchorElement>;
  icon?: ReactNode;
  className?: string;
}

export default function NavbarLink({
  label,
  icon,
  className,
  isCurrentPage,
  ...rest
}: Props) {
  return (
    <Link
      className={`flex items-center rounded-lg text-base duration-100 hover:bg-indigo-950/10 dark:hover:bg-indigo-50/10 ${
        isCurrentPage ? "text-indigo-800 dark:text-indigo-200" : ""
      } ${className}`}
      {...rest}
    >
      <m.div
        className={"relative flex size-full items-center gap-1 px-3 py-1.5"}
      >
        <span className={"text-lg"}>{icon}</span>
        {label}
        <AnimatePresence initial={false}>
          {isCurrentPage && (
            <m.div
              layoutId={"active-nav-link"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transitions.springStiffer}
              className={
                "absolute inset-0 -z-10 size-full rounded-lg border border-indigo-800 dark:border-indigo-200"
              }
              style={{ originY: "0px" }}
            />
          )}
        </AnimatePresence>
      </m.div>
    </Link>
  );
}
