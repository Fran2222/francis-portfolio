import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { site } from "../../data/site";

const skills = [
  "Shopify Liquid",
  "Theme Customization",
  "HTML",
  "CSS",
  "JavaScript",
  "Responsive Design",
  "Laravel",
  "PHP",
  "Python",
  "Flask",
  "REST API",
  "PostgreSQL",
  "MySQL",
  "Git",
  "GitHub",
  "Postman"
];

const projects = [
  {
    title: "Shopify Premium Product Page",
    text: "Designed a conversion-focused Shopify product page concept with product gallery, variant selector, sticky add-to-cart, product tabs, FAQ, trust badges, and mobile-first layout."
  },
  {
    title: "Laravel Business Management System",
    text: "Built and worked on multi-module business workflows covering CRM, inventory, purchasing, sales/POS, accounting, HR, dashboards, and role-based access."
  },
  {
    title: "Python Flask SaaS Starter",
    text: "Created a backend starter concept with REST API structure, workspace-based tenant logic, task endpoints, API key workflow, and clean backend organization."
  },
  {
    title: "AI Bottle and Can Detection System",
    text: "Worked on a Python AI/ML and IoT project using Raspberry Pi, webcam detection, servo motor automation, RFID identification, and reward point logic."
  }
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <section className="relative overflow-hidden px-6 pb-24 pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_35%),linear-gradient(180deg,#050816_0%,#07111f_55%,#050816_100%)]" />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-bold text-cyan-200 transition hover:bg-white/10"
          >
            Back to Home
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
                Resume
              </p>

              <h1 className="mt-5 text-5xl font-black leading-tight text-white md:text-7xl">
                {site.name}
              </h1>

              <p className="mt-5 text-2xl font-bold text-cyan-200">
                {site.title}
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Full-stack web and ecommerce developer focused on building responsive
                websites, Shopify storefronts, Laravel/PHP business systems, backend
                APIs, and Python automation tools for real-world workflows.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Contact
              </p>

              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <p>Email: {site.email}</p>
                <p>LinkedIn: francis-miguel-colaljo</p>
                <p>GitHub: Add your GitHub link</p>
                <p>Location: Philippines / Remote</p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-full bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 hover:bg-cyan-300"
                >
                  Email
                </a>

                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-black text-white hover:bg-white/10"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h2 className="text-2xl font-black text-white">Core Skills</h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h2 className="text-2xl font-black text-white">Professional Summary</h2>

              <p className="mt-5 leading-8 text-slate-300">
                Developer with hands-on experience in frontend implementation,
                backend workflows, database-driven systems, and practical technical
                problem solving. Skilled in building responsive user interfaces,
                business dashboards, CRUD workflows, ecommerce page structures,
                API-ready backends, and automation-focused projects.
              </p>

              <p className="mt-5 leading-8 text-slate-300">
                Currently focused on Shopify theme development, including Liquid
                templating, custom sections and blocks, product page customization,
                storefront UI improvements, SEO-friendly structure, and performance-
                focused frontend work.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <h2 className="text-2xl font-black text-white">Featured Projects</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="font-black text-white">{project.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{project.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h2 className="text-2xl font-black text-white">Developer Focus</h2>

              <ul className="mt-5 space-y-3 text-slate-300">
                <li>- Shopify storefront and theme customization</li>
                <li>- Frontend UI implementation and responsive layouts</li>
                <li>- Laravel/PHP business systems and dashboards</li>
                <li>- Python backend APIs and automation workflows</li>
                <li>- Database-driven CRUD systems and workflow logic</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
              <h2 className="text-2xl font-black text-white">Technical Background</h2>

              <p className="mt-5 leading-8 text-slate-300">
                Hands-on educational background with C/C++ and Arduino Uno
                microcontroller automation from scratch. Worked on Python AI/ML
                using Raspberry Pi and a webcam to detect cans and bottles, with
                servo motor control and RFID-based reward point logic.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 text-center">
            <h2 className="text-3xl font-black text-white">
              PDF resume coming next
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
              This online resume page is ready. Next step is adding a downloadable
              ATS-friendly PDF resume and connecting it to the portfolio.
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