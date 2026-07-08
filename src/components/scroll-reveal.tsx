"use client";

import { useEffect } from "react";

/**
 * Site-wide scroll entrance animations, mirroring the live site's Elementor
 * fade-in-up on section entry. Mounted once in the root layout: tags <html>
 * with `js-reveal` (so content never hides without JS), observes every
 * top-level <section>, and reveals it when it enters the viewport.
 * CSS lives in globals.css; disabled under prefers-reduced-motion.
 */
export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    document.documentElement.classList.add("js-reveal");

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );

    const observeAll = () => {
      document.querySelectorAll("main section:not(.revealed)").forEach((s) => io.observe(s));
    };
    observeAll();

    // Re-observe after client-side navigations (App Router swaps <main> content).
    const mo = new MutationObserver(observeAll);
    const main = document.querySelector("main");
    if (main) mo.observe(main, { childList: true, subtree: false });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
