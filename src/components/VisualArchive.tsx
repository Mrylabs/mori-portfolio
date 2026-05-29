const archiveItems = [
  "Light Tests",
  "Location Notes",
  "Frame Grabs",
  "Material References",
  "Process Fragments",
  "Quiet Errors",
];

export default function VisualArchive() {
  return (
    <section
      id="visual-archive"
      className="border-b border-white/10 bg-neutral-950 px-6 py-24 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Visual Archive
            </p>
            <h2 className="max-w-2xl text-4xl font-medium text-neutral-50 sm:text-5xl">
              A working index of images before they become finished pieces.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-neutral-400">
            Placeholder entries for tests, references, contact sheets, and
            process material.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {archiveItems.map((item, index) => (
            <article
              key={item}
              className="flex aspect-[3/4] flex-col justify-between border border-white/10 bg-neutral-900 p-4"
            >
              <span className="text-xs text-neutral-600">
                A{String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-neutral-300">
                {item}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
