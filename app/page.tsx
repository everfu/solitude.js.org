import {Spacer} from "@nextui-org/spacer";
import {Suspense} from "react";

import {Hero} from "@/components/marketing/hero";
import {FeaturesGrid} from "@/components/marketing/features-grid";
import Support from "@/components/marketing/support";
import landingContent from "@/content/landing";

export default async function Home() {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow">
      <section className="flex flex-col items-center justify-center">
        <Hero />
        <FeaturesGrid features={landingContent.topFeatures} />
        <Suspense fallback={<div>Loading...</div>}>
          <Support />
        </Suspense>
        <Spacer y={60} />
      </section>
    </main>
  );
}
