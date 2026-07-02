const services = [
  {
    title: "Shopify Development",
    text: "Theme customization, Liquid sections, product pages, landing pages, app setup, SEO updates, and storefront fixes."
  },
  {
    title: "Full-Stack Systems",
    text: "Laravel/PHP business systems for CRM, inventory, sales, purchasing, accounting, HR, dashboards, and workflows."
  },
  {
    title: "Python and Automation",
    text: "Flask APIs, automation scripts, AI/ML experiments, Raspberry Pi projects, and practical workflow automation."
  }
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          About
        </p>

        <div className="mt-5 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              I turn business problems into clean digital systems.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-300">
              I am Francis Miguel Colaljo, a developer focused on practical web
              solutions. My work connects frontend design, backend logic, database
              workflows, e-commerce customization, and automation.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              I build for real business needs: online stores, dashboards, internal
              systems, APIs, inventory workflows, CRM pipelines, and automation tools.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40">
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}