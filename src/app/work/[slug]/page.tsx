import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCase, work, getPublishedCases } from "@/content/work";
import { Placeholder } from "@/components/placeholder";
import { CoverMedia } from "@/components/cover-media";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return work.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};
  return {
    title: `${item.client} — ${item.title}`,
    description: item.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const published = getPublishedCases();
  const currentIndex = published.findIndex((c) => c.slug === slug);
  const next = published[(currentIndex + 1) % published.length];

  return (
    <article className="pb-16">
      <div className="container-page pt-16 md:pt-20">
        <nav className="mb-10 text-sm text-faint">
          <Link href="/work" className="transition-colors hover:text-accent">
            Work
          </Link>{" "}
          / <span className="text-muted">{item.client}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow mb-4">{item.category}</p>
            <h1 className="display text-4xl leading-[1.02] md:text-6xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{item.intro}</p>
          </div>

          <dl className="self-start">
            {[
              ["Role", item.meta.role],
              ["Period", item.meta.period],
              ["Scope", item.meta.scope],
              ["Team", item.meta.team],
            ].map(([label, value]) => (
              <div
                key={label}
                className="hairline grid grid-cols-[6rem_1fr] gap-4 py-4 first:border-t"
              >
                <dt className="eyebrow pt-0.5">{label}</dt>
                <dd className="text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="container-page mt-12">
        <CoverMedia
          cover={item.cover}
          caption="Placeholder cover — real imagery to be added."
          ratio="wide"
          priority
          sizes="100vw"
        />
      </div>

      {item.metrics ? (
        <div className="container-page mt-16">
          <div className="hairline grid grid-cols-1 gap-8 pt-10 sm:grid-cols-3">
            {item.metrics.map((m) => (
              <Reveal key={m.label}>
                <div>
                  <div className="display text-4xl text-accent md:text-5xl">
                    {m.value}
                  </div>
                  <div className="mt-2 text-sm text-muted">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}

      {item.sections?.map((section) => (
        <section key={section.heading} className="container-page mt-24">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-[0.4fr_1fr]">
              <div>
                {section.eyebrow ? (
                  <p className="eyebrow mb-3">{section.eyebrow}</p>
                ) : null}
              </div>
              <div className="max-w-2xl">
                <h2 className="display text-2xl leading-snug md:text-4xl">
                  {section.heading}
                </h2>
                <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted">
                  {section.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          {section.figure ? (
            <div className="mt-10 md:grid md:grid-cols-[0.4fr_1fr] md:gap-8">
              <div className="hidden md:block" aria-hidden="true" />
              <Placeholder
                label={section.figure.label}
                caption={section.figure.caption}
                tone={section.figure.tone}
                ratio={section.figure.ratio}
                className="md:max-w-3xl"
              />
            </div>
          ) : null}
        </section>
      ))}

      {item.ai ? (
        <section className="container-page mt-24">
          <Reveal>
            <div className="rounded-2xl border border-accent/40 bg-accent/5 p-8 md:p-12">
              <p className="eyebrow mb-3 text-accent">AI workflow</p>
              <h2 className="display text-2xl md:text-3xl">{item.ai.title}</h2>
              <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
                {item.ai.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

      {next ? (
        <section className="container-page mt-28">
          <div className="hairline pt-10">
            <p className="eyebrow mb-4">Next project</p>
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-end justify-between gap-6"
            >
              <h2 className="display max-w-2xl text-3xl transition-colors group-hover:text-accent md:text-5xl">
                {next.title}
              </h2>
              <span className="whitespace-nowrap text-sm text-faint transition-colors group-hover:text-accent">
                {next.client} ↗
              </span>
            </Link>
          </div>
        </section>
      ) : null}
    </article>
  );
}
