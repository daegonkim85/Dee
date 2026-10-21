import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCase, work, getPublishedCases } from "@/content/work";
import { CoverMedia } from "@/components/cover-media";
import { Placeholder } from "@/components/placeholder";
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

  const metaRows = [
    ["Role", item.meta.role],
    ["Period", item.meta.period],
    ["Scope", item.meta.scope],
    ["Team", item.meta.team],
  ] as const;

  return (
    <article className="pb-20">
      <div className="container-page pt-12 md:pt-16">
        <nav className="mb-8 text-sm" aria-label="Breadcrumb">
          <Link
            href="/work"
            className="font-medium text-muted transition-colors hover:text-accent"
          >
            Work
          </Link>
          <span className="mx-2 text-faint">/</span>
          <span className="text-fg">{item.client}</span>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <header>
            <p className="text-sm font-medium text-muted">{item.category}</p>
            <h1 className="display mt-3 text-3xl md:text-4xl lg:text-5xl">
              {item.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              {item.intro}
            </p>
          </header>

          <dl className="surface-card divide-y divide-line self-start overflow-hidden">
            {metaRows.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-3 px-5 py-4 md:px-6">
                <dt className="text-xs font-semibold uppercase tracking-wide text-faint">
                  {label}
                </dt>
                <dd className="text-sm leading-snug text-fg">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="container-page mt-10 md:mt-12">
        <CoverMedia
          cover={item.cover}
          caption={
            item.cover.image
              ? undefined
              : "Placeholder cover — real imagery to be added."
          }
          ratio="wide"
          priority
        />
      </div>

      {item.metrics ? (
        <div className="container-page mt-14 md:mt-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {item.metrics.map((m) => (
              <Reveal key={m.label}>
                <div className="surface-card p-6 text-center sm:text-left">
                  <div className="display text-3xl text-accent md:text-4xl">
                    {m.value}
                  </div>
                  <div className="mt-2 text-sm text-muted">{m.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}

      {item.sections?.map((section, idx) => (
        <section
          key={section.heading}
          className={`container-page ${idx === 0 ? "mt-16 md:mt-20" : "mt-14 md:mt-16"}`}
        >
          <Reveal>
            <div className="max-w-3xl">
              {section.eyebrow ? (
                <p className="section-label mb-2">{section.eyebrow}</p>
              ) : null}
              <h2 className="display text-2xl md:text-3xl">{section.heading}</h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted md:text-lg">
                {section.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
          {section.figure ? (
            <div className="mt-8 max-w-4xl">
              <Placeholder
                label={section.figure.label}
                caption={section.figure.caption}
                tone={section.figure.tone}
                ratio={section.figure.ratio}
              />
            </div>
          ) : null}
        </section>
      ))}

      {item.ai ? (
        <section className="container-page mt-16 md:mt-20">
          <Reveal>
            <div className="rounded-2xl border border-accent/30 bg-accent-muted/50 p-8 shadow-card md:p-10">
              <p className="text-sm font-semibold text-accent">AI workflow</p>
              <h2 className="display mt-2 text-2xl md:text-3xl">{item.ai.title}</h2>
              <div className="mt-5 max-w-2xl space-y-4 text-base leading-relaxed text-muted">
                {item.ai.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

      {next ? (
        <section className="container-page mt-20 md:mt-24">
          <p className="section-label mb-4">Next project</p>
          <Link
            href={`/work/${next.slug}`}
            className="group surface-card-interactive flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8"
          >
            <div>
              <span className="text-sm font-medium text-muted">{next.client}</span>
              <h2 className="display mt-1 text-xl transition-colors group-hover:text-accent md:text-2xl">
                {next.title}
              </h2>
            </div>
            <span className="text-sm font-medium text-accent">View case study →</span>
          </Link>
        </section>
      ) : null}
    </article>
  );
}
