"use client";

import Link from "next/link";
import { useState } from "react";

import { works } from "@/data/works";
import WorkCard from "@/components/WorkCard";

const featuredWorkOrder = [
  "Nomade auf Zeit",
  "What Moves You",
  "Yek Dast Seda Nadarad",
];
const featuredWorks = featuredWorkOrder
  .map((title) => works.find((work) => work.title === title && work.featured))
  .filter((work) => work !== undefined);

export default function Works() {
  const [activeWorkTitle, setActiveWorkTitle] = useState<string | null>(null);

  return (
    <section
      id="works"
      className="relative overflow-hidden border-b border-white/10 
      bg-[linear-gradient(
        180deg,
        #080706_0%,
        #090807_10%,
        #0a0908_22%,
        #0b0b0a_38%,
        #11100f_72%,
        #171410_100%
      )] px-6 pb-20 pt-10 sm:px-10 lg:px-16"
          >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,7,6,0.14)_0%,rgba(17,16,15,0.05)_18%,transparent_46%),radial-gradient(ellipse_at_18%_16%,rgba(201,164,106,0.018),transparent_36%),radial-gradient(ellipse_at_78%_42%,rgba(44,49,58,0.045),transparent_44%),radial-gradient(ellipse_at_50%_86%,rgba(20,18,16,0.26),transparent_58%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025] mix-blend-soft-light [background-image:repeating-radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.32)_0,rgba(255,255,255,0.32)_1px,transparent_1px,transparent_7px)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:mb-14 lg:grid-cols-[0.7fr_1fr]">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500 lg:col-start-2">
            SELECTED WORKS
          </p>

          <div className="lg:col-start-2">
            <h2 className="max-w-3xl text-3xl font-light leading-tight text-neutral-50 sm:text-4xl">
              Stories carried through
              <br />
              sound, image, and atmosphere.
            </h2>

            <p className="mt-5 max-w-xl text-sm font-light leading-7 text-neutral-400">
              Each work begins with a question, an emotion,
              <br />
              or a fragment of experience, then unfolds through
              <br />
              sound, image, performance, or collaboration.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-10 md:gap-12">
          {featuredWorks.map((work, index) => (
            <WorkCard
              key={work.title}
              activeWorkTitle={activeWorkTitle}
              index={index}
              setActiveWorkTitle={setActiveWorkTitle}
              work={work}
            />
          ))}
        </div>

        <div className="mt-12 grid border-t border-white/10 pt-6 lg:grid-cols-[0.7fr_1fr]">
          <Link
            href="/works"
            className="inline-flex text-xs uppercase tracking-[0.26em] text-neutral-500 transition hover:text-[#C9A46A] lg:col-start-2 lg:translate-x-2.5"
          >
            View all works &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
