import CircularIndeterminate from "@components/Feedback/CircularIndeterminate";
import { transitions } from "@styles/motion-definitions";
import { cva, type VariantProps } from "class-variance-authority";
import { AnimatePresence, m } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(
  "flex select-none items-center justify-center gap-2 rounded-md font-semibold transition duration-200 " +
    "ease-out active:duration-75",
  {
    variants: {
      variant: {
        filled:
          "bg-indigo-800 text-slate-50 hover:bg-indigo-900 dark:bg-indigo-200 dark:text-slate-950 dark:hover:bg-indigo-100 " +
          "ui-active:bg-indigo-900 dark:ui-active:bg-indigo-100",
        outlined:
          "border border-slate-700/50 text-slate-950 hover:bg-slate-300 ui-active:bg-slate-300 dark:border-slate-300/50 " +
          "dark:text-slate-50 dark:hover:bg-slate-700 dark:ui-active:bg-slate-700",
        text:
          "text-slate-950 hover:bg-slate-300 ui-active:bg-slate-300 dark:text-slate-50 dark:hover:bg-slate-700 " +
          "dark:ui-active:bg-slate-700",
        destructive:
          "bg-red-700 text-slate-50 hover:bg-red-800 dark:bg-red-300 dark:text-slate-950 dark:hover:bg-red-200 " +
          "ui-active:bg-red-800 dark:ui-active:bg-red-200",
      },
      disabled: {
        true: "cursor-not-allowed",
      },
      size: {
        default: "h-10 px-4 py-2 text-base [&>svg]:size-5",
        sm: "h-9 px-3 py-1.5 text-sm [&>svg]:size-5",
        lg: "h-12 px-6 py-3 text-xl [&>svg]:size-6",
        icon: "size-10 text-base *:size-7",
        full: "size-full text-base",
      },
    },
    defaultVariants: {
      variant: "filled",
      disabled: false,
      size: "default",
    },
    compoundVariants: [
      {
        variant: ["filled"],
        disabled: true,
        class:
          "!bg-indigo-800/40 text-slate-50 dark:!bg-indigo-200/40 dark:text-slate-950",
      },
      {
        variant: ["text"],
        disabled: true,
        class:
          "text-slate-950/40 hover:!bg-transparent dark:text-slate-50/40 dark:hover:!bg-transparent",
      },
      {
        variant: ["destructive"],
        disabled: true,
        class:
          "!bg-red-800/40 text-slate-50 dark:!bg-red-200/40 dark:text-slate-950",
      },
      {
        variant: ["outlined"],
        disabled: true,
        class:
          "border-slate-300 text-slate-950/40 hover:bg-transparent dark:border-slate-700 dark:text-slate-50/40 dark:hover:bg-transparent",
      },
    ],
  },
);

interface BaseProps extends VariantProps<typeof buttonStyles> {
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    disabled?: boolean;
    loading?: boolean;
  };
type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    disabled: never;
    loading: never;
    target?: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant, size, className = "", children, loading = false, ...rest },
    ref,
  ) {
    if ("href" in rest) {
      return (
        <Link
          ref={ref}
          className={twMerge(
            buttonStyles({ disabled: rest.disabled, variant, size }),
            className,
          )}
          {...rest}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={twMerge(
          buttonStyles({ disabled: rest.disabled, variant, size }),
          className,
        )}
        disabled={rest.disabled}
        type="button"
        {...rest}
      >
        <AnimatePresence initial={false}>
          {loading && (
            <m.div
              key={"loading"}
              initial={{ opacity: 0, marginRight: "-1.5rem" }}
              animate={{ marginRight: 0, opacity: 1 }}
              exit={{ opacity: 0, marginRight: "-1.5rem" }}
              transition={transitions.springDamp}
            >
              <CircularIndeterminate className={"size-4"} />
            </m.div>
          )}
        </AnimatePresence>
        {children}
      </button>
    );
  },
);
