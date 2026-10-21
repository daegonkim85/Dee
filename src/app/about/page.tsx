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
    <div className="pb-20">
      <section className="container-page pt-16 md:pt-22">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <p className="section-label mb-3">
              {site.name} · {site.location}
            </p>
            <h1 className="display text-3xl md:text-4xl lg:text-[2.75rem]">
              {about.headline}
            </h1>
          </div>
          <div className="surface-card p-6 md:p-8">
            <div className="space-y-4 text-base leading-relaxed text-muted">
              {about.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
              <Link href={`mailto:${site.email}`} className="btn-primary">
                Email Dee
              </Link>
              <Link
                href={site.resumeUrl}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download résumé
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page mt-16 md:mt-20">
        <h2 className="section-label mb-6">Experience</h2>
        <ul className="divide-y divide-line rounded-2xl border border-line bg-surface shadow-card">
          {about.experience.map((job, i) => (
            <Reveal as="li" key={job.company} delay={i * 0.03}>
              <div className="flex flex-col gap-1 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-6">
                <div>
                  <div className="font-semibold text-fg">{job.company}</div>
                  <div className="text-sm text-muted">{job.role}</div>
                </div>
                <span className="font-mono text-sm text-faint">{job.period}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-page mt-16 md:mt-20">
        <h2 className="section-label mb-6">Approach</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {about.approach.map((a) => (
            <Reveal key={a.title}>
              <div className="surface-card h-full p-6">
                <h3 className="font-semibold text-fg">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contact" className="container-page mt-16 md:mt-20">
        <h2 className="section-label mb-6">Skills &amp; tools</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <SkillGroup title="Design" items={about.skills.design} />
          <SkillGroup title="AI" items={about.skills.ai} accent />
          <SkillGroup title="Tools" items={about.skills.tools} />
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
    <div className="surface-card p-6">
      <h3
        className={`text-sm font-semibold ${accent ? "text-accent" : "text-fg"}`}
      >
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
