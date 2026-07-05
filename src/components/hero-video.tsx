/**
 * Full-bleed YouTube background video for the homepage hero, matching the live
 * site (video UlecVkYXJGY, trimmed 2s–140s, autoplay/muted/looped). The poster
 * image sits behind the iframe as the immediate paint and fallback.
 */
export function HeroVideo({ poster }: { poster: string }) {
  const id = "UlecVkYXJGY";
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    loop: "1",
    playlist: id,
    start: "2",
    end: "140",
    playsinline: "1",
    modestbranding: "1",
    rel: "0",
    showinfo: "0",
    disablekb: "1",
    fs: "0",
  });

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-surface-dark bg-cover bg-center"
      style={{ backgroundImage: `url('${poster}')` }}
      aria-hidden
    >
      <iframe
        className="hero-video-frame"
        src={`https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`}
        title="CellSite Solutions"
        allow="autoplay; encrypted-media; picture-in-picture"
        tabIndex={-1}
        loading="lazy"
      />
    </div>
  );
}
