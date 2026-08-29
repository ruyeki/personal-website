"use client";

import { useEffect, useState } from "react";

/**
 * Types `text` out one character at a time with a blinking caret, then stops.
 *
 * An invisible full-length copy reserves the final box, so the heading never
 * reflows while typing. Respects prefers-reduced-motion by rendering in full.
 */
export default function Typewriter({
  text,
  speed = 95,
  className,
}: {
  text: string;
  speed?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const done = count >= text.length;

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCount(text.length);
      return;
    }
    if (count >= text.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(id);
  }, [count, text.length, speed]);

  return (
    <span className={`relative inline-block ${className ?? ""}`} aria-label={text}>
      {/* Reserves the final size so nothing reflows as it types. */}
      <span aria-hidden="true" className="invisible">
        {text}
      </span>
      {/* Visible typed overlay. */}
      <span aria-hidden="true" className="absolute inset-0">
        {text.slice(0, count)}
        {!done && <span className="caret" />}
      </span>
    </span>
  );
}
