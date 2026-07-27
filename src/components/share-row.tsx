"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-config";

/**
 * Per-post social share row matching the live blog index: Twitter/X,
 * Facebook, email (mailto) links plus a copy-link button.
 */
export function ShareRow({ path, title }: { path: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteConfig.url}${path}`;
  const enc = encodeURIComponent;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — ignore
    }
  };

  const itemClass =
    "flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-brand hover:text-brand";

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={itemClass}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
        </svg>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className={itemClass}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
        </svg>
      </a>
      <a
        href={`mailto:?subject=${enc(title)}&body=${enc(url)}`}
        aria-label="Share by email"
        className={itemClass}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 7L2 7" />
        </svg>
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Link copied" : "Copy link"}
        className={itemClass}
      >
        {copied ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : (
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        )}
      </button>
      {copied && <span className="text-xs font-medium text-brand">Copied!</span>}
    </div>
  );
}
