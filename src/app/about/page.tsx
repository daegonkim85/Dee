import type { Metadata } from "next";
import Link from "next/link";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: site.meta.description,
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      <section className="container-page pt-20 md:pt-28">
        <p className="eyebrow mb-6">
          About {site.name} · {site.location}
        </p>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <h1 className="display text-4xl leading-[1.02] md:text-6xl">
            {about.headline}
          </h1>
          <div className="max-w-xl space-y-5 text-lg leading-relaxed text-muted">
            {about.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href={`mailto:${site.email}`}
                className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
              >
                Email Dee ↗
              </Link>
              <Link
                href={site.resumeUrl}
                className="link-underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé ↗
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page mt-28">
        <div className="hairline grid gap-10 pt-12 md:grid-cols-[0.4fr_1fr]">
          <p className="eyebrow pt-1">Experience</p>
          <ul className="max-w-2xl">
            {about.experience.map((job, i) => (
              <Reveal as="li" key={job.company} delay={i * 0.04}>
                <div className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                  <div>
                    <div className="text-lg font-medium">{job.company}</div>
                    <div className="text-sm text-muted">{job.role}</div>
                  </div>
                  <span className="whitespace-nowrap font-mono text-sm text-faint">
                    {job.period}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page mt-28">
        <div className="hairline grid gap-10 pt-12 md:grid-cols-[0.4fr_1fr]">
          <p className="eyebrow pt-1">Approach</p>
          <div className="grid max-w-3xl gap-10 sm:grid-cols-3">
            {about.approach.map((a) => (
              <Reveal key={a.title}>
                <div>
                  <h3 className="text-lg font-medium">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container-page mt-28">
        <div className="hairline grid gap-10 pt-12 md:grid-cols-[0.4fr_1fr]">
          <p className="eyebrow pt-1">Skills &amp; tools</p>
          <div className="grid max-w-3xl gap-10 sm:grid-cols-3">
            <SkillGroup title="Design" items={about.skills.design} />
            <SkillGroup title="AI" items={about.skills.ai} accent />
            <SkillGroup title="Tools" items={about.skills.tools} />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillGroup({
  title,
  items,
  accent,
}: {
  title: string;
  items: readonly string[];
  accent?: boolean;
}) {
  return (
    <div>
      <h3 className={`text-sm font-medium ${accent ? "text-accent" : ""}`}>
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
