"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Absolute-positioned cover background video for hero/section bands, matching
 * the live site's Elementor background videos. Supports:
 *  - self-hosted mp4 (native <video>, autoplay/muted/looped)
 *  - YouTube — driven through the official IFrame API (like Elementor does):
 *    static ?autoplay=1 embeds are unreliable, the API explicitly mutes and
 *    starts playback, loops through the start/end trim, and we fade the frame
 *    in only once it is actually PLAYING (poster shows until then).
 *  - Vimeo (vimeo.com/ID or vimeo.com/ID/HASH for unlisted) in background mode
 * Render inside a `relative overflow-hidden` section, before the content.
 */

declare global {
  interface Window {
    YT?: {
      Player: new (el: HTMLElement, opts: object) => { destroy: () => void };
      PlayerState: { PLAYING: number; ENDED: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function vimeoParts(url: string): { id: string; hash?: string } | null {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d{6,12})(?:\/([a-z0-9]+))?/);
  return m ? { id: m[1], hash: m[2] } : null;
}

/** Load the YouTube IFrame API once, resolve when ready. */
let ytApiPromise: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (window.YT?.Player) return Promise.resolve();
  if (!ytApiPromise) {
    ytApiPromise = new Promise<void>((resolve) => {
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        resolve();
      };
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    });
  }
  return ytApiPromise;
}

function YouTubeBg({ id, start, end }: { id: string; start?: number; end?: number }) {
  const holder = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let player: { destroy: () => void } | null = null;
    let cancelled = false;

    loadYouTubeApi().then(() => {
      if (cancelled || !holder.current || !window.YT) return;
      const mount = document.createElement("div");
      holder.current.appendChild(mount);
      player = new window.YT.Player(mount, {
        videoId: id,
        playerVars: {
          autoplay: 1, controls: 0, disablekb: 1, fs: 0, rel: 0,
          playsinline: 1, iv_load_policy: 3, mute: 1,
          start: start ?? 0, ...(end ? { end } : {}),
        },
        events: {
          onReady: (e: { target: { mute: () => void; playVideo: () => void } }) => {
            e.target.mute();
            e.target.playVideo();
          },
          onStateChange: (e: {
            data: number;
            target: { seekTo: (s: number) => void; playVideo: () => void };
          }) => {
            if (!window.YT) return;
            if (e.data === window.YT.PlayerState.PLAYING) setPlaying(true);
            // manual loop so the start-trim is honored on every pass
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(start ?? 0);
              e.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      try { player?.destroy(); } catch {}
    };
  }, [id, start, end]);

  return (
    <div
      ref={holder}
      className={`yt-bg-holder transition-opacity duration-700 ${playing ? "opacity-100" : "opacity-0"}`}
    />
  );
}

export function BgVideo({
  src,
  start,
  end,
  poster,
  overlay = "bg-black/25",
}: {
  src: string;
  start?: number;
  end?: number;
  poster?: string;
  overlay?: string;
}) {
  const yt = youtubeId(src);
  const vm = !yt ? vimeoParts(src) : null;

  let media: React.ReactNode = null;
  if (src.endsWith(".mp4")) {
    media = (
      <video
        className="hero-video-frame object-cover"
        src={`${src}${start ? `#t=${start}` : ""}`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
      />
    );
  } else if (yt) {
    media = <YouTubeBg id={yt} start={start} end={end} />;
  } else if (vm) {
    const h = vm.hash ? `h=${vm.hash}&` : "";
    media = (
      <iframe
        className="hero-video-frame"
        src={`https://player.vimeo.com/video/${vm.id}?${h}background=1&autoplay=1&loop=1&muted=1&dnt=1`}
        title=""
        allow="autoplay; fullscreen; picture-in-picture"
        tabIndex={-1}
      />
    );
  }

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-surface-dark bg-cover bg-center"
      style={poster ? { backgroundImage: `url('${poster}')` } : undefined}
      aria-hidden
    >
      {media}
      {overlay && <div className={`absolute inset-0 ${overlay}`} />}
    </div>
  );
}
