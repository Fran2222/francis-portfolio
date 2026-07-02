export const projects = [
  {
    number: "01",
    slug: "shopify-product-page",
    title: "Shopify Premium Product Page",
    category: "Shopify Development",
    summary:
      "A conversion-focused Shopify product page concept designed for modern ecommerce brands.",
    description:
      "A premium Shopify product page concept with product gallery, variant selector, sticky add-to-cart, product tabs, FAQ, trust badges, and mobile-first responsive layout.",
    tech: ["Shopify Liquid", "HTML", "CSS", "JavaScript"],
    role: "Shopify Theme Developer",
    timeline: "Portfolio Concept",
    status: "Case Study Ready",
    problem:
      "Many ecommerce product pages look generic, load slowly, and do not clearly guide customers toward purchase decisions.",
    solution:
      "Designed a clean product page structure focused on product clarity, trust signals, mobile responsiveness, and conversion-focused layout.",
    features: [
      "Product image gallery layout",
      "Variant selector UI",
      "Sticky add-to-cart section",
      "Product information tabs",
      "FAQ accordion concept",
      "Trust badges and shipping highlights",
      "Mobile-first responsive layout"
    ],
    result:
      "This project shows my ability to structure ecommerce product pages using Shopify-style components, Liquid-ready layout thinking, and conversion-focused frontend design."
  },
  {
    number: "02",
    slug: "shopify-landing-page",
    title: "Shopify Custom Landing Page",
    category: "E-commerce Frontend",
    summary:
      "A Shopify-style landing page built to showcase products, brand story, and conversion sections.",
    description:
      "A responsive ecommerce landing page concept with hero section, featured collection, image-with-text blocks, testimonials, newsletter CTA, and reusable Shopify-style sections.",
    tech: ["Liquid", "Tailwind", "JavaScript", "SEO"],
    role: "Frontend and Shopify Theme Developer",
    timeline: "Portfolio Concept",
    status: "Case Study Ready",
    problem:
      "Stores often need custom landing pages for product launches, promotions, and seasonal campaigns without rebuilding the entire theme.",
    solution:
      "Created a modular landing page structure that can be adapted into Shopify theme sections and reused for campaigns.",
    features: [
      "Hero banner section",
      "Featured collection layout",
      "Image with text content blocks",
      "Customer testimonials section",
      "Newsletter CTA",
      "Reusable section-based layout",
      "SEO-friendly page structure"
    ],
    result:
      "This project demonstrates my ability to create clean ecommerce landing pages that match Shopify development workflows."
  },
  {
    number: "03",
    slug: "laravel-business-system",
    title: "Laravel Business Management System",
    category: "Full-Stack Laravel/PHP",
    summary:
      "A multi-module business system for CRM, inventory, sales, accounting, HR, and operations.",
    description:
      "A Laravel/PHP business management system designed to support real company workflows across CRM, inventory, purchasing, sales, accounting, HR, dashboards, and role-based access.",
    tech: ["Laravel", "PHP", "PostgreSQL", "JavaScript"],
    role: "Full-Stack Developer",
    timeline: "Real System Build",
    status: "Case Study Ready",
    problem:
      "Businesses often use separate tools for CRM, inventory, sales, HR, and accounting, which creates duplicate data entry and slow reporting.",
    solution:
      "Built a multi-module system that connects business workflows in one web-based platform with dashboards, access control, and database-driven operations.",
    features: [
      "CRM pipeline module",
      "Inventory and warehouse workflows",
      "Purchasing and receiving flow",
      "Sales and POS-related workflows",
      "Accounting reports and records",
      "HR employee management concepts",
      "Role-based access control",
      "Admin dashboards"
    ],
    result:
      "This is my strongest full-stack project area because it shows experience with real business logic, backend workflows, database design, and practical system building."
  },
  {
    number: "04",
    slug: "python-flask-saas",
    title: "Python Flask SaaS Starter",
    category: "Backend/API",
    summary:
      "A Flask-based SaaS starter with API endpoints, workspace structure, and API key workflow.",
    description:
      "A Python Flask backend starter designed for multi-tenant SaaS concepts, workspace-based data structure, REST API endpoints, API key management, and clean backend organization.",
    tech: ["Python", "Flask", "REST API", "SQLite"],
    role: "Python Backend Developer",
    timeline: "Portfolio Build",
    status: "Case Study Ready",
    problem:
      "Backend portfolio projects need to show clean API thinking, not just simple scripts or static pages.",
    solution:
      "Created a backend starter that demonstrates API structure, workspace logic, task endpoints, and API key-based access concepts.",
    features: [
      "REST API structure",
      "Workspace-based tenant concept",
      "Task management API",
      "API key management concept",
      "Clean backend folder organization",
      "Database-ready architecture"
    ],
    result:
      "This project supports my backend developer profile and shows that I can structure Python web APIs for practical SaaS workflows."
  },
  {
    number: "05",
    slug: "ai-bottle-detection",
    title: "AI Bottle and Can Detection System",
    category: "Python/AI/IoT",
    summary:
      "A Python AI and Raspberry Pi project for detecting bottles and cans with reward workflow.",
    description:
      "A college AI/ML and IoT project using Python, Raspberry Pi, webcam detection, servo motor control, and RFID-based reward point logic.",
    tech: ["Python", "Raspberry Pi", "AI/ML", "RFID"],
    role: "Python and IoT Developer",
    timeline: "Academic Project",
    status: "Case Study Ready",
    problem:
      "Waste segregation and recycling reward systems need automation to detect items and trigger hardware actions accurately.",
    solution:
      "Worked on a detection workflow where a webcam identifies cans and bottles, Raspberry Pi controls servo motors, and RFID is used for reward point identification.",
    features: [
      "Webcam-based item detection",
      "Bottle and can classification concept",
      "Raspberry Pi hardware control",
      "Servo motor flap control",
      "RFID-based user identification",
      "Reward point system logic"
    ],
    result:
      "This project makes my portfolio unique because it connects software, AI/ML logic, hardware automation, and real-world problem solving."
  },
  {
    number: "06",
    slug: "cctv-network-design",
    title: "CCTV Network System Design",
    category: "Network Infrastructure",
    summary:
      "A technical network design concept for structured CCTV connectivity and site-to-site connection.",
    description:
      "A CCTV and network infrastructure planning concept involving fiber, ODF, switches, wireless bridge devices, connection flow, and monitoring layout.",
    tech: ["CCTV", "Fiber", "ODF", "Network Design"],
    role: "Technical Systems Planner",
    timeline: "Technical Planning",
    status: "Case Study Ready",
    problem:
      "CCTV deployments need reliable network planning to connect remote camera sites to monitoring locations.",
    solution:
      "Planned a structured connection design using network devices, fiber termination, ODF, switching, wireless bridge concepts, and site-to-site flow.",
    features: [
      "CCTV connection planning",
      "Fiber and ODF structure",
      "Switching layout",
      "Wireless bridge concept",
      "Site-to-site connection flow",
      "Monitoring system design"
    ],
    result:
      "This project shows additional technical capability beyond coding, including infrastructure planning and practical system deployment thinking."
  }
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectIndex(slug) {
  return projects.findIndex((project) => project.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = getProjectIndex(slug);

  return {
    previous: index > 0 ? projects[index - 1] : null,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : null
  };
}