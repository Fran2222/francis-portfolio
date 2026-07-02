const stats = [
  { value: "6+", label: "Project Categories" },
  { value: "4", label: "Core Tech Tracks" },
  { value: "WFH", label: "Remote Work Ready" }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 pb-24 pt-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_32%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.22),transparent_34%),linear-gradient(180deg,#050816_0%,#07111f_50%,#050816_100%)]" />
      <div className="absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-500/10">
            Shopify Developer - Frontend - Laravel/PHP - Python
          </p>

          <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight text-white md:text-7xl">
            I build premium websites, e-commerce stores, and business systems.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Full-Stack Web and E-commerce Developer focused on Shopify storefronts,
            responsive frontend UI, Laravel/PHP systems, backend APIs, and Python
            automation for real business workflows.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View Portfolio
            </a>

            <a
              href="#skills"
              className="rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              See Skills
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-2xl font-black text-cyan-300">{item.value}</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-400/40 to-blue-600/30 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07111f]/90 p-6 shadow-2xl">
            <div className="mb-5 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <p className="text-sm text-slate-400">Developer focus</p>
            <h2 className="mt-2 text-3xl font-black text-white">
              E-commerce + Systems + Automation
            </h2>

            <div className="mt-7 space-y-4">
              {[
                "Shopify Liquid theme customization",
                "Custom product pages and landing pages",
                "Responsive frontend UI implementation",
                "Laravel/PHP dashboards and workflows",
                "Python APIs, automation, and AI/IoT projects"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/50" />
                  <p className="text-sm text-slate-200">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4">
              <p className="text-sm font-semibold text-cyan-200">
                Open to Shopify, frontend, Laravel/PHP, and Python developer roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}