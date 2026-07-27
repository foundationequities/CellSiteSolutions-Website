import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getRenderableLocations,
  getRenderableLocation,
  getNeighbors,
  isPublishable,
} from "@/lib/locations";
import { locationJsonLd } from "@/lib/jsonld";

// Module components — built against docs/civil-locations/CONTENT_MODULES.md
import LocalIntro from "@/components/locations/LocalIntro";
import CtaBar from "@/components/locations/CtaBar";
import SegmentBlock from "@/components/locations/SegmentBlock";
import DesignCriteriaTable from "@/components/locations/DesignCriteriaTable";
import GroundConditions from "@/components/locations/GroundConditions";
import PermittingTable from "@/components/locations/PermittingTable";
import SeasonalCalendar from "@/components/locations/SeasonalCalendar";
import LoadRestrictions from "@/components/locations/LoadRestrictions";
import EnvironmentalWindows from "@/components/locations/EnvironmentalWindows";
import UtilityInterconnect from "@/components/locations/UtilityInterconnect";
import CostDrivers from "@/components/locations/CostDrivers";
import HazardProfile from "@/components/locations/HazardProfile";
import MarketActivity from "@/components/locations/MarketActivity";
import DecisionGuidance from "@/components/locations/DecisionGuidance";
import ProjectProof from "@/components/locations/ProjectProof";
import CoverageMap from "@/components/locations/CoverageMap";
import CrewBase from "@/components/locations/CrewBase";
import ComplianceBlock from "@/components/locations/ComplianceBlock";
import LocalFaq from "@/components/locations/LocalFaq";
import NearbyLocations from "@/components/locations/NearbyLocations";
import RelatedServices from "@/components/locations/RelatedServices";
import TrustBlock from "@/components/locations/TrustBlock";
import LocationForm from "@/components/locations/LocationForm";
import SourcesFooter from "@/components/locations/SourcesFooter";

export const dynamicParams = false; // unknown slugs 404 rather than render empty

export function generateStaticParams() {
  return getRenderableLocations().map((l) => ({
    state: l.identity.stateSlug,
    city: l.identity.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}): Promise<Metadata> {
  const { state, city } = await params;
  const loc = getRenderableLocation(state, city);
  if (!loc) return {};
  return {
    title: loc.metadata.title,
    description: loc.metadata.description,
    alternates: {
      canonical: `/civil-services/locations/${state}/${city}/`,
    },
    openGraph: {
      title: loc.metadata.title,
      description: loc.metadata.description,
      images: loc.metadata.ogImage ? [loc.metadata.ogImage] : undefined,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state, city } = await params;
  const loc = getRenderableLocation(state, city);
  if (!loc) notFound();

  const neighbors = getNeighbors(loc, 4);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationJsonLd(loc)) }}
      />

      {!isPublishable(loc) && (
        <div className="bg-amber-100 px-4 py-3 text-center text-sm font-semibold text-amber-900">
          DRAFT PREVIEW — this page is pending research verification and human sign-off. It renders
          on the draft site only and is excluded from sitemaps.
        </div>
      )}
      <LocalIntro location={loc} />
      <CtaBar location={loc} />

      {/* Three technology segments — the core query surface. CONTENT_MODULES §A */}
      <SegmentBlock location={loc} segment="fiber" />
      <SegmentBlock location={loc} segment="wireless" />
      <SegmentBlock location={loc} segment="edge" />

      <DesignCriteriaTable location={loc} />
      <GroundConditions location={loc} />
      <PermittingTable location={loc} />
      <SeasonalCalendar location={loc} />
      <LoadRestrictions location={loc} />
      <EnvironmentalWindows location={loc} />
      <UtilityInterconnect location={loc} />
      <CostDrivers location={loc} />
      <DecisionGuidance location={loc} />
      <HazardProfile location={loc} />
      <MarketActivity location={loc} />

      <ProjectProof location={loc} />
      <CoverageMap location={loc} />
      <CrewBase location={loc} />
      <ComplianceBlock location={loc} />

      <LocalFaq location={loc} />
      <NearbyLocations neighbors={neighbors} />
      <RelatedServices location={loc} />

      <TrustBlock />
      <LocationForm location={loc} />
      <SourcesFooter location={loc} />
    </>
  );
}
