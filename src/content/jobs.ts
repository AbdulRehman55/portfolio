import type { PortfolioContent } from "./types";

const email = "abdulrehmanmunaf123@gmail.com";
const whatsapp = "https://wa.me/923212334933";
const linkedin = "https://www.linkedin.com/in/abdul-rehman-munaf-6595621b0/";

export const jobsContent: PortfolioContent = {
  mode: "jobs",
  site: {
    name: "Abdul Rehman",
    title: "Senior Full Stack Engineer",
    email,
    phone: "+92 321 2334933",
    whatsapp,
    linkedin,
    headline:
      "I build scalable web products — full stack, cloud-native, and AI-aware.",
    support:
      "5+ years shipping production systems for international teams across the USA, UK, Canada, Saudi Arabia, and UAE. Open to full-time remote and relocation opportunities.",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Focus", href: "#services" },
    { label: "Contact", href: "#contact" },
  ],
  primaryCta: {
    label: "View LinkedIn",
    href: linkedin,
    external: true,
  },
  secondaryCta: { label: "See selected work", href: "#work" },
  headerCta: {
    label: "Email me",
    href: `mailto:${email}?subject=Role%20inquiry`,
  },
  servicesHeading: "What I focus on",
  servicesSupport:
    "Areas I bring into product teams — from core full-stack delivery to modern AI-enabled features.",
  services: [
    {
      title: "Full-stack product engineering",
      description:
        "React, Next.js, and Node.js systems — APIs, UI, auth, and the paths that keep products shipping.",
    },
    {
      title: "Cloud & scalable backends",
      description:
        "AWS serverless, multi-cloud deploys, caching, and reliability for real traffic.",
    },
    {
      title: "AI-enabled features",
      description:
        "LLM-powered assistants, automation, and smart search when they improve the product — not as decoration.",
    },
    {
      title: "Payments & integrations",
      description:
        "Stripe, Salesforce, Zoho, and third-party APIs wired into production workflows.",
    },
    {
      title: "Quality & delivery",
      description:
        "Testing, CI/CD, code review, and clear documentation with distributed teams.",
    },
  ],
  workHeading: "Selected work",
  workSupport:
    "Production products and systems with real users, payments, and scale.",
  workCtaLabel: "Details →",
  projects: [
    {
      name: "AI Product Features",
      blurb:
        "Integrating LLM-based capabilities into web products — assistants, automation, and smarter workflows — while keeping latency, cost, and reliability under control.",
      outcome: "In progress · AI-assisted engineering · LLM API integrations",
      stack: "TypeScript, Next.js, Node.js, LLM APIs",
      status: "in-progress",
    },
    {
      name: "GetABid",
      blurb: "Online auction platform with live bidding and payments.",
      outcome: "Real-time bidding · Stripe · $5k+ monthly processed",
      stack: "React, Node.js, MongoDB, AWS",
      status: "shipped",
    },
    {
      name: "Epicor Quota Platform",
      blurb:
        "Enterprise sales quota system with RBAC and Salesforce integration.",
      outcome: "3,000+ enterprise users · real-time calculations",
      stack: "AWS Lambda, Salesforce, full-stack",
      status: "shipped",
    },
    {
      name: "DealersHub",
      blurb: "Automotive marketplace — listings, messaging, and payments.",
      outcome: "500+ daily transactions",
      stack: "Full-stack marketplace",
      status: "shipped",
    },
    {
      name: "Munzee",
      blurb: "Location-based scavenger hunt with GPS, QR, and rewards.",
      outcome: "50,000+ active players worldwide",
      stack: "React, real-time systems",
      status: "shipped",
    },
    {
      name: "FAACT",
      blurb: "Hospital management — records, appointments, billing, portals.",
      outcome: "Lower infra cost · faster operations",
      stack: "React, Node.js, AWS",
      status: "shipped",
    },
  ],
  skillsHeading: "Technical skills",
  skillsSupport: "Stack I use day to day on production systems.",
  skills: [
    {
      group: "Frontend",
      items: "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Material-UI",
    },
    {
      group: "Backend",
      items: "Node.js, Express, REST, GraphQL, WebSockets, Redis, SSO/OAuth",
    },
    {
      group: "Data",
      items: "MongoDB, PostgreSQL, MySQL, MSSQL, query optimization",
    },
    {
      group: "Cloud & DevOps",
      items: "AWS, Azure, DigitalOcean, Docker, CI/CD (GitHub Actions)",
    },
    {
      group: "AI & modern tooling",
      items:
        "LLM API integration, AI-assisted development, automation workflows",
    },
    {
      group: "Integrations",
      items: "Stripe, Salesforce, Zoho CRM, PubNub, third-party APIs",
    },
  ],
  processHeading: "How I work with teams",
  processSupport:
    "Remote-friendly delivery with clear communication across time zones.",
  processSteps: [
    {
      step: "01",
      title: "Align",
      description:
        "Clarify goals, constraints, and success metrics before writing code.",
    },
    {
      step: "02",
      title: "Build",
      description:
        "Ship in focused iterations with reviews, tests, and visible progress.",
    },
    {
      step: "03",
      title: "Harden",
      description:
        "Performance, security, monitoring, and cloud cost awareness in production.",
    },
    {
      step: "04",
      title: "Hand off",
      description:
        "Document decisions and leave the team able to own and extend the system.",
    },
  ],
  aboutHeading: "About",
  aboutParagraphs: [
    "Senior full-stack engineer with 5+ years building scalable web applications for international clients across the USA, UK, Canada, Saudi Arabia, and UAE.",
    "I own features end to end — frontend, APIs, cloud, payments, and integrations — and collaborate closely with product and engineering teams in agile remote setups.",
    "Currently deepening AI-enabled product work: integrating LLM capabilities into real applications and using AI-assisted engineering to ship faster without lowering quality.",
    "Background in Computer Science. Open to international remote roles and relocation.",
  ],
  contactHeading: "Let’s connect",
  contactSupport:
    "Open to full-time roles and interesting engineering conversations. I usually reply within a day.",
  contactPrimary: {
    label: "Email me",
    href: `mailto:${email}?subject=Role%20inquiry`,
  },
  contactSecondary: {
    label: "LinkedIn",
    href: linkedin,
    external: true,
  },
  showWhatsApp: false,
};
