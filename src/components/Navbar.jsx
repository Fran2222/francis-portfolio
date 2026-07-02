import Link from "next/link";
import { site } from "../data/site";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-black tracking-tight text-white">
          {site.shortName}<span className="text-cyan-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm text-slate-300 md:flex">
          <Link href="/#about" className="transition hover:text-cyan-300">About</Link>
          <Link href="/#skills" className="transition hover:text-cyan-300">Skills</Link>
          <Link href="/#projects" className="transition hover:text-cyan-300">Projects</Link>
          <Link href="/#contact" className="transition hover:text-cyan-300">Contact</Link>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.resume}
            className="hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 md:inline-flex"
          >
            Resume
          </a>

          <Link
            href="/#contact"
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-500/10 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Hire Me
          </Link>
        </div>
      </nav>
    </header>
  );
}