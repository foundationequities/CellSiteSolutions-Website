import Link from "next/link";

/** Red "Ready to Talk?" call-to-action band used at the bottom of most pages. */
export function CtaBand({
  title = "Ready to Talk?",
  text = "Have an upcoming project that requires a certain skill set? Does one of our products or services help you accomplish something in the field? Let us know.",
  buttonLabel = "Request a Quote",
  href = "/contact-us/",
}: {
  title?: string;
  text?: string;
  buttonLabel?: string;
  href?: string;
}) {
  return (
    <section className="bg-brand py-16 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold uppercase sm:text-4xl">{title}</h2>
        <p className="max-w-2xl text-white/90">{text}</p>
        <Link
          href={href}
          className="rounded-md bg-white px-8 py-3.5 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-white/90"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
