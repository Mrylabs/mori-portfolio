"use client";

import Link from "next/link";
import { useState } from "react";

import WorkCard from "@/components/WorkCard";
import { works } from "@/data/works";

export default function WorksArchivePage() {
  const [activeWorkTitle, setActiveWorkTitle] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#090908_0%,#10100f_34%,#121316_64%,#171410_100%)] px-6 py-8 text-neutral-100 sm:px-10 lg:px-16">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_18%_12%,rgba(238,166,92,0.08),transparent_34%),radial-gradient(ellipse_at_78%_28%,rgba(42,55,78,0.1),transparent_42%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_28%)]"
        aria-hidden="true"
      />
      <div
        className="hero-film-grain pointer-events-none fixed inset-0 opacity-[0.045] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Link
          href="/"
          className="inline-flex text-xs uppercase tracking-[0.24em] text-neutral-500 transition hover:text-[#C9A46A]"
        >
          &larr; Back home
        </Link>

        <header className="mt-12 border-b border-white/10 pb-10 md:grid md:grid-cols-[0.72fr_1fr] md:gap-10">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Archive
          </p>

          <div className="mt-5 md:mt-0">
            <h1 className="text-5xl font-light leading-none text-neutral-50 sm:text-6xl">
              Works
            </h1>
            <p className="mt-6 max-w-xl text-sm font-light leading-6 text-neutral-400">
              A catalogue of music, film, installation, and collaborative
              projects.
            </p>
          </div>
        </header>

        <section
          className="grid gap-x-10 gap-y-7 py-10 lg:grid-cols-2"
          aria-label="Works archive catalogue"
        >
          {works.map((work, index) => (
            <WorkCard
              key={work.title}
              activeWorkTitle={activeWorkTitle}
              index={index}
              setActiveWorkTitle={setActiveWorkTitle}
              variant="archive"
              work={work}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
