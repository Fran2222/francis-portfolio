const skillGroups = [
  {
    title: "Shopify",
    text: "Storefront customization and conversion-focused e-commerce UI.",
    skills: ["Liquid", "Theme Customization", "Sections", "Blocks", "Metafields", "Shopify Apps", "SEO"]
  },
  {
    title: "Frontend",
    text: "Responsive interfaces, landing pages, dashboards, and clean UI implementation.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI Implementation", "Performance"]
  },
  {
    title: "Backend",
    text: "Business logic, APIs, authentication, CRUD systems, and workflow automation.",
    skills: ["PHP", "Laravel", "Python", "Flask", "REST API", "Authentication"]
  },
  {
    title: "Tools and Database",
    text: "Development workflow, API testing, local setup, and database-driven systems.",
    skills: ["Git", "GitHub", "VS Code", "Postman", "XAMPP", "PostgreSQL", "MySQL"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
          Skills
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
          Tech stack I use to build real business solutions.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <h3 className="text-2xl font-black text-white">{group.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{group.text}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}