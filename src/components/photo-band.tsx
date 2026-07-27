import Image from "next/image";

/**
 * Full-bleed photo section band matching the live Elementor pattern: tall
 * (~889px desktop) background photo + dark overlay with content vertically
 * centered — or, with `card`, a white content card overlaid on the photo.
 */
export function PhotoBand({
  image,
  overlay = "bg-black/40",
  tall = true,
  card = false,
  children,
}: {
  image: string;
  overlay?: string;
  tall?: boolean;
  card?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`relative flex items-center overflow-hidden bg-surface-dark py-20 text-white ${
        tall ? "min-h-[560px] lg:min-h-[780px]" : ""
      }`}
    >
      <Image src={image} alt="" fill sizes="100vw" className="object-cover" />
      <div className={`absolute inset-0 ${overlay}`} aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {card ? (
          <div className="max-w-2xl rounded-lg bg-white p-8 text-ink shadow-2xl sm:p-10">{children}</div>
        ) : (
          children
        )}
      </div>
    </section>
  );
}
