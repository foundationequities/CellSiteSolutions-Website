/**
 * Full-bleed background video for the homepage hero, matching the live site.
 * The live hero's Elementor background video is Vimeo 1036146605; Vimeo's
 * `background=1` mode autoplays muted/looped with no chrome. The poster image
 * sits behind the iframe as the immediate paint and fallback.
 */
export function HeroVideo({ poster }: { poster: string }) {
  return (
    <div
      className="absolute inset-0 overflow-hidden bg-surface-dark bg-cover bg-center"
      style={{ backgroundImage: `url('${poster}')` }}
      aria-hidden
    >
      <iframe
        className="hero-video-frame"
        src="https://player.vimeo.com/video/1036146605?background=1&autoplay=1&loop=1&muted=1&dnt=1"
        title="CellSite Solutions"
        allow="autoplay; fullscreen; picture-in-picture"
        tabIndex={-1}
      />
    </div>
  );
}
