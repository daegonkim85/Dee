"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

const brands = ["Disney", "Turo", "WeWork", "RingCentral", "Verizon"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="container-page relative pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-medium text-muted">
            {site.role} · {site.location}
          </p>
          <h1 className="display max-w-3xl text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem]">
            I design products people{" "}
            <span className="text-accent">actually use</span> — and brands that
            feel clear, not clever for its own sake.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {site.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/work" className="btn-primary">
              View work
            </Link>
            <Link href={site.cta.href} className="btn-secondary">
              {site.cta.label}
            </Link>
          </div>
        </motion.div>

        <motion.aside
          className="surface-card p-6 md:p-8"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Experience highlights"
        >
          <p className="section-label mb-4">Selected clients</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
            {brands.map((b) => (
              <li key={b} className="text-base font-medium text-fg">
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-muted">
            9+ years in product design — systems, 0→1, and internal tools — with
            AI workflows woven into research and delivery.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}
