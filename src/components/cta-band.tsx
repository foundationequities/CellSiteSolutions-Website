import Image from "next/image";
import Link from "next/link";
import { BgVideo } from "@/components/bg-video";

/**
 * "READY TO TALK?" call-to-action band matching the live layout: red band,
 * heading + copy on the left, button on the right, with the Contact-Us icon
 * graphic as a watermark at center-right. With `videoSrc` it renders the
 * video-backed variant used on the showcase pages.
 */
export function CtaBand({
  title = "READY TO TALK?",
  text = "Have an upcoming project that requires a certain skill set? Does one of our products or services help you accomplish something in the field? Let us know.",
  buttonLabel = "REQUEST A QUOTE",
  href = "/contact-us/",
  videoSrc,
  videoStart,
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
  videoSrc?: string;
  videoStart?: number;
}) {
  return (
    <section
      className={`relative overflow-hidden py-16 text-white ${videoSrc ? "bg-surface-dark py-24" : "bg-brand"}`}
    >
      {videoSrc ? (
        <BgVideo src={videoSrc} start={videoStart} overlay="bg-black/30" />
      ) : (
        <Image
          src="/images/wp-content/uploads/2024/09/Contact-Us-Icon.png"
          alt=""
          width={420}
          height={420}
          aria-hidden
          className="pointer-events-none absolute right-[8%] top-1/2 hidden w-[340px] -translate-y-1/2 opacity-20 lg:block"
        />
      )}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 text-left sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-[30px] sm:text-[45px]">{title}</h2>
          <p className="mt-4 text-white/90">{text}</p>
        </div>
        <Link
          href={href}
          className="shrink-0 rounded-md bg-white px-8 py-3.5 font-display text-sm font-medium uppercase tracking-wide text-brand transition-colors hover:bg-white/90"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
