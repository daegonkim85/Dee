import Link from "next/link";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { work, featuredSlugs } from "@/content/work";

const featured = featuredSlugs
  .map((slug) => work.find((c) => c.slug === slug))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="container-page py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-3">Selected work</p>
            <h2 className="display text-3xl md:text-5xl">Featured projects</h2>
          </div>
          <Link
            href="/work"
            className="link-underline hidden text-sm sm:inline-flex"
          >
            View all ↗
          </Link>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {featured.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.05}>
              <WorkCard item={item} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 sm:hidden">
          <Link href="/work" className="link-underline text-sm">
            View all work ↗
          </Link>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="hairline grid gap-10 pt-12 md:grid-cols-[0.4fr_1fr]">
          <p className="eyebrow pt-2">About</p>
          <div className="max-w-2xl">
            <p className="display text-2xl leading-snug md:text-3xl">
              Nine-plus years of product design across entertainment, mobility,
              workspace and communications — now folding in advertising,
              creative, and AI tooling as a core part of the craft.
            </p>
            <Link href="/about" className="link-underline mt-8 text-base">
              More about Dee ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
