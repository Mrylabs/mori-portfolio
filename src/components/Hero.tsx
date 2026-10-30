import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0a] text-neutral-100"
      aria-label="Mori Tahmasebi cinematic portfolio hero"
    >
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_40%,rgba(62,53,49,0.20)_0%,rgba(35,31,29,0.09)_42%,transparent_76%)]"
        aria-hidden="true"
      />

      <div
        className="hero-film-grain pointer-events-none absolute inset-0 z-20 opacity-[0.045] mix-blend-soft-light"
        aria-hidden="true"
      />

      <nav className="relative z-50 mx-auto flex w-full max-w-7xl justify-center px-6 py-8 text-[0.68rem] uppercase tracking-[0.26em] text-white/80 md:justify-start lg:justify-end sm:px-10 lg:px-16">
        <div className="flex items-center gap-7 sm:gap-10">
          <Link href="/works" className="transition hover:text-[#C9A46A]">
            Works
          </Link>
          <a className="transition hover:text-[#C9A46A]" href="#about">
            About
          </a>
          <a className="transition hover:text-[#C9A46A]" href="#contact">
            Contact
          </a>
        </div>
      </nav>

      <div
        className="
            relative z-40 mx-auto
            flex min-h-[calc(100vh-4.75rem)]
            w-full max-w-7xl
            flex-col
            items-center

            justify-between

            px-6
            pt-6
            pb-16

            text-center

            md:pb-20

            lg:justify-center
            lg:px-16
            lg:pb-[8rem]
            lg:text-left
          "
      >
        <div
          className="
            hero-entrance relative
            flex
            w-full
            max-w-3xl
            flex-col
            items-center

            pt-8

            lg:pt-0
            lg:items-start
          "
        >
          <h1 className="flex justify-center -translate-y-8 md:-translate-y-10 lg:-translate-y-18">
            <span className="sr-only">Morvarid Tahmasebi</span>

            <img
              src="/logo/mori-logo-dark-faded.svg"
              alt=""
              aria-hidden="true"
              className="h-auto w-[88vw] max-w-[34rem] md:w-[70vw] lg:w-[45rem]"
            />
          </h1>

          <div className="-mt-6 md:-mt-12 lg:-mt-40" />

          <p
            className="
              text-[1.2rem]
              font-bold
              tracking-[0.14em]
              text-neutral-100/95
              md:text-[1.1rem]
              lg:text-[1rem]
            "
          >
            MORVARID TAHMASEBI
          </p>

          {/* Identity block */}
          <div className="mt-3 space-y-3 lg:mt-3 lg:space-y-2">
            <p
              className="
                text-[0.95rem]
                md:text-[0.9rem]
                lg:text-[0.75rem]
                font-semibold
                tracking-[0.03em]
                text-neutral-100/90
              "
            >
              Composer · Audiovisual Storyteller
            </p>

            <p
              className="
                text-[0.82rem]
                md:text-[0.8rem]
                lg:text-[0.75rem]
                uppercase
                tracking-[0.22em]
                text-neutral-400
              "
            >
              BASED IN VIENNA
            </p>
          </div>

          {/* Description */}
          <p
            className="
              mt-40
              max-w-[22rem]
              text-[1.15rem]
              font-light
              leading-8
              text-neutral-300/90

              md:mt-40
              md:max-w-[30rem]

              lg:mt-3
              lg:max-w-2xl
              lg:text-sm
              lg:leading-7
            "
          >
            Creating cinematic sound worlds where memory, identity, and cultural
            belonging become music.
          </p>
        </div>
      </div>
    </section>
  );
}
