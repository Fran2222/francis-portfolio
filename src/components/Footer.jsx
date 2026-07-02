import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
        <p>(c) 2026 {site.name}. All rights reserved.</p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
            LinkedIn
          </a>
          <a href={site.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300">
            GitHub
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-cyan-300">
            Email
          </a>
          <a href={site.resume} className="hover:text-cyan-300">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}