"use client";

import type { CSSProperties, MouseEvent } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { works, type Work } from "../data/works";

const featuredWorks = works.filter((work) => work.featured);

function formatTime(value: number) {
  if (!Number.isFinite(value)) {
    return "0:00";
  }

  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export default function Works() {
  const [activeWorkTitle, setActiveWorkTitle] = useState<string | null>(null);

  return (
    <section
      id="works"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-neutral-950 via-neutral-900 to-stone-900 px-6 py-20 sm:px-10 lg:px-16"
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
        <div className="mb-14 grid gap-5 lg:mb-16 lg:grid-cols-[0.7fr_1fr]">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Selected Works
          </p>

          <div>
            <h2 className="max-w-3xl text-3xl font-light leading-tight text-neutral-50 sm:text-4xl">
              Music, film score, and visual fragments gathered into one
              cinematic archive.
            </h2>

            <p className="mt-5 max-w-2xl text-sm font-light leading-6 text-neutral-400">
              A curated selection of finished works and quiet process materials:
              covers, frame grabs, references, notes, and atmospheric traces.
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
      </div>
    </section>
  );
}

type WorkCardProps = {
  activeWorkTitle: string | null;
  index: number;
  setActiveWorkTitle: (title: string | null) => void;
  work: Work;
};

function WorkCard({
  activeWorkTitle,
  index,
  setActiveWorkTitle,
  work,
}: WorkCardProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const isActive = activeWorkTitle === work.title;
  const isImageFirst = index % 2 === 0;
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    if (isActive || !audioRef.current) {
      return;
    }

    audioRef.current.pause();
    setIsPlaying(false);
  }, [isActive]);

  const playAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    setActiveWorkTitle(work.title);

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const togglePlayback = () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    void playAudio();
  };

  const seekAudio = (event: MouseEvent<HTMLButtonElement>) => {
    const audio = audioRef.current;
    const target = event.currentTarget;

    if (!audio || duration <= 0) {
      return;
    }

    const bounds = target.getBoundingClientRect();
    const nextProgress = Math.min(
      Math.max((event.clientX - bounds.left) / bounds.width, 0),
      1,
    );

    audio.currentTime = nextProgress * duration;
    setCurrentTime(audio.currentTime);
  };

  return (
    <article
      className="work-card-reveal group relative grid gap-5 transition duration-500 hover:-translate-y-0.5 md:grid-cols-[minmax(320px,0.9fr)_minmax(0,1fr)] md:items-center md:gap-10 lg:gap-16"
      style={
        {
          "--reveal-start": `${index * 4}%`,
        } as CSSProperties
      }
    >
      <div
        className={`relative md:max-w-xl ${
          isImageFirst ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="flex max-w-[480px] items-center justify-between gap-6 text-[0.62rem] uppercase tracking-[0.26em] text-neutral-600">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="text-right">{work.category}</span>
        </div>

        <div className="mt-3 max-w-[480px]">
          <h3 className="text-[1.85rem] font-light leading-none text-neutral-50 transition duration-500 group-hover:text-white sm:text-[2.15rem]">
            {work.title}
          </h3>
        </div>

        <p className="mt-4 max-w-md text-sm font-light leading-6 text-neutral-500">
          {work.description}
        </p>

        {work.audioSrc && (
          <div className="mt-5 max-w-[480px]">
            <audio
              ref={audioRef}
              preload="metadata"
              src={work.audioSrc}
              onDurationChange={(event) =>
                setDuration(event.currentTarget.duration)
              }
              onEnded={() => {
                setCurrentTime(0);
                setIsPlaying(false);
                setActiveWorkTitle(null);
              }}
              onLoadedMetadata={(event) =>
                setDuration(event.currentTarget.duration)
              }
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onTimeUpdate={(event) =>
                setCurrentTime(event.currentTarget.currentTime)
              }
            />

            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 text-[0.6rem] uppercase tracking-[0.17em] text-neutral-600">
              <button
                type="button"
                className="text-left font-light text-neutral-400 transition hover:text-white"
                onClick={togglePlayback}
              >
                {isPlaying ? "Pause" : "▶ Play"}
              </button>

              <button
                type="button"
                className="group/progress relative h-4 cursor-pointer"
                aria-label={`Seek ${work.title}`}
                onClick={seekAudio}
              >
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/10" />
                <span
                  className="absolute left-0 top-1/2 h-px -translate-y-1/2 bg-neutral-300 transition-[width]"
                  style={{ width: `${progress}%` }}
                />
                <span
                  className="absolute top-1/2 size-1 -translate-y-1/2 rounded-full bg-neutral-300 opacity-50 transition-opacity group-hover/progress:opacity-90"
                  style={{ left: `calc(${progress}% - 2px)` }}
                />
              </button>

              <span className="font-light tabular-nums text-neutral-600">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
          </div>
        )}

        <div className="mt-4 flex max-w-[480px] flex-wrap gap-x-3 gap-y-1">
          {(work.archiveItems ?? []).map((item) => (
            <span
              key={item}
              className="text-[0.56rem] uppercase tracking-[0.16em] text-neutral-600 transition duration-500 group-hover:text-neutral-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <figure
        className={`relative w-full max-w-[520px] justify-self-center ${
          isImageFirst
            ? "md:order-1 md:justify-self-start"
            : "md:order-2 md:justify-self-end"
        }`}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900 shadow-[0_12px_34px_rgba(0,0,0,0.18)]">
          <Image
            src={work.image}
            alt={`${work.title} artwork`}
            fill
            sizes="(min-width: 1024px) 520px, (min-width: 768px) 38vw, calc(100vw - 3rem)"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
          />
          <div
            className="hero-film-grain pointer-events-none absolute inset-0 opacity-[0.075] mix-blend-soft-light"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.035),transparent_42%,rgba(0,0,0,0.16))]"
            aria-hidden="true"
          />
        </div>
      </figure>
    </article>
  );
}
