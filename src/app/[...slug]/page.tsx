"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCountdown } from "usehooks-ts";

// Catch all invalid routes
export default function NotFound() {
  //#region Hooks

  const router = useRouter();
  const pathname = usePathname();
  const [count, { startCountdown }] = useCountdown({
    countStart: 5,
    intervalMs: 1000,
  });

  useEffect(() => {
    startCountdown();
  }, [startCountdown]);

  //#endregion

  if (count === 0) {
    void router.push("/");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className={"text-3xl"}>
        The page <strong>{pathname}</strong> does not exist :(
      </h1>
      <h2 className={"mt-4 text-xl"}>
        Redirecting back to home in {count} seconds...
      </h2>
    </div>
  );
}
