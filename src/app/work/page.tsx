import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { work } from "@/content/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product design work by Dee Kim across Turo, WeWork, RingCentral and more.",
};

export default function WorkPage() {
  const published = work.filter((c) => !c.comingSoon);
  const soon = work.filter((c) => c.comingSoon);

  return (
    <div className="container-page py-16 md:py-22">
      <header className="mb-12 max-w-2xl">
        <h1 className="display text-3xl md:text-4xl">Work</h1>
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          A scannable index of product and systems work — from ops consoles to
          customer-facing flows. Each case study walks through problem, craft,
          and outcome.
        </p>
        <p className="mt-3 text-sm text-faint">
          {published.length} published
          {soon.length > 0 ? ` · ${soon.length} coming soon` : ""}
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        {published.map((item, i) => (
          <Reveal key={item.slug} delay={(i % 3) * 0.04}>
            <WorkCard item={item} index={i} />
          </Reveal>
        ))}
      </div>

      {soon.length > 0 ? (
        <section className="mt-16 md:mt-20" aria-labelledby="coming-soon">
          <h2 id="coming-soon" className="section-label mb-6">
            Coming soon
          </h2>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {soon.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
