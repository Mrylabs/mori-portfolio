"use client";

import type { CSSProperties, MouseEvent } from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { works, type Work } from "../data/works";

const featuredWorks = works.filter((work) => work.featured);

function formatTime(value: number) {
  if (!Number.isFinite(value)) {
    return "--:--";
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
      className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(180deg,#0b0b0a_0%,#11100f_26%,#101115_56%,#171410_100%)] px-6 pb-20 pt-14 sm:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(92,62,35,0.12)_0%,rgba(30,25,22,0.06)_20%,transparent_46%),radial-gradient(ellipse_at_18%_16%,rgba(238,166,92,0.07),transparent_35%),radial-gradient(ellipse_at_78%_42%,rgba(42,55,78,0.09),transparent_42%),radial-gradient(ellipse_at_50%_85%,rgba(24,21,19,0.42),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-soft-light [background-image:repeating-radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.32)_0,rgba(255,255,255,0.32)_1px,transparent_1px,transparent_7px)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-5 lg:mb-16 lg:grid-cols-[0.7fr_1fr]">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            SELECTED WORKS
          </p>

          <div>
            <h2 className="max-w-3xl text-3xl font-light leading-tight text-neutral-50 sm:text-4xl">
              Stories carried through
              <br />
              sound, image, and atmosphere.
            </h2>

            <p className="mt-5 max-w-2xl text-sm font-light leading-6 text-neutral-400">
              Each work begins with a question,
              <br />
              an emotion, or a fragment of experience,
              <br />
              then unfolds through sound,
              <br />
              image, performance, or collaboration.
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
  const [duration, setDuration] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAudioUnavailable, setIsAudioUnavailable] = useState(false);
  const isActive = activeWorkTitle === work.title;
  const isImageFirst = index % 2 === 0;
  const imagePosition =
    work.title === "Dark"
      ? "center 42%"
      : work.title === "Offline"
        ? "center 52%"
        : "center center";
  const hasDuration = duration !== null && duration > 0;
  const progress = hasDuration ? (currentTime / duration) * 100 : 0;
  const durationLabel = hasDuration ? formatTime(duration) : "--:--";

  const logAudioError = (
    audio: HTMLAudioElement | null,
    failedPlayPromise?: unknown,
  ) => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    const mediaError = audio?.error;
    const failedPlayError =
      failedPlayPromise instanceof Error ? failedPlayPromise : null;

    const details = {
      title: work.title,
      audioSrc: work.audioSrc ?? "(missing audioSrc)",
      errorCode: mediaError?.code ?? null,
      errorMessage: mediaError?.message || failedPlayError?.message || null,
      currentSrc: audio?.currentSrc || null,
      failedPlayErrorName: failedPlayError?.name ?? null,
    };

    console.error("[Works audio]", details);
  };

  const markAudioUnavailable = (
    audio: HTMLAudioElement | null,
    failedPlayPromise?: unknown,
  ) => {
    logAudioError(audio, failedPlayPromise);
    audio?.pause();
    setIsAudioUnavailable(true);
    setIsPlaying(false);

    if (isActive || failedPlayPromise) {
      setActiveWorkTitle(null);
    }
  };

  const updateDuration = (audio: HTMLAudioElement) => {
    setDuration(Number.isFinite(audio.duration) ? audio.duration : null);
  };

  const handleAudioLoadStart = () => {
    setCurrentTime(0);
    setDuration(null);
    setIsAudioUnavailable(false);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isActive || !audioRef.current) {
      return;
    }

    audioRef.current.pause();
    setIsPlaying(false);
  }, [isActive]);

  useEffect(() => {
    audioRef.current?.load();
  }, [work.audioSrc]);

  const playAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    setActiveWorkTitle(work.title);

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      markAudioUnavailable(audio, error);
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

  const loadAudioMetadata = () => {
    const audio = audioRef.current;

    if (!audio || duration !== null) {
      return;
    }

    audio.load();
  };

  const seekAudio = (event: MouseEvent<HTMLButtonElement>) => {
    const audio = audioRef.current;
    const target = event.currentTarget;

    if (!audio || !hasDuration) {
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
      className="work-card-reveal group relative grid justify-center gap-5 transition duration-500 hover:-translate-y-0.5 md:grid-cols-[minmax(360px,520px)_minmax(360px,480px)] md:items-center md:gap-6 lg:gap-8"
      style={
        {
          "--reveal-start": `${index * 4}%`,
        } as CSSProperties
      }
    >
      <div
        className={`relative w-full max-w-[480px] ${
          isImageFirst ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="flex max-w-[480px] items-center justify-between gap-6 text-[0.62rem] uppercase tracking-[0.26em] text-neutral-600">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span className="text-right">{work.category}</span>
        </div>

        <div className="mt-3 max-w-[480px]">
          <h3 className="text-[1.85rem] font-normal leading-none text-neutral-50 transition duration-500 group-hover:text-white sm:text-[2.15rem]">
            {work.title}
          </h3>
        </div>

        <p className="mt-4 max-w-md text-sm font-light leading-6 text-neutral-500">
          {work.description}
        </p>

        {work.audioSrc && (
          <div
            className="mt-4 max-w-[480px]"
            onMouseEnter={loadAudioMetadata}
            onFocus={loadAudioMetadata}
          >
            {/* Browser-playable media cannot be fully protected from download. This player only discourages casual downloading. */}
            <audio
              ref={audioRef}
              controlsList="nodownload"
              preload="metadata"
              src={work.audioSrc}
              onContextMenu={(event) => event.preventDefault()}
              onDurationChange={(event) => updateDuration(event.currentTarget)}
              onEnded={() => {
                setCurrentTime(0);
                setIsPlaying(false);
                setActiveWorkTitle(null);
              }}
              onLoadStart={handleAudioLoadStart}
              onLoadedMetadata={(event) => updateDuration(event.currentTarget)}
              onError={(event) => markAudioUnavailable(event.currentTarget)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              onTimeUpdate={(event) =>
                setCurrentTime(event.currentTarget.currentTime)
              }
            />

            <div className="text-[0.6rem] uppercase tracking-[0.18em] text-neutral-600">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="flex min-h-7 items-center gap-2 text-left font-light tracking-[0.24em] text-neutral-300 transition hover:text-white"
                  onClick={togglePlayback}
                >
                  <span className="w-4 text-[0.62rem] tracking-normal text-neutral-400">
                    {isPlaying ? "\u275A\u275A" : "\u25B6"}
                  </span>
                  <span>{isPlaying ? "PAUSE" : "LISTEN"}</span>
                </button>
              </div>

              <button
                type="button"
                className="group/progress relative ml-6 mt-1 h-6 w-[calc(80%-1.5rem)] cursor-pointer"
                aria-label={`Seek ${work.title}`}
                onClick={seekAudio}
              >
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/15 transition-colors group-hover/progress:bg-white/22" />
                <span
                  className="absolute left-0 top-1/2 h-[2px] -translate-y-1/2 bg-neutral-200/75 transition-[width]"
                  style={{ width: `${progress}%` }}
                />
                <span
                  className={`absolute top-1/2 size-1 -translate-y-1/2 rounded-full bg-neutral-200/80 transition-opacity group-hover/progress:opacity-100 ${
                    isPlaying ? "opacity-85" : "opacity-55"
                  }`}
                  style={{ left: `calc(${progress}% - 2px)` }}
                />
              </button>

              <div className="-mt-2 ml-6 flex w-[calc(80%-1.5rem)] items-center justify-between font-light tabular-nums tracking-[0.14em] text-neutral-600">
                <span>{formatTime(currentTime)}</span>
                <span>{durationLabel}</span>
              </div>

              {isAudioUnavailable && (
                <p
                  className="ml-6 mt-2 text-[0.58rem] font-light normal-case tracking-[0.08em] text-neutral-600"
                  aria-live="polite"
                >
                  Audio preview unavailable.
                </p>
              )}
            </div>
          </div>
        )}

        <div className="mt-4 flex max-w-[480px] flex-wrap gap-x-3 gap-y-1">
          {(work.archiveItems ?? []).map((item) => (
            <span
              key={item}
              className="text-[0.56rem] uppercase tracking-[0.16em] text-neutral-500/80 transition duration-500 group-hover:text-neutral-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <figure
        className={`relative w-full max-w-[520px] justify-self-center lg:w-[520px] ${
          isImageFirst ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
          <Image
            src={work.image}
            alt={`${work.title} artwork`}
            fill
            sizes="(min-width: 1024px) 520px, (min-width: 768px) 38vw, calc(100vw - 3rem)"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]"
            style={{ objectPosition: imagePosition }}
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
