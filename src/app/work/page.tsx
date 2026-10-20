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
    <div className="container-page py-20 md:py-28">
      <header className="mb-16 max-w-3xl">
        <p className="eyebrow mb-4">Work</p>
        <h1 className="display text-4xl md:text-6xl">
          Selected projects, from internal tools to real-time products.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted">
          A mix of systems work and 0→1 design — reframed here toward the ideas
          and craft behind each one.
        </p>
      </header>

      <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
        {published.map((item, i) => (
          <Reveal key={item.slug} delay={(i % 2) * 0.05}>
            <WorkCard item={item} index={i} />
          </Reveal>
        ))}
      </div>

      {soon.length > 0 ? (
        <section className="mt-24">
          <div className="hairline pt-10">
            <p className="eyebrow mb-8">Coming soon</p>
            <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
              {soon.map((item) => (
                <WorkCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
