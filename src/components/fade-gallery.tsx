"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Small auto-cycling slideshow that cross-fades through an array of images,
 * matching the live showcase's per-project Elementor sliders. All slides are
 * stacked absolutely and faded via opacity; the cycle timer is skipped when
 * the visitor prefers reduced motion (the first image stays put).
 */
export function FadeGallery({
  images,
  alt,
  interval = 3000,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className = "",
}: {
  images: string[];
  alt: string;
  /** Milliseconds each slide is shown before cross-fading. */
  interval?: number;
  sizes?: string;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    const timer = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      interval,
    );
    return () => window.clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={false}
          aria-hidden={i !== index}
          className={`object-cover transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
