import Link from "next/link";
import type { CaseStudy } from "@/content/work";
import { CoverMedia } from "@/components/cover-media";

export function WorkCard({
  item,
  featured,
}: {
  item: CaseStudy;
  index?: number;
  featured?: boolean;
}) {
  const inner = (
    <article className="flex h-full flex-col overflow-hidden">
      <div className="overflow-hidden rounded-t-2xl">
        <CoverMedia
          cover={item.cover}
          ratio={featured ? "wide" : "wide"}
          className="[&_figure>div]:rounded-none [&_figure>div]:border-0 [&_figure>div]:shadow-none"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-fg">{item.client}</span>
          <span className="text-faint" aria-hidden="true">
            ·
          </span>
          <span className="text-sm text-muted">{item.year}</span>
          {item.comingSoon ? (
            <span className="ml-auto rounded-md bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent">
              Coming soon
            </span>
          ) : null}
        </div>
        <h3 className="text-lg font-semibold leading-snug text-fg transition-colors group-hover:text-accent">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted">
          {item.summary}
        </p>
        <p className="mt-4 text-xs font-medium text-faint">{item.category}</p>
      </div>
    </article>
  );

  if (item.comingSoon) {
    return (
      <div className="surface-card h-full opacity-90">{inner}</div>
    );
  }

  return (
    <Link
      href={`/work/${item.slug}`}
      className="group surface-card-interactive block h-full hover:-translate-y-0.5"
    >
      {inner}
    </Link>
  );
}
