type KamanchehOption = "A" | "B" | "C" | "D" | "E" | "F" | "G";

// Temporary Kamancheh placement prototype.
// Switch between "A", "B", "C", "D", "E", "F", and "G" here.
const ACTIVE_KAMANCHEH_OPTION: KamanchehOption = "G";

export default function Hero() {
  const isOptionA = ACTIVE_KAMANCHEH_OPTION === "A";
  const isOptionB = ACTIVE_KAMANCHEH_OPTION === "B";
  const isOptionC = ACTIVE_KAMANCHEH_OPTION === "C";
  const isOptionD = ACTIVE_KAMANCHEH_OPTION === "D";
  const isOptionE = ACTIVE_KAMANCHEH_OPTION === "E";
  const isOptionF = ACTIVE_KAMANCHEH_OPTION === "F";
  const isOptionG = ACTIVE_KAMANCHEH_OPTION === "G";
  const isLeftPosterOption = isOptionE || isOptionF || isOptionG;
  const usesOptionFTypography = isOptionF || isOptionG;

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0a] text-neutral-100"
      aria-label="Mori Tahmasebi cinematic portfolio hero"
    >
      <img
        src="/images/hero/vienna-blue-hour.webp"
        alt=""
        className="absolute left-1/2 top-1/2 z-0 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover object-[40%_42%] sm:left-[52%] sm:top-[40%] sm:h-[122%] sm:w-auto sm:max-w-none sm:object-contain"
        data-image-layer="vienna-city-photo"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute right-[26%] top-[49%] z-[1] h-[2px] w-[3px] rounded-[1px] bg-[#C9A46A] opacity-[0.24] blur-[1px] shadow-[0_0_10px_3px_rgba(201,164,106,0.16)] sm:right-[27%] sm:top-[48%] sm:h-[3px] sm:w-[5px] sm:opacity-[0.22] sm:blur-[1.5px]"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_47%,rgba(238,166,92,0.18)_0%,rgba(238,166,92,0.08)_26%,transparent_50%),radial-gradient(ellipse_at_72%_66%,rgba(238,166,92,0.2)_0%,rgba(238,166,92,0.08)_28%,transparent_52%),radial-gradient(ellipse_at_30%_20%,rgba(168,145,190,0.058)_0%,rgba(168,145,190,0.026)_28%,transparent_56%),linear-gradient(112deg,rgba(8,8,8,0.68)_0%,rgba(9,9,9,0.58)_34%,rgba(13,12,12,0.5)_64%,rgba(7,7,7,0.66)_100%)]"
        aria-hidden="true"
      />

      <div
        className="hero-film-grain absolute inset-0 z-20 opacity-[0.16] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-30 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.1)_43%,rgba(5,5,5,0.69)_100%),linear-gradient(to_bottom,rgba(7,7,7,0.62)_0%,rgba(9,8,9,0.12)_32%,rgba(8,7,8,0.72)_100%)]"
        aria-hidden="true"
      />

      <nav className="relative z-40 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 text-[0.68rem] uppercase tracking-[0.32em] text-white/72 sm:px-10 lg:px-16">
        <a href="#hero" className="text-white/78 transition hover:text-[#C9A46A]">
          Mori
        </a>
        <div className="flex items-center gap-6 sm:gap-10">
          <a className="transition hover:text-[#C9A46A]" href="/works">
            Work
          </a>
          <a className="transition hover:text-[#C9A46A]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#C9A46A]" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <div
        className={`relative z-40 mx-auto flex min-h-[calc(100vh-4.75rem)] w-full max-w-7xl flex-col px-6 pt-12 sm:px-10 lg:px-16 ${
          isOptionD || isLeftPosterOption
            ? isLeftPosterOption
              ? "items-start justify-center pb-10 text-left"
              : "items-center justify-center pb-10 text-center"
            : "justify-end pb-8 sm:pb-10"
        }`}
      >
        <div
          className={
            isOptionD
              ? "w-full max-w-6xl"
              : isLeftPosterOption
                ? "w-full max-w-6xl pl-[clamp(0rem,8vw,7rem)]"
                : "max-w-6xl"
          }
        >
          <p
            className={`mb-5 max-w-xs translate-y-2 text-[0.68rem] uppercase leading-5 tracking-[0.34em] text-neutral-300/75 sm:max-w-none ${
              isOptionD
                ? "mx-auto sm:mb-6"
                : isLeftPosterOption
                  ? "sm:mb-6"
                  : ""
            }`}
          >
            BASED IN VIENNA
          </p>
          {/* isolate keeps Option G's desktop -z layer behind the wordmark text but inside this hero stack. */}
          <div
            className={
              isOptionD
                ? "relative isolate inline-block -translate-x-[clamp(0.25rem,1.6vw,1.25rem)] text-left"
                : isOptionE
                  ? "relative isolate inline-block -translate-y-[clamp(2.5rem,5vh,3.75rem)] text-left"
                : usesOptionFTypography
                  ? "relative isolate inline-block translate-y-[calc(5rem-clamp(2.5rem,5vh,3.75rem))] text-left"
                : "relative isolate"
            }
          >
            {/* Option C: clean wordmark with a separate luxury signature mark. */}
            {isOptionC && (
              <img
                src="/images/branding/Kamancheh-i-768.png"
                alt=""
                className="absolute -right-1 top-[10%] h-[1.26em] w-auto opacity-80 drop-shadow-[0_0_14px_rgba(201,164,106,0.25)] sm:right-[8%] sm:top-[7%]"
                aria-hidden="true"
              />
            )}

            <h1
              className={`font-semibold uppercase text-neutral-50 ${
                isOptionD
                  ? "text-[clamp(4.65rem,15vw,13.5rem)] leading-[0.66] tracking-[-0.018em]"
                  : isOptionE
                    ? "text-[clamp(3.9rem,11.35vw,10.35rem)] leading-[0.68] tracking-[-0.014em]"
                    : usesOptionFTypography
                      ? "text-[clamp(3.6rem,10.45vw,9.55rem)] leading-[0.68] tracking-[-0.014em]"
                  : "text-[clamp(4.2rem,13.5vw,12rem)] leading-[0.72] tracking-normal"
              }`}
            >
              {/* Option A: Kamancheh replaces the final I in MORI. */}
              {isOptionA ? (
                <span className="block">
                  Mor
                  <img
                    src="/images/branding/Kamancheh-i-768.png"
                    alt=""
                    className="ml-[0.01em] inline-block h-[1.1em] w-auto -translate-x-6 translate-y-[calc(0.075em+24px)] align-baseline drop-shadow-[0_0_12px_rgba(201,164,106,0.24)]"
                    aria-hidden="true"
                  />
                </span>
              ) : (
                <span
                  className={
                    isOptionD
                      ? "block -translate-x-[7px] text-left"
                      : isOptionG
                        // Mobile remains relative for the original MORI-anchored placement; sm+ releases to the full wordmark wrapper.
                        ? "relative block w-fit sm:static"
                      : isLeftPosterOption
                        ? "relative block w-fit"
                      : "block"
                  }
                >
                  MORI
                  {isOptionE && (
                    <img
                      src="/images/branding/Kamancheh-i-768.png"
                      alt=""
                      className="pointer-events-none absolute left-[calc(100%+clamp(2.5rem,4vw,3.75rem))] top-[66%] h-[clamp(8.75rem,24vw,14rem)] w-auto max-w-none -translate-y-1/2 select-none opacity-[0.78] drop-shadow-[0_0_26px_rgba(201,164,106,0.27)] sm:h-[clamp(11rem,19vw,16rem)] lg:h-[clamp(13.75rem,18vw,17.5rem)]"
                      aria-hidden="true"
                    />
                  )}
                  {isOptionG && (
                    <img
                      src="/images/branding/Kamancheh-i-768.png"
                      alt=""
                      // Unprefixed classes preserve mobile Option G; sm+ centers a larger, subtle mark behind MORI TAHMASEBI.
                      className="pointer-events-none absolute left-[calc(100%-0.04em-17px)] top-[calc(72%-19px)] h-[clamp(7.6rem,21vw,12rem)] w-auto max-w-none -translate-y-1/2 select-none opacity-[0.72] brightness-[1.20] drop-shadow-[0_0_22px_rgba(201,164,106,0.2)] sm:left-[calc(50%-300px)] sm:top-[calc(50%+18px)] sm:-z-10 sm:h-[clamp(17.01rem,35.91vw,30.24rem)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:opacity-[0.46] lg:h-[clamp(22.68rem,32.13vw,35.91rem)]"
                      aria-hidden="true"
                    />
                  )}
                </span>
              )}

              {isOptionF && (
                <img
                  src="/images/branding/Kamancheh-i-768.png"
                  alt=""
                  className="pointer-events-none absolute left-[calc(100%+clamp(4rem,8vw,7rem))] top-[51%] h-[clamp(8.5rem,22vw,13.5rem)] w-auto max-w-none -translate-y-1/2 select-none opacity-[0.88] drop-shadow-[0_0_26px_rgba(201,164,106,0.27)] sm:h-[clamp(11rem,18vw,16rem)] lg:h-[clamp(13.75rem,17vw,17.5rem)]"
                  aria-hidden="true"
                />
              )}

              {/* Option B/D: the final I in TAHMASEBI owns the Kamancheh alignment. */}
              <span
                className={`block font-medium text-neutral-200/92 ${
                  isOptionD
                    ? "mt-5 translate-y-0.5 text-[0.48em] leading-[0.76] tracking-[-0.008em] sm:mt-6"
                    : isOptionE
                      ? "mt-5 text-[0.57em] leading-[0.78] tracking-[-0.008em] sm:mt-6"
                      : usesOptionFTypography
                        ? "mt-5 text-[0.6em] leading-[0.78] tracking-[-0.008em] sm:mt-6"
                    : "mt-4 text-[0.49em] leading-[0.82] sm:mt-5"
                }`}
              >
                {isOptionB || isOptionD ? (
                  <>
                    Tahmaseb
                    <span className="relative inline-block">
                      i
                      <img
                        src="/images/branding/Kamancheh-i-768.png"
                        alt=""
                        className={
                          isOptionD
                            ? "pointer-events-none absolute bottom-[calc(0.82em-1.4375rem)] left-1/2 h-[clamp(7.25rem,31vw,12rem)] w-auto max-w-none -translate-x-1/2 select-none opacity-[0.76] drop-shadow-[0_0_24px_rgba(201,164,106,0.27)] sm:bottom-[calc(0.84em-1.9375rem)] sm:h-[clamp(9rem,25vw,16rem)] lg:h-[clamp(13.75rem,18vw,20rem)]"
                            : "absolute left-1/2 top-[-0.82em] h-[0.84em] w-auto -translate-x-1/2 opacity-86 drop-shadow-[0_0_10px_rgba(201,164,106,0.22)]"
                        }
                        aria-hidden="true"
                      />
                    </span>
                  </>
                ) : (
                  "TAHMASEBI"
                )}
              </span>
            </h1>
          </div>
        </div>

        <div
          className={`flex flex-col gap-4 pt-5 text-xs uppercase tracking-[0.28em] text-neutral-300/65 ${
            isOptionD || isLeftPosterOption
              ? isLeftPosterOption
                ? "mt-12 w-full max-w-5xl pl-[clamp(0rem,8vw,7rem)] sm:mt-14"
                : "mt-12 w-full max-w-5xl items-center sm:mt-14"
              : "mt-10 sm:flex-row sm:items-end sm:justify-between lg:mt-12"
          }`}
        >
          <p>
            COMPOSER
            <br />
            AUDIOVISUAL STORYTELLER
          </p>
          <p
            className={`max-w-sm leading-5 normal-case tracking-normal text-neutral-300/64 ${
              isOptionD
                ? "text-center"
                : isLeftPosterOption
                  ? "text-left"
                  : "sm:translate-y-3 sm:text-right"
            }`}
          >
            Creating cinematic sound worlds
            <br />
            shaped by memory, identity,
            <br />
            and cultural belonging.
          </p>
        </div>
      </div>
    </section>
  );
}
