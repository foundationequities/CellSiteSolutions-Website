import { getSeedMarkets } from "@/lib/seed";

/**
 * Lightweight server-rendered SVG plot of the 65-market footprint —
 * equirectangular projection of lat/long, no map library, no client JS.
 * Yards render as squares, markets as dots; pass `highlight` to emphasize
 * one market on a city page.
 */
export function FootprintMap({ highlight }: { highlight?: { stateSlug: string; slug: string } }) {
  const markets = getSeedMarkets();
  const lons = markets.map((m) => m.longitude);
  const lats = markets.map((m) => m.latitude);
  const pad = 1.5;
  const minLon = Math.min(...lons) - pad;
  const maxLon = Math.max(...lons) + pad;
  const minLat = Math.min(...lats) - pad;
  const maxLat = Math.max(...lats) + pad;
  const W = 800;
  const H = Math.round((W * (maxLat - minLat)) / ((maxLon - minLon) * 1.25));
  const x = (lon: number) => ((lon - minLon) / (maxLon - minLon)) * W;
  const y = (lat: number) => H - ((lat - minLat) / (maxLat - minLat)) * H;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label="Map of CellSite Solutions civil service markets across nine states, served from yards in Cedar Rapids, Iowa and Dallas–Fort Worth, Texas"
      className="w-full rounded-lg border border-border bg-[#f6f6f6]"
    >
      {markets.map((m) => {
        const isHighlight = highlight && m.stateSlug === highlight.stateSlug && m.slug === highlight.slug;
        const cx = x(m.longitude);
        const cy = y(m.latitude);
        if (m.isYard) {
          return (
            <g key={`${m.stateSlug}-${m.slug}`}>
              <rect x={cx - 7} y={cy - 7} width="14" height="14" fill="#111111" rx="2" />
              <text x={cx + 11} y={cy + 4} fontSize="13" fontWeight="600" fill="#111111">
                {m.city} yard
              </text>
            </g>
          );
        }
        return (
          <circle
            key={`${m.stateSlug}-${m.slug}`}
            cx={cx}
            cy={cy}
            r={isHighlight ? 9 : 4.5}
            fill={isHighlight ? "#FF2E36" : "rgba(255,46,54,0.55)"}
            stroke={isHighlight ? "#111111" : "none"}
            strokeWidth={isHighlight ? 2 : 0}
          >
            <title>{`${m.city}, ${m.stateAbbr}`}</title>
          </circle>
        );
      })}
    </svg>
  );
}
