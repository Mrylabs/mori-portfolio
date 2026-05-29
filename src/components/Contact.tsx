export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-neutral-950 px-6 py-20 text-neutral-100 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-500">
            Contact
          </p>
          <h2 className="max-w-4xl text-4xl font-medium leading-tight sm:text-6xl">
            For commissions, screenings, and quiet collaborations.
          </h2>
        </div>

        <address className="not-italic text-sm leading-7 text-neutral-400">
          <a
            href="mailto:studio@mori.example"
            className="block text-neutral-100 underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            studio@mori.example
          </a>
          <span className="block">Available for selected projects</span>
          <span className="block">Based between image and atmosphere</span>
        </address>
      </div>
    </section>
  );
}
