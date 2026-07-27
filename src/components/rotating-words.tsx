"use client";

import { useEffect, useState } from "react";

/**
 * Cycles through words with a slide-down/fade transition, matching the live
 * site's animated "ONE TEAM. / ONE DREAM." headline rotator.
 */
export function RotatingWords({
  words,
  interval = 2600,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [i, setI] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % words.length);
        setVisible(true);
      }, 300);
    }, interval);
    return () => clearInterval(t);
  }, [words.length, interval]);

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
      } ${className}`}
    >
      {words[i]}
    </span>
  );
}
