import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="container-page flex flex-col gap-10 py-16 md:flex-row md:items-end md:justify-between">
        <div className="max-w-md">
          <p className="eyebrow mb-4">Let&apos;s talk</p>
          <h2 className="display text-3xl md:text-4xl">
            Have a product or a brand that needs a point of view?
          </h2>
          <Link
            href={`mailto:${site.email}`}
            className="link-underline mt-6 text-lg"
          >
            {site.email} ↗
          </Link>
        </div>

        <div className="flex flex-col gap-4 text-sm">
          <ul className="flex flex-wrap gap-6">
            {site.social.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="text-muted transition-colors hover:text-accent"
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {s.label} ↗
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-faint">
            © {new Date().getFullYear()} {site.name}. Based in {site.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}
