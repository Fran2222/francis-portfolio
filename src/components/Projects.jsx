import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          Projects
        </p>

        <div className="mt-5 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Portfolio projects built for current hiring demand.
          </h2>

          <p className="max-w-md leading-7 text-slate-300">
            Focused on Shopify, frontend, Laravel/PHP, Python, APIs, automation,
            and real business workflows.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}