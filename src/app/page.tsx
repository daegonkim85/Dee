import Link from "next/link";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { work, featuredSlugs } from "@/content/work";
import { site } from "@/content/site";

const featured = featuredSlugs
  .map((slug) => work.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-page pb-20 md:pb-28" aria-labelledby="featured-heading">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 id="featured-heading" className="display text-2xl md:text-3xl">
              Featured work
            </h2>
            <p className="mt-2 max-w-md text-sm text-muted">
              Case studies from internal tools, marketplaces, and real-time
              products.
            </p>
          </div>
          <Link href="/work" className="link-subtle shrink-0">
            See all projects →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {featured.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.04}>
              <WorkCard item={item} index={i} featured />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface/40">
        <div className="container-page grid gap-8 py-16 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <h2 className="display text-2xl md:text-3xl">About Dee</h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Nine-plus years designing products at Disney, Turo, WeWork,
              RingCentral, and Verizon — now expanding into advertising and
              creative, with AI built into how I research, explore, and ship.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className="btn-secondary">
              About &amp; experience
            </Link>
            <Link href={`mailto:${site.email}`} className="btn-primary">
              Email {site.name.split(" ")[0]}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
