import Link from "next/link";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { getAdjacentProjects, getProjectBySlug, projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const adjacent = getAdjacentProjects(slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050816] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl">
          <Link href="/" className="text-cyan-300 hover:text-cyan-200">
            Back to home
          </Link>
          <h1 className="mt-8 text-4xl font-black">Project not found</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%),linear-gradient(180deg,#050816_0%,#07111f_55%,#050816_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/#projects"
            className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-bold text-cyan-200 transition hover:bg-white/10"
          >
            Back to Projects
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
                {project.category}
              </p>

              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-tight text-white md:text-7xl">
                {project.title}
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {project.summary}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-cyan-500/10">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Role</p>
                  <p className="mt-2 font-bold text-white">{project.role}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Timeline</p>
                  <p className="mt-2 font-bold text-white">{project.timeline}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Status</p>
                  <p className="mt-2 font-bold text-cyan-200">{project.status}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f] shadow-2xl shadow-cyan-500/10">
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-6 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <p className="ml-3 text-sm text-slate-400">Project preview placeholder</p>
            </div>

            <div className="grid min-h-[360px] place-items-center bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_35%)] p-8">
              <div className="max-w-2xl text-center">
                <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
                  Screenshot Area
                </p>
                <h2 className="mt-4 text-4xl font-black text-white">
                  Add project screenshots here
                </h2>
                <p className="mt-4 leading-7 text-slate-300">
                  Later, we will add real screenshots or mockups for this project.
                  For now, this section keeps the case study layout professional.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Overview
              </p>
              <h2 className="mt-4 text-3xl font-black text-white">{project.role}</h2>
              <p className="mt-5 leading-7 text-slate-300">{project.description}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Key Features
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="text-sm font-medium text-slate-200">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-black text-white">Problem</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.problem}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-black text-white">Solution</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.solution}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h3 className="text-xl font-black text-white">Result</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.result}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {adjacent.previous ? (
              <Link
                href={`/projects/${adjacent.previous.slug}`}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
              >
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
                  Previous Project
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">
                  {adjacent.previous.title}
                </h3>
              </Link>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 opacity-50">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                  Previous Project
                </p>
                <h3 className="mt-3 text-2xl font-black text-slate-500">
                  None
                </h3>
              </div>
            )}

            {adjacent.next ? (
              <Link
                href={`/projects/${adjacent.next.slug}`}
                className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 text-right transition hover:bg-cyan-400/20"
              >
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Next Project
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">
                  {adjacent.next.title}
                </h3>
              </Link>
            ) : (
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-right opacity-50">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-500">
                  Next Project
                </p>
                <h3 className="mt-3 text-2xl font-black text-slate-500">
                  None
                </h3>
              </div>
            )}
          </div>

          <div className="mt-10 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center">
            <h2 className="text-3xl font-black text-white">Need this kind of work?</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              I am available for Shopify, frontend, Laravel/PHP, Python backend,
              API, automation, and business system development roles.
            </p>

            <Link
              href="/#contact"
              className="mt-7 inline-flex rounded-full bg-cyan-400 px-7 py-3.5 font-black text-slate-950 transition hover:bg-cyan-300"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}