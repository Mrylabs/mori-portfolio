export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-end border-b border-white/10 bg-neutral-950 px-6 py-10 sm:px-10 lg:px-16"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16">
        <header className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neutral-500">
          <span>Mori</span>
          <span>Cinematic Artist Portfolio</span>
        </header>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-400">
              Image / Motion / Atmosphere
            </p>
            <h1 className="max-w-5xl text-6xl font-semibold leading-none tracking-normal text-neutral-50 sm:text-7xl lg:text-9xl">
              Mori
            </h1>
          </div>

          <p className="max-w-md text-base leading-7 text-neutral-300 sm:text-lg">
            A quiet visual world for cinematic studies, staged fragments, and
            editorial experiments in shadow, texture, and time.
          </p>
        </div>
      </div>
    </section>
  );
}
