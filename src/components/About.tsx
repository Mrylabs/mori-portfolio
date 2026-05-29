export default function About() {
  return (
    <section
      id="about"
      className="border-b border-white/10 bg-neutral-100 px-6 py-24 text-neutral-950 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.6fr_1fr]">
        <aside>
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            About
          </p>
        </aside>

        <div>
          <h2 className="max-w-4xl text-4xl font-medium leading-tight sm:text-5xl">
            Mori builds restrained cinematic worlds through image, silence, and
            carefully held tension.
          </h2>
          <div className="mt-10 grid gap-8 text-base leading-7 text-neutral-700 md:grid-cols-2">
            <p>
              This section will introduce the artist, their visual language,
              and the ideas behind the work. For now, it holds the structure of
              a concise editorial biography.
            </p>
            <p>
              The portfolio can expand into exhibitions, collaborations,
              screenings, publications, and selected clients as the archive
              becomes more complete.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
