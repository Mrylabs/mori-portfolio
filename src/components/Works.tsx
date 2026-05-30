import type { CSSProperties } from "react";

import { works } from "../data/works";

const indexedWorks = works.map((work, index) => ({ work, index }));

export default function Works() {
  const leftColumnWorks = indexedWorks.filter(({ index }) => index % 2 === 0);
  const rightColumnWorks = indexedWorks.filter(({ index }) => index % 2 === 1);

  return (
    <section
      id="works"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-neutral-950 via-neutral-900 to-stone-900 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_24%,rgba(238,166,92,0.075),transparent_34%),radial-gradient(ellipse_at_78%_46%,rgba(168,145,190,0.052),transparent_38%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055] mix-blend-soft-light [background-image:repeating-radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.28)_0,rgba(255,255,255,0.28)_1px,transparent_1px,transparent_7px)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-20 grid gap-6 lg:grid-cols-[0.7fr_1fr]">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Selected Works
          </p>

          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-tight text-neutral-50 sm:text-5xl">
              Music, film score, and visual fragments gathered into one
              cinematic archive.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-6 text-neutral-400">
              A curated selection of finished works and quiet process materials:
              covers, frame grabs, references, notes, and atmospheric traces.
            </p>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 md:gap-20 lg:gap-28">
          <div className="flex flex-col gap-12 md:gap-20">
            {leftColumnWorks.map(({ work, index }) => {
              return (
                <WorkCard key={work.title} index={index} work={work} />
              );
            })}
          </div>

          <div className="flex flex-col gap-12 md:mt-40 md:gap-20 lg:mt-48">
            {rightColumnWorks.map(({ work, index }) => {
              return (
                <WorkCard key={work.title} index={index} work={work} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

type WorkCardProps = {
  index: number;
  work: (typeof works)[number];
};

function WorkCard({ index, work }: WorkCardProps) {
  return (
    <article
      className="work-card-reveal group relative min-h-[24rem] bg-white/[0.025] p-6 transition duration-500 hover:-translate-y-1 hover:bg-white/[0.045] sm:p-8"
      style={
        {
          "--reveal-start": `${index * 4}%`,
        } as CSSProperties
      }
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/12 transition duration-500 group-hover:bg-amber-100/25" />

      <div className="flex min-h-[20rem] flex-col gap-8">
        <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-5">
          <span className="text-sm text-neutral-500">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-right text-xs uppercase tracking-[0.25em] text-neutral-500">
            {work.category}
          </span>
        </div>

        <div
          className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[radial-gradient(ellipse_at_70%_20%,rgba(238,166,92,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.018)_35%,rgba(0,0,0,0.28))]"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.035),transparent_42%,rgba(0,0,0,0.32))]" />
          <div className="hero-film-grain absolute inset-0 opacity-[0.12] mix-blend-soft-light" />
          <div className="absolute inset-x-6 bottom-5 h-px bg-white/10" />
        </div>

        <div className="mt-1">
          <h3 className="text-2xl font-medium text-neutral-50 transition duration-500 group-hover:text-white">
            {work.title}
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-400">
            {work.description}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {(work.archiveItems ?? []).map((item) => (
              <span
                key={item}
                className="border border-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-neutral-500 transition duration-500 group-hover:border-white/15 group-hover:text-neutral-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
