export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0a] text-neutral-100"
      aria-label="Mori Tahmasebi cinematic portfolio hero"
    >
      <div
        className="absolute inset-0 z-0 bg-[url('/images/hero/vienna-blue-hour.png')] bg-cover [background-position:center_84%] sm:[background-position:center_69%]"
        data-image-layer="vienna-city-photo"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_72%_66%,rgba(238,166,92,0.23)_0%,rgba(238,166,92,0.105)_28%,transparent_52%),radial-gradient(ellipse_at_30%_20%,rgba(168,145,190,0.078)_0%,rgba(168,145,190,0.032)_28%,transparent_56%),linear-gradient(112deg,rgba(8,8,8,0.59)_0%,rgba(9,9,9,0.53)_34%,rgba(13,12,12,0.47)_64%,rgba(7,7,7,0.58)_100%)]"
        aria-hidden="true"
      />

      <div
        className="hero-film-grain absolute inset-0 z-20 opacity-[0.16] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-30 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.07)_48%,rgba(5,5,5,0.58)_100%),linear-gradient(to_bottom,rgba(7,7,7,0.5)_0%,rgba(9,8,9,0.11)_32%,rgba(8,7,8,0.6)_100%)]"
        aria-hidden="true"
      />

      <nav className="relative z-40 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 text-[0.68rem] uppercase tracking-[0.32em] text-neutral-300/75 sm:px-10 lg:px-16">
        <a href="#hero" className="text-neutral-50">
          Mori
        </a>
        <div className="flex items-center gap-5 sm:gap-8">
          <a className="hover:text-neutral-50" href="#works">
            Work
          </a>
          <a className="hover:text-neutral-50" href="#about">
            About
          </a>
          <a className="hover:text-neutral-50" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <div className="relative z-40 mx-auto flex min-h-[calc(100vh-4.75rem)] w-full max-w-7xl flex-col justify-end px-6 pb-8 pt-12 sm:px-10 sm:pb-10 lg:px-16">
        <div
          className="absolute bottom-[24%] right-[18%] h-9 w-[1px] bg-amber-100/28 shadow-[0_0_28px_rgba(226,151,87,0.38)] sm:bottom-[26%] sm:right-[22%]"
          aria-hidden="true"
        >
          <span className="absolute -left-[2px] top-0 h-[5px] w-[5px] rounded-full bg-amber-100/65 shadow-[0_0_14px_rgba(255,215,162,0.56)]" />
          <span className="absolute -bottom-[7px] -left-[7px] h-[7px] w-4 rounded-full bg-[#090807]/70 blur-[2px]" />
        </div>

        <div className="max-w-6xl">
          <p className="mb-5 max-w-xs text-[0.68rem] uppercase leading-5 tracking-[0.34em] text-neutral-300/75 sm:max-w-none">
            Vienna / blue hour
          </p>
          <h1 className="text-[clamp(4.2rem,13.5vw,12rem)] font-semibold uppercase leading-[0.72] tracking-normal text-neutral-50">
            <span className="block">Mori</span>
            <span className="mt-4 block text-[0.49em] font-medium leading-[0.82] text-neutral-200/92 sm:mt-5">
              Tahmasebi
            </span>
          </h1>
        </div>

        <div className="mt-8 flex flex-col gap-5 pt-5 text-xs uppercase tracking-[0.28em] text-neutral-300/65 sm:flex-row sm:items-end sm:justify-between lg:mt-9">
          <p>Cinematic portfolio</p>
          <p className="max-w-sm leading-5 normal-case tracking-normal text-neutral-300/64 sm:translate-y-3 sm:text-right">
            Editorial systems, visual direction, and digital spaces shaped with
            atmosphere, restraint, and strong typographic presence.
          </p>
        </div>
      </div>
    </section>
  );
}
