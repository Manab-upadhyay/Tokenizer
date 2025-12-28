import { useEffect, useRef, useState } from "react";

export function useFlashChange<T extends number | string>(value: T) {
  const prevRef = useRef<T>(value);
  const [flash, setFlash] = useState<"up" | "down" | null>(null);

  useEffect(() => {
    if (prevRef.current === value) return;

    const prev = Number(prevRef.current);
    const curr = Number(value);

    if (!isNaN(prev) && !isNaN(curr)) {
      if (curr > prev) setFlash("up");
      else if (curr < prev) setFlash("down");
    }

    prevRef.current = value;

    const t = setTimeout(() => setFlash(null), 400);
    return () => clearTimeout(t);
  }, [value]);

  return flash;
}
