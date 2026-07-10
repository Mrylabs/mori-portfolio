import Link from "next/link";

export default function Hero() {
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
        className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_50%_47%,rgba(201,164,106,0.045)_0%,rgba(201,164,106,0.018)_28%,transparent_52%),radial-gradient(ellipse_at_72%_66%,rgba(201,164,106,0.04)_0%,rgba(201,164,106,0.018)_30%,transparent_54%),radial-gradient(ellipse_at_30%_20%,rgba(168,145,190,0.01)_0%,rgba(168,145,190,0.004)_30%,transparent_58%),linear-gradient(112deg,rgba(11,11,10,0.84)_0%,rgba(8,8,8,0.74)_36%,rgba(10,9,8,0.72)_66%,rgba(8,7,6,0.9)_100%)]"
        aria-hidden="true"
      />

      <div
        className="hero-film-grain absolute inset-0 z-20 opacity-[0.16] mix-blend-soft-light"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 z-30 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(4,4,4,0.18)_42%,rgba(8,7,6,0.78)_74%,rgba(8,7,6,0.98)_100%),linear-gradient(to_bottom,rgba(11,11,10,0.84)_0%,rgba(8,8,8,0.18)_34%,rgba(8,7,6,0.99)_100%)]"
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
            relative
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
