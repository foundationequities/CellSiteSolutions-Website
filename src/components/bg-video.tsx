/**
 * Absolute-positioned cover background video for hero/section bands, matching
 * the live site's Elementor background videos. Supports:
 *  - self-hosted mp4 (native <video>, autoplay/muted/looped)
 *  - YouTube (youtu.be / watch?v= / embed) with optional start/end trim
 *  - Vimeo (vimeo.com/ID or vimeo.com/ID/HASH for unlisted) in background mode
 * Render inside a `relative overflow-hidden` section, before an overlay div.
 *
 * NOTE: the two large mp4s are still served from the live WordPress host as a
 * temporary bridge (196MB/253MB — too large for the repo). Move them to Vercel
 * Blob before DNS cutover; only these two constants need updating.
 */

function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function vimeoParts(url: string): { id: string; hash?: string } | null {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d{6,12})(?:\/([a-z0-9]+))?/);
  return m ? { id: m[1], hash: m[2] } : null;
}

export function BgVideo({
  src,
  start,
  end,
  poster,
  overlay = "bg-black/50",
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
    const p = new URLSearchParams({
      autoplay: "1", mute: "1", controls: "0", loop: "1", playlist: yt,
      playsinline: "1", rel: "0", modestbranding: "1", disablekb: "1", fs: "0",
    });
    if (start) p.set("start", String(start));
    if (end) p.set("end", String(end));
    media = (
      <iframe
        className="hero-video-frame"
        src={`https://www.youtube-nocookie.com/embed/${yt}?${p.toString()}`}
        title=""
        allow="autoplay; encrypted-media"
        tabIndex={-1}
      />
    );
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
