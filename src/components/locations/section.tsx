/**
 * Shared primitives for the location-page modules. One calm, consistent
 * treatment across all ~20 modules using the existing site tokens — the
 * cluster must look native to the site (docs/civil-locations/CLAUDE.md).
 *
 * Data-heavy modules render real <table> elements, never grid divs — an AI
 * extraction requirement (PLAN §11), not a style preference.
 */

export function Module({
  id,
  eyebrow,
  title,
  tone = "white",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  tone?: "white" | "gray";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`${tone === "gray" ? "bg-[#f6f6f6]" : "bg-white"} py-12 lg:py-14`}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>
        )}
        <h2 className="mt-1 text-[26px] leading-tight text-ink sm:text-[36px]">{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  );
}

export const prose = "text-base leading-relaxed text-muted";

export function Table({
  caption,
  head,
  children,
}: {
  caption?: string;
  head: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[560px] text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="border-b border-border bg-[#f6f6f6]">
            {head.map((h) => (
              <th key={h} scope="col" className="px-4 py-3 font-display font-medium uppercase tracking-wide text-ink">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">{children}</tbody>
      </table>
    </div>
  );
}

export function Tr({ children }: { children: React.ReactNode }) {
  return <tr className="align-top">{children}</tr>;
}

export function Td({ children, strong }: { children: React.ReactNode; strong?: boolean }) {
  return (
    <td className={`px-4 py-3 ${strong ? "font-semibold text-ink" : "text-muted"}`}>{children}</td>
  );
}

/** External authority/source link — always opens the real agency, never JS-gated. */
export function AuthorityLink({ name, url }: { name: string; url: string | null }) {
  if (!url) return <>{name}</>;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-border underline-offset-2 hover:text-brand">
      {name}
    </a>
  );
}
