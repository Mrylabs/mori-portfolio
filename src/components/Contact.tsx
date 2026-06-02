export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-neutral-100 sm:px-10 lg:px-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,164,106,.08),transparent_50%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.7fr] lg:items-end">
        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-500">
            Contact
          </p>

          <h2 className="mb-[-4px] max-w-4xl text-4xl font-medium leading-tight sm:text-6xl">
            Get in touch{" "}
            <span className="inline-block align-[0.18em] text-[0.55em] text-[#C9A46A]/45 [filter:drop-shadow(0_0_6px_rgba(201,164,106,.25))]">
              &#10023;
            </span>
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300 sm:text-xl">
            Every project begins with a conversation. Whether you&apos;re
            developing a film, performance, installation, or collaborative
            artistic project, I&apos;d be happy to hear from you.
          </p>

          <p className="mt-9 max-w-2xl text-lg leading-8 text-neutral-300/90 sm:text-xl">
            Sometimes the most meaningful work begins
            <br />
            with nothing more than an exchange of ideas.
            <br />
            <br />
            A little curiosity.
            <br />
            A little magic.
          </p>
        </div>

        <address className="not-italic text-sm leading-7 text-neutral-400 lg:-translate-y-8">
          <a
            href="mailto:mori.tahmasbi.info@gmail.com"
            className="block text-neutral-100 underline decoration-white/25 underline-offset-4 transition hover:decoration-[#C9A46A]/60"
          >
            mori.tahmasbi.info@gmail.com
          </a>

          <a
            href="https://www.instagram.com/mori.tahmasbii?igsh=MW9zc3c3cThxNDBjZg=="
            target="_blank"
            rel="noreferrer"
            className="block text-neutral-100 underline decoration-white/25 underline-offset-4 transition hover:decoration-[#C9A46A]/60"
          >
            Instagram
          </a>

          <span className="mt-4 block">Vienna, Austria</span>
        </address>
      </div>
    </section>
  );
}
