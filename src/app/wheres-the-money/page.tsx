import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Where Is the Money Going? Telecom Investment and Market Trends",
  description:
    "Key takeaways from the Morgan Stanley Technology, Media & Telecom Conference and a look at telecom capital expenditures and where the industry is investing in 2025.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Where Is the Money Going? Telecom Investment and Market Trends"
        image="/images/wp-content/uploads/2025/03/0006-Where-Is-the-Money-Going-Telecom-Investment-and-Market-Trends-Blog.png"
      />

      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-brand">March 13, 2025</p>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
            <p>
              As many in the telecommunications industry are aware, the surge in generator demand from
              data centers has led to extended lead times. While this benefits manufacturers, it poses
              challenges for wireless carriers and suppliers like CellSite Solutions.
            </p>
            <p>
              In today&rsquo;s blog we&rsquo;ll cover key takeaways from the Morgan Stanley Technology,
              Media &amp; Telecom Conference, highlighting what top telecom executives had to say. Our
              primary focus, however, will be on capital expenditures, drawing from a variety of
              sources, including recently filed 10-K reports.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">
              Market Pulse: Tracking Telecom and Economic Shifts
            </h2>
            <p>
              Markets experienced another downturn, with the Fab Five losing $261 billion last week,
              bringing the total year-to-date decline to $671 billion. If you had told us that 2025
              would open with an $800 billion gap in market value between the Fab Five and the Telco Top
              Five, we would have been skeptical. Yet here we are. Every Telco Top Five stock remains
              positive (even Comcast), while Meta/Facebook continues to be the only bright spot among
              the Fab Five.
            </p>
            <p>
              One often-overlooked metric is the Relative Market Capitalization ratio, now at
              13.9&mdash;its lowest point since July 2023. While the Telco Top Five may not be a
              &ldquo;safe haven&rdquo; for equities, investors who have gained nearly $7 trillion from
              the Fab Five since the end of 2022 are now hedging. AT&amp;T offers a 4.09% dividend yield
              and has seen substantial appreciation since 2023. Verizon&rsquo;s yield is 5.88%, and its
              market capitalization is at a two-year high. Meanwhile, T-Mobile continues its aggressive
              share buyback strategy, maintaining a $300 billion capitalization while paying a 1.33%
              dividend. These three stocks present a balance of growth and value.
            </p>
            <p>
              On a macroeconomic level, the Bureau of Economic Analysis (BEA) recently reported a record
              trade deficit. A surge in steel and aluminum purchases ahead of impending tariffs played a
              major role in this shift, causing a sharp revision in the Atlanta Fed&rsquo;s GDP
              projection for Q1 2025. Previously, GDP Now estimates exceeded most forecasts (3% for the
              Fed, and 2-2.4% for most economists). However, in just a few weeks, the GDP Now estimate
              has dropped dramatically, reaching -2.4% growth for Q1 as of Friday. This swing is
              significant given that consumer spending and business investment have not substantially
              declined. When economic uncertainty rises, businesses delay or halt projects. If business
              investment slows&mdash;though, as we&rsquo;ll discuss, telecom spending remains
              steady&mdash;a recession could follow.
            </p>
            <p>
              Beyond the U.S., Germany recently abandoned a long-standing fiscal policy, lifting a
              &ldquo;debt brake&rdquo; first implemented in 2009. This shift allows for increased
              deficit spending on defense and infrastructure. According to the Associated Press:
              &ldquo;Leaders of the conservative Union bloc agreed with the center-left Social Democrats
              to exempt military spending over 1% of GDP from the debt limit, along with a
              500-billion-euro infrastructure fund for civil and disaster protection, transportation,
              hospitals, energy infrastructure, education, scientific research, and digitization.
              Economists estimate that this measure, if passed, could enable a trillion euros in new
              borrowing and spending over a decade.&rdquo;
            </p>
            <p>
              Much like the U.S. in 2022, Europe is embracing infrastructure investment. However,
              Germany&rsquo;s 6.2% unemployment rate&mdash;50% higher than the U.S. rate of
              4.1%&mdash;should help curb wage inflation. That said, greater competition for sovereign
              debt financing could limit corporate borrowing options.
            </p>
            <p>
              Meanwhile, Bloomberg&rsquo;s Mark Gurman reports that Apple is facing delays with its
              next-generation AI-driven Siri upgrade. According to the article: &ldquo;Apple had been
              planning to make Siri more ChatGPT-like and conversational next year. But now only the
              initial underpinnings for that upgrade are expected to be ready by 2026, during the iOS 19
              release cycle. The actual interface that users experience likely won&rsquo;t arrive until
              iOS 20 in 2027, the people said.&rdquo;
            </p>
            <p>
              Apple&rsquo;s decision to delay reflects its commitment to a seamless user experience.
              However, investors will likely continue to push for faster implementation.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">Telco Top Five Takeaways</h2>
            <p>
              Takeaways from the Morgan Stanley Conference After reviewing the transcripts of all Telco
              Top Five presentations from the Morgan Stanley Technology, Media &amp; Telecom Conference,
              here are some key observations:
            </p>
            <p>
              T-Mobile is strategically positioning its T-Fiber joint ventures for success. CFO Peter
              Osvaldik stated they are &ldquo;very happy with the hand they have.&rdquo; In other words,
              rather than acquiring additional companies, T-Mobile is prioritizing Metronet and Lumos to
              fuel rural expansion. As noted when the Lumos transaction was announced, T-Mobile has a
              significant opportunity to leverage its wireless and fiber assets to grow market share.
              Content delivery could pose a challenge, but lessons from their fixed wireless rollout
              should help them optimize Metronet and Lumos markets with minimal additional investment.
            </p>
            <p>
              AT&amp;T remains focused on infrastructure. CEO John Stankey emphasized the company&rsquo;s
              construction strategy. Addressing cable competition, he stated, &ldquo;It&rsquo;s tough to
              be the highest-priced service in a market with a product that isn&rsquo;t the best. I
              believe that&rsquo;s the position they&rsquo;re in when competing against our fiber.&rdquo;
              Based on his presentation, AT&amp;T is likely to exceed expectations in household fiber
              penetration and overall market share, potentially increasing by 2-3% in areas where fiber
              builds are completed. Stankey detailed the advantages of deploying fiber at scale (70-90%
              coverage) versus smaller rollouts (10-30%).
            </p>
            <p>
              Verizon remains consumer-focused. CFO Tony Skiadas highlighted the company&rsquo;s
              priority on improving postpaid and prepaid performance in 2025. Notably, he indicated that
              Verizon does not expect significant prepaid improvements until late 2025. Additionally, he
              revealed that only 16% of Verizon&rsquo;s mobility base currently subscribes to a bundled
              wireless and broadband package, a figure that has remained stagnant. This presents an
              opportunity for Verizon to enhance its marketing efforts and drive convergence adoption.
            </p>

            <h2 className="pt-4 text-2xl font-extrabold text-ink">
              Where is Telecom Investing in 2025?
            </h2>
            <p>This year, our analysis covers three major areas:</p>
            <p>
              <strong className="text-ink">
                C-Band densification and cell site expansion
              </strong>{" "}
              &ndash; Analysts project that wireless carriers, particularly AT&amp;T and Verizon, will
              add approximately 50,000 new sites in the coming years to improve C-Band coverage.
              T-Mobile and US Cellular are also expanding, primarily through co-location on existing
              sites.
            </p>
            <p>
              <strong className="text-ink">Local network construction and upgrades</strong> &ndash;
              AT&amp;T&rsquo;s $22 billion budget includes $10 billion for fiber expansion within its
              existing footprint. Comcast and Spectrum are upgrading networks to High-Split DOCSIS 3.1
              and DOCSIS 4.0. Verizon is extending its FiOS coverage, targeting 650,000 additional
              premises before the Frontier acquisition and nearly 1 million per year afterward.
            </p>
            <p>
              <strong className="text-ink">Support systems and AI integration</strong> &ndash; The
              industry is prioritizing data-driven efficiency. T-Mobile and AT&amp;T are investing in
              AI-powered customer service tools and streamlined network management. As telecom operators
              push toward greater automation, improved data quality and fiber expansion remain top
              priorities.
            </p>
            <p>
              Unlike previous years, telcos are not investing heavily in new spectrum acquisitions,
              focusing instead on network densification and operational improvements. With 2025 shaping
              up to be a critical year for infrastructure investments, the telecom industry is poised
              for significant advancements.
            </p>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
