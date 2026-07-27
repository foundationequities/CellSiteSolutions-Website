import Image from "next/image";
import { BgVideo } from "@/components/bg-video";

/**
 * Standard inner-page hero matching the live Elementor heroes: full-bleed
 * photo (or video) background with a radial dark overlay, red uppercase
 * eyebrow tagline, and a large uppercase H1 (~103px desktop / 64 tablet /
 * 36 mobile), centered in a narrow measure by default.
 */
export function PageHero({
  title,
  eyebrow,
  lede,
  image,
  video,
  align = "center",
}: {
  title: string;
  eyebrow?: string;
  lede?: string;
  image?: string;
  video?: { src: string; start?: number; end?: number };
  align?: "center" | "left";
}) {
  const height = video ? "min-h-[70vh] lg:min-h-[85vh]" : image ? "min-h-[420px] lg:min-h-[60vh]" : "";
  const centered = align === "center";

  return (
    <section
      className={`relative flex items-center overflow-hidden bg-surface-dark text-white ${height}`}
    >
      {video ? (
        <BgVideo src={video.src} start={video.start} end={video.end} poster={image} overlay="" />
      ) : (
        image && <Image src={image} alt="" fill sizes="100vw" className="object-cover" priority />
      )}
      {/* radial dark overlay, as on the live heroes */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 100%)",
        }}
        aria-hidden
      />
      <div
        className={`relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32 ${
          centered ? "text-center" : ""
        }`}
      >
        {eyebrow && (
          <p className="mb-3 font-display text-sm font-medium uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>
        )}
        <h1
          className={`uppercase leading-[1.05] text-[36px] sm:text-[64px] lg:text-[96px] ${
            centered ? "mx-auto max-w-4xl" : "max-w-4xl"
          }`}
        >
          {title}
        </h1>
        {lede && (
          <p
            className={`mt-5 max-w-2xl text-lg leading-relaxed text-white/80 ${
              centered ? "mx-auto" : ""
            }`}
          >
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
