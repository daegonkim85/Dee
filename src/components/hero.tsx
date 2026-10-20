"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/content/site";

const brands = ["Disney", "Turo", "WeWork", "RingCentral", "Verizon"];

const words = ["Products", "with", "range.", "Brands", "with", "a", "voice."];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="container-page relative pt-20 pb-24 md:pt-28 md:pb-32">
      <motion.p
        className="eyebrow mb-8"
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {site.name} · {site.role} · {site.location}
      </motion.p>

      <h1 className="display max-w-5xl text-[2.75rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-8xl">
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            className={`mr-[0.25em] inline-block ${
              word === "range." || word === "voice."
                ? "text-accent"
                : ""
            }`}
            initial={reduce ? false : { opacity: 0, y: "0.3em" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        I&apos;m a product designer who ships across industries — Disney, Turo,
        WeWork, RingCentral, Verizon — and I&apos;m expanding into advertising and
        creative, with AI tooling built into how I work.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap items-center gap-4"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.85 }}
      >
        <Link
          href="/work"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
        >
          Explore my work ↓
        </Link>
        <Link
          href="/about"
          className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Meet Dee ↗
        </Link>
      </motion.div>

      <motion.div
        className="mt-16 hairline pt-8"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <p className="eyebrow mb-4">Trusted across</p>
        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          {brands.map((b) => (
            <li key={b} className="font-medium">
              {b}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
