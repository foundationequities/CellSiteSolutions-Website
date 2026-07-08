import Image from "next/image";
import Link from "next/link";
import { BgVideo } from "@/components/bg-video";

/**
 * Standard inner-page hero: a dark band with an optional background image or
 * background video (mp4/YouTube/Vimeo, matching the live Elementor heroes),
 * a small breadcrumb/eyebrow, the H1, and an optional lede paragraph.
 */
export function PageHero({
  title,
  eyebrow,
  lede,
  image,
  video,
  breadcrumb = true,
}: {
  title: string;
  eyebrow?: string;
  lede?: string;
  image?: string;
  video?: { src: string; start?: number; end?: number };
  breadcrumb?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-white">
      {video ? (
        <BgVideo src={video.src} start={video.start} end={video.end} poster={image} overlay="bg-black/35" />
      ) : (
        image && (
          <>
            <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-50" priority />
            <div className="absolute inset-0 bg-black/25" aria-hidden />
          </>
        )
      )}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
        {breadcrumb && (
          <nav className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>{" "}
            <span className="mx-1">/</span> {eyebrow ?? title}
          </nav>
        )}
        {eyebrow && !breadcrumb && (
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        )}
        <h1 className="max-w-4xl text-[34px] leading-tight sm:text-[45px]">{title}</h1>
        {lede && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{lede}</p>}
      </div>
    </section>
  );
}
