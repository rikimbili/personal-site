import CircularIndeterminate from "@components/Feedback/CircularIndeterminate";
import { transitions } from "@styles/motion-definitions";
import { cva, type VariantProps } from "class-variance-authority";
import { AnimatePresence, m } from "framer-motion";
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";

const buttonStyles = cva(
  "flex select-none items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold transition duration-100 ease-out active:scale-[97%] active:duration-75",
  {
    variants: {
      variant: {
        filled:
          "bg-slate-300 text-slate-950 hover:bg-indigo-700 hover:text-slate-50 dark:bg-slate-700 dark:text-slate-50 dark:hover:bg-indigo-200 dark:hover:text-slate-950",
        text: "text-slate-950 hover:bg-slate-300 dark:text-slate-50 dark:hover:bg-slate-700",
        outlined:
          "border border-slate-300 text-slate-950 hover:bg-slate-300 dark:border-slate-600 dark:text-slate-50 dark:hover:bg-slate-600",
      },
      disabled: {
        true: "cursor-not-allowed active:!scale-100",
      },
    },
    compoundVariants: [
      {
        variant: ["filled"],
        disabled: true,
        class:
          "!bg-slate-800/40 text-slate-50 dark:!bg-slate-200/40 dark:text-slate-950",
      },
      {
        variant: ["text"],
        disabled: true,
        class:
          "text-slate-950/40 hover:bg-transparent dark:text-slate-50/40 dark:hover:bg-transparent",
      },
      {
        variant: ["outlined"],
        disabled: true,
        class:
          "border-slate-300/40 text-slate-950/40 hover:bg-transparent dark:border-slate-600/40 dark:text-slate-50/40 dark:hover:bg-transparent",
      },
    ],
    defaultVariants: {
      variant: "filled",
    },
  },
);

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: ReactNode;
}

export default forwardRef<HTMLButtonElement, Props>(function Button(
  { disabled, loading, variant, className = "", children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={buttonStyles({ disabled, variant }) + " " + className}
      disabled={disabled}
      type="button"
      {...rest}
    >
      <AnimatePresence initial={false}>
        {loading && (
          <m.div
            initial={{ opacity: 0, marginRight: "-1.5rem" }}
            animate={{
              marginRight: 0,
              opacity: 1,
            }}
            exit={{ opacity: 0, marginRight: "-1.5rem" }}
            transition={transitions.springStiff}
          >
            <CircularIndeterminate className={"size-4"} />
          </m.div>
        )}
      </AnimatePresence>
      {children}
    </button>
  );
});
