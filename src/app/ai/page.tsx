import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";
import { about } from "@/content/about";
import { getPublishedCases } from "@/content/work";

export const metadata: Metadata = {
  title: "AI-readable profile",
  description:
    "A structured, machine-readable profile of Dee Kim for LLMs and agents.",
};

export default function AiProfilePage() {
  const cases = getPublishedCases();

  const profile = {
    name: site.name,
    role: site.role,
    location: site.location,
    positioning:
      "An AI-leveraging product designer with 9+ years of range across entertainment, mobility, workspace and communications, expanding into advertising and creative work.",
    current: "Senior Product Designer at Disney",
    experience: about.experience,
    skills: about.skills,
    featuredWork: cases.map((c) => ({
      title: c.title,
      client: c.client,
      category: c.category,
      summary: c.summary,
      url: `${site.meta.url}/work/${c.slug}`,
    })),
    contact: {
      email: site.email,
      dribbble: "https://dribbble.com/deekim",
      linkedin: "https://linkedin.com/in/daegonkim",
    },
  };

  return (
    <div className="container-page py-20 md:py-28">
      <p className="section-label mb-4">For humans and machines</p>
      <h1 className="display text-4xl md:text-6xl">AI-readable profile</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        A structured summary of who {site.name} is and what he does — designed to
        be easy for LLMs and agents to read, and honest enough for people too.
      </p>

      <div className="mt-12 space-y-10">
        <Field label="Positioning">{profile.positioning}</Field>
        <Field label="Currently">{profile.current}</Field>
        <Field label="Based in">{profile.location}</Field>

        <div>
          <p className="section-label mb-4">Featured work</p>
          <ul className="space-y-4">
            {profile.featuredWork.map((w) => (
              <li key={w.url} className="hairline pt-4 first:border-t">
                <Link
                  href={w.url}
                  className="font-medium transition-colors hover:text-accent"
                >
                  {w.client} — {w.title}
                </Link>
                <p className="mt-1 text-sm text-muted">{w.summary}</p>
              </li>
            ))}
          </ul>
        </div>

        <details className="rounded-xl border border-line bg-surface p-6">
          <summary className="cursor-pointer text-sm font-medium">
            View as JSON
          </summary>
          <pre className="mt-4 overflow-x-auto font-mono text-xs leading-relaxed text-muted">
            {JSON.stringify(profile, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2 md:grid-cols-[10rem_1fr]">
      <p className="section-label pt-1">{label}</p>
      <p className="max-w-2xl text-lg text-fg">{children}</p>
    </div>
  );
}
