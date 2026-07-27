/**
 * Trust block (CONTENT_MODULES Part 1 §10) — the shared-boilerplate module,
 * deliberately identical sitewide (part of the ~10% shared budget, PLAN §3.2).
 * States only verifiable company facts.
 */
export default function TrustBlock() {
  const facts = [
    { stat: "15+", label: "Years in telecom infrastructure" },
    { stat: "2", label: "Staffed yards — Cedar Rapids, IA & Dallas–Fort Worth, TX" },
    { stat: "9", label: "States in the civil services footprint" },
    { stat: "3", label: "Segments served — fiber, wireless, edge" },
  ];
  return (
    <section className="bg-surface-dark py-12 text-white">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {facts.map((f) => (
          <div key={f.label}>
            <p className="font-display text-4xl font-medium text-brand">{f.stat}</p>
            <p className="mt-1 text-sm text-white/80">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
