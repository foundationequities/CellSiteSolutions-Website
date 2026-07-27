import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ShareRow } from "@/components/share-row";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on telecom shelters, civil construction, HVAC, decommissioning, and industry trends from the experts at CellSite Solutions.",
};

const IMG = "/images/wp-content/uploads";

const posts = [
  {
    slug: "shutting-down-sites",
    title: "Shutting Down Telecom Sites, the Sustainable Way",
    date: "April 10, 2025",
    image: `${IMG}/2025/04/0008-Shutting-Down-Telecom-Sites-the-Sustainable-Way-min.png`,
    excerpt:
      "Telecom sites are becoming more necessary than ever for the telecommunications industry. They are needed to keep up with the increasing demand for data storage and high-speed internet connections, but…",
  },
  {
    slug: "sites-done-right",
    title: "Telecom Sites Done Right",
    date: "April 2, 2025",
    image: `${IMG}/2025/04/0007-Telecom-Sites-Done-Right-min.png`,
    excerpt:
      "Civil site construction is a process that all telecommunications companies must go through in order to install new telecommunications sites or upgrade existing infrastructure. By understanding the different aspects of…",
  },
  {
    slug: "wheres-the-money",
    title: "Where Is the Money Going? Telecom Investment and Market Trends",
    date: "March 13, 2025",
    image: `${IMG}/2025/03/0006-Where-Is-the-Money-Going-Telecom-Investment-and-Market-Trends-Blog.png`,
    excerpt:
      "In today's blog we'll cover key takeaways from the Morgan Stanley Technology, Media & Telecom Conference, highlighting what top telecom executives had to say. Our primary focus, however, will be…",
  },
  {
    slug: "site-analysis-permitting",
    title: "Step-by-Step Telecom Site Analysis and Permitting",
    date: "March 11, 2025",
    image: `${IMG}/2025/03/0005-Step-by-Step-Telecom-Site-Analysis-and-Permitting.png`,
    excerpt:
      "By taking the time to assess and plan for your site development project correctly, you can help ensure that the result is a safe and functional facility that meets all…",
  },
  {
    slug: "enhancing-isp",
    title: "Enhancing ISP for Telecom Efficiency",
    date: "March 4, 2025",
    image: `${IMG}/2025/03/0004-Enhancing-ISP-for-Telecom-Efficiency.png`,
    excerpt:
      "Understanding what ISP is and how it is used is crucial for telecommunication professionals looking to streamline their operations and improve network uptime. Let's explore ISP in telecom shelters and…",
  },
  {
    slug: "roof-sealant-shelters",
    title: "Maximizing Protection with Roof Sealant for Telecom Shelters",
    date: "February 5, 2025",
    image: `${IMG}/2025/02/0003-Maximizing-Protection-with-Roof-Sealant-for-Telecom-Shelters-Header-Image.png`,
    excerpt:
      "Roof sealant is an essential part of the construction and maintenance of telecommunications shelters. This type of sealant provides important protection against water damage, as well as strengthening the roof's…",
  },
  {
    slug: "keeping-infrastructure-cool",
    title: "HVAC's: Keeping Critical Infrastructure Cool",
    date: "January 20, 2025",
    image: `${IMG}/2025/02/0002-HVACs-Keeping-Critical-Infrastructure-Cool-Header-Image-min.png`,
    excerpt:
      "Telecommunications plays a vital role in managing the flow of information among businesses, public agencies, and private households. To ensure an uninterrupted high-speed internet connection to customers, telecom operators must…",
  },
  {
    slug: "elevating-telecom",
    title: "Elevating Telecom to New Heights",
    date: "January 6, 2025",
    image: `${IMG}/2025/01/0001-Elevating-Telecom-to-New-Heights-Header-Image-2.png`,
    excerpt:
      "In the telecom industry, craning is an essential part in ensuring the delivery and placement of telecom shelters to their final destinations. Let's take a closer look at why craning…",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Live blog has no hero — slim dark bar clears the fixed header. */}
      <div className="h-28 bg-surface-dark" aria-hidden />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-border pb-16 last:border-b-0 last:pb-0">
                <Link
                  href={`/${post.slug}/`}
                  className="group relative block aspect-[16/9] w-full overflow-hidden rounded-lg"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 896px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>
                <h3 className="mt-8 text-2xl leading-snug text-ink sm:text-3xl">
                  <Link href={`/${post.slug}/`} className="hover:text-brand">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-muted">{post.date}</p>
                <p className="mt-4 text-base leading-relaxed text-muted">{post.excerpt}</p>
                <Link
                  href={`/${post.slug}/`}
                  className="mt-5 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
                >
                  Read More &rsaquo;
                </Link>
                <div className="mt-6">
                  <ShareRow path={`/${post.slug}/`} title={post.title} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
