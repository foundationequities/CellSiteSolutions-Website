import Image from "next/image";
import { LOGO_HEIGHT, LOGO_WIDTH, type Logo } from "@/lib/logos";

/**
 * Continuously scrolling logo strip, matching the live site's client-logo
 * carousel. The track is duplicated so the CSS translation loops seamlessly
 * (animation in globals.css; pauses on hover, disabled for reduced motion).
 */
export function LogoMarquee({ logos, reverse = false }: { logos: Logo[]; reverse?: boolean }) {
  const track = [...logos, ...logos];
  return (
    <div className="overflow-hidden">
      <div
        className="logo-marquee items-center gap-16 py-4"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {track.map((logo, i) => (
          <Image
            key={`${logo.src}-${i}`}
            src={logo.src}
            alt={i < logos.length ? logo.name : ""}
            aria-hidden={i >= logos.length}
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
            className="h-14 w-auto shrink-0 object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>
    </div>
  );
}
