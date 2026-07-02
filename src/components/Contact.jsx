import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-white/[0.04] to-blue-600/10 p-8 text-center shadow-2xl shadow-cyan-500/10 md:p-14">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          Contact
        </p>

        <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
          Ready to build a modern e-commerce or web system?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          Available for Shopify theme customization, frontend development,
          Laravel/PHP systems, Python backend work, and automation projects.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
          >
            Email Me
          </a>

          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            LinkedIn
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            GitHub
          </a>
        </div>

        <p className="mt-7 text-sm text-slate-400">
          Update email and GitHub inside src/data/site.js before deploying.
        </p>
      </div>
    </section>
  );
}