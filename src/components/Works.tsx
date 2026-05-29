const works = [
  "Nocturne Study",
  "Still Frame Sequence",
  "Threshold",
  "Rooms Without Weather",
];

export default function Works() {
  return (
    <section
      id="works"
      className="border-b border-white/10 bg-neutral-900 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-6 lg:grid-cols-[0.7fr_1fr]">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Selected Works
          </p>
          <h2 className="max-w-3xl text-4xl font-medium leading-tight text-neutral-50 sm:text-5xl">
            Placeholder studies for a portfolio of moving images, stills, and
            atmospheric commissions.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
          {works.map((work, index) => (
            <article
              key={work}
              className="min-h-72 bg-neutral-900 p-6 sm:p-8"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="text-sm text-neutral-500">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-medium text-neutral-50">
                    {work}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-400">
                    A reserved placeholder for project imagery, credits, and
                    short editorial context.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
