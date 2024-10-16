"use client";

export default function Footer() {
  return (
    <footer
      className={`z-20 mt-auto flex w-full flex-col-reverse items-center justify-between gap-4 self-center rounded-t-2xl border-x border-t border-slate-300
    bg-slate-200/90 p-4 backdrop-blur-md dark:border-slate-700 dark:bg-slate-800/80 sm:flex-row sm:gap-6 sm:p-6`}
    >
      <span className={"w-fit select-none text-nowrap"}>
        &copy; 2022-{new Date().getFullYear()} Raciel Antela Pardo
      </span>
    </footer>
  );
}
