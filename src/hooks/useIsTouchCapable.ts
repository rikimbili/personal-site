import { useEffect, useState } from "react";

export default function useIsTouchCapable() {
  const [isTouchCapable, setIsTouchCapable] = useState(false);

  useEffect(() => {
    setIsTouchCapable("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return isTouchCapable;
}
