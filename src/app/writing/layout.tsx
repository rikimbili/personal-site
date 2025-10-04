import { type ReactNode } from "react";

export default function WritingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="my-20 flex grow flex-col gap-16 sm:my-32 sm:gap-28">
      {children}
    </div>
  );
}
