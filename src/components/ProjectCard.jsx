import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/[0.06]">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-cyan-400/10 blur-2xl transition group-hover:bg-cyan-400/20" />

      <div className="relative flex h-full flex-col">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl font-black text-cyan-200">
          {project.number}
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
          {project.category}
        </p>

        <h3 className="mt-3 text-2xl font-black text-white">{project.title}</h3>
        <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-bold text-cyan-100 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </article>
  );
}