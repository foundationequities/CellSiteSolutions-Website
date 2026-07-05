import type { Metadata } from "next";
import { ContentPage, buildMetadata } from "@/components/content-page";
import { contentPages } from "@/lib/content";

const data = contentPages["shelters"];

export const metadata: Metadata = buildMetadata(data);

export default function Page() {
  return <ContentPage data={data} />;
}
