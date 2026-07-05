import Image from "next/image";
import { LOGO_HEIGHT, LOGO_WIDTH, type Logo } from "@/lib/logos";

export function LogoStrip({
  title,
  logos,
}: {
  title: string;
  logos: Logo[];
}) {
  return (
    <section className="border-b border-border bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-sm font-bold uppercase tracking-[0.15em] text-muted">
          {title}
        </h2>
        <div className="grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          {logos.map((logo) => (
            <div key={logo.src} className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={LOGO_WIDTH}
                height={LOGO_HEIGHT}
                className="h-14 w-auto object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
