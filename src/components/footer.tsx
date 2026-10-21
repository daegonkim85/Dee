import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-surface/50">
      <div className="container-page grid gap-12 py-16 md:grid-cols-[1.2fr_1fr] md:items-start md:py-20">
        <div className="max-w-lg">
          <p className="section-label mb-3">Let&apos;s talk</p>
          <h2 className="display text-2xl md:text-3xl">
            Open to product design roles, creative partnerships, and thoughtful
            freelance.
          </h2>
          <Link
            href={`mailto:${site.email}`}
            className="link-subtle mt-5 inline-flex text-base"
          >
            {site.email}
          </Link>
        </div>

        <div className="flex flex-col gap-6 md:items-end md:text-right">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:justify-end">
            {site.social.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-sm font-medium text-muted transition-colors hover:text-accent"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                >
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href={site.resumeUrl}
                className="text-sm font-medium text-muted transition-colors hover:text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Résumé
              </Link>
            </li>
          </ul>
          <p className="text-sm text-faint">
            © {new Date().getFullYear()} {site.name} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
