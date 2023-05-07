import { useEffect, useState } from "react";
import { useScreen } from "usehooks-ts";

export default function useIsTouchCapable() {
  const [isTouchCapable, setIsTouchCapable] = useState(false);
  const screen = useScreen();

  useEffect(() => {
    setIsTouchCapable("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, [screen]);

  return isTouchCapable;
}
