"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { ThemeToggle } from "@/components/theme-toggle";

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="font-sans text-base font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-6 text-sm">
            {site.nav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`transition-colors hover:text-accent ${
                      active
                        ? "text-fg underline decoration-accent underline-offset-4"
                        : "text-muted"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href={site.cta.href}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90 sm:inline-flex"
          >
            {site.cta.label} ↗
          </Link>

          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
