"use client";

import { useState } from "react";

/**
 * A play button that opens the given video (Vimeo/YouTube embed URL) in a modal
 * lightbox. Used for the homepage "Virtual Tour" — the iframe only loads on click.
 */
export function VideoLightbox({
  embedUrl,
  label = "Play",
  className = "",
  children,
}: {
  embedUrl: string;
  label?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={label}
        className={className}
      >
        {children ?? label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close video"
            className="absolute right-5 top-5 text-white/80 hover:text-white"
            onClick={() => setOpen(false)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div
            className="aspect-video w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="h-full w-full"
              src={`${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1`}
              title={label}
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
