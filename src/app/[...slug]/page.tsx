"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useCountdown } from "usehooks-ts";

// Catch all invalid routes
export default function NotFound() {
  //#region Hooks

  const router = useRouter();
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: 5,
      intervalMs: 1000,
    });

  useEffect(() => {
    startCountdown();
  }, []);

  //#endregion

  if (count === 0) {
    setTimeout(() => {
      router.push("/");
    }, 1000);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className={"text-3xl"}>
        The page <strong>{window.location.pathname}</strong> does not exist.
      </h1>
      <h2 className={"mt-4 text-xl"}>
        {count > 0 ? (
          <>Redirecting back to home in {count} seconds...</>
        ) : (
          <>Redirecting back to home... </>
        )}
      </h2>
    </div>
  );
}
