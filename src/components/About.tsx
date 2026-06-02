import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-b border-neutral-200/70 bg-[#f4efe7] px-6 pb-9 pt-10 text-neutral-950 sm:px-10 sm:pb-10 sm:pt-12 lg:px-16 lg:pb-14 lg:pt-14"
    >
      <div className="mx-auto grid max-w-6xl gap-9 lg:grid-cols-[minmax(0,0.92fr)_minmax(380px,0.72fr)] lg:gap-12">
        <div className="max-w-[620px] lg:pt-6">
          <div className="flex items-center gap-4">
            <p className="text-[0.84rem] uppercase tracking-[0.36em] text-[#6f918f]">
              About
            </p>
            <span
              className="h-px w-10 bg-[#6f918f]/45"
              aria-hidden="true"
            />
          </div>

          <div className="lg:ml-12">
            <h2 className="mt-4 max-w-xl text-3xl font-medium leading-[1.14] text-neutral-950 sm:text-4xl lg:text-[2.85rem]">
              Sound as a way of remembering.
            </h2>

            <div className="mt-5 max-w-xl space-y-2.5 text-base font-light leading-7 text-neutral-700 sm:text-[1.05rem] sm:leading-8">
              <p className="text-neutral-900">
                Morvarid Tahmasebi is a composer and audiovisual storyteller
                based in Vienna.
              </p>

              <p>
                Her work moves between film, contemporary composition, and
                collaborative artistic projects, creating spaces where sound
                becomes a vessel for memory, identity, and belonging.
              </p>

              <p>
                Whether writing for moving image, performance, or
                interdisciplinary work, she is drawn to stories that explore
                distance, connection, and the emotional traces people leave
                behind.
              </p>

              <p className="pt-1.5 text-[0.66rem] font-normal uppercase leading-5 tracking-[0.28em] text-neutral-500/70">
                COMPOSITION &middot; FILM &middot; STORYTELLING &middot; KAMANCHEH
              </p>
            </div>
          </div>
        </div>

        <figure className="relative mt-4 w-full max-w-[437px] justify-self-start sm:max-w-[470px] lg:mt-16 lg:max-w-[470px] lg:-translate-x-[22px] lg:justify-self-end">
          <div
            className="absolute left-4 top-4 z-0 aspect-[4/5] w-full bg-[#fff8eb]/50"
            aria-hidden="true"
          />

          <div className="relative z-10 aspect-[4/5] w-full overflow-hidden bg-[#f8f4ed]">
            <Image
              src="/images/about/mori.png"
              alt="Portrait of Morvarid Tahmasebi"
              fill
              priority={false}
              sizes="(min-width: 1024px) 470px, (min-width: 640px) 470px, calc(100vw - 3rem)"
              className="scale-[1.12] object-cover object-[52%_43%] blur-[0.25px] [filter:grayscale(12%)_sepia(3%)_saturate(68%)_contrast(84%)_brightness(99%)]"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[#f3eadf]/12 mix-blend-screen"
              aria-hidden="true"
            />
            <div
              className="hero-film-grain pointer-events-none absolute inset-0 opacity-[0.035] mix-blend-soft-light"
              aria-hidden="true"
            />
          </div>
        </figure>
      </div>
    </section>
  );
}
