"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 shadow-nav backdrop-blur-md">
      <div className="container-page flex h-[3.75rem] items-center justify-between gap-6">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-fg"
        >
          {site.name}
        </Link>

        <nav className="flex items-center gap-2 sm:gap-4" aria-label="Main">
          <ul className="flex items-center gap-1 rounded-xl border border-line bg-surface p-1 shadow-sm">
            {site.nav.map((item) => {
              const active =
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors ${
                      active
                        ? "bg-bg text-fg shadow-sm"
                        : "text-muted hover:text-fg"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link href={site.cta.href} className="btn-primary hidden px-4 py-2 sm:inline-flex">
            {site.cta.label}
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
