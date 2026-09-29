import type { PortfolioContent } from "./types";

const email = "abdulrehmanmunaf123@gmail.com";
const whatsapp = "https://wa.me/923212334933";
const linkedin = "https://www.linkedin.com/in/abdul-rehman-munaf-6595621b0/";

export const clientsContent: PortfolioContent = {
  mode: "clients",
  site: {
    name: "Abdul Rehman",
    title: "Software engineer for businesses going online",
    email,
    phone: "+92 321 2334933",
    whatsapp,
    linkedin,
    headline:
      "I help businesses go online — and build systems that actually run the work.",
    support:
      "From a simple website and WhatsApp-friendly inquiries to bookings, payments, and custom tools. I guide what to do next, then build it.",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  primaryCta: {
    label: "Message on WhatsApp",
    href: whatsapp,
    external: true,
  },
  secondaryCta: { label: "See selected work", href: "#work" },
  headerCta: { label: "WhatsApp", href: whatsapp, external: true },
  servicesHeading: "How I can help",
  servicesSupport:
    "Clear next steps for businesses going online — whether you need a first website or a full custom system.",
  services: [
    {
      title: "Get online",
      description:
        "A clear website so customers can find you, understand you, and contact you.",
    },
    {
      title: "Take inquiries & orders",
      description:
        "Bookings, catalogs, or forms that replace messy WhatsApp-only workflows.",
    },
    {
      title: "Custom business systems",
      description:
        "Dashboards, marketplaces, and internal tools when a simple site is not enough.",
    },
    {
      title: "Cloud & reliability",
      description:
        "Host, secure, and keep what you run online stable as you grow.",
    },
    {
      title: "Mobile web & smarter extras",
      description:
        "Apps that open in the browser — plus automation or AI when it saves real time.",
    },
  ],
  workHeading: "Selected work",
  workSupport:
    "Real products and systems with users, payments, and scale. Happy to walk through any of these on a call.",
  workCtaLabel: "Ask me →",
  projects: [
    {
      name: "GetABid",
      blurb: "Online auction platform with live bidding and payments.",
      outcome: "Real-time bidding · payments · $5k+ monthly processed",
    },
    {
      name: "DealersHub",
      blurb: "Automotive marketplace — listings, messaging, and payments.",
      outcome: "500+ daily transactions · search, chat, checkout",
    },
    {
      name: "Epicor Quota Platform",
      blurb: "Enterprise sales system with CRM integration.",
      outcome:
        "3,000+ enterprise users · role-based access · real-time calculations",
    },
    {
      name: "Munzee",
      blurb: "Location-based scavenger hunt with GPS, QR, and rewards.",
      outcome: "50,000+ active players worldwide",
    },
    {
      name: "FAACT",
      blurb: "Hospital management — records, appointments, billing, portals.",
      outcome: "Lower infrastructure cost · faster day-to-day operations",
    },
  ],
  processHeading: "How I work",
  processSupport:
    "A simple path from idea to live product — with visibility at every step.",
  processSteps: [
    {
      step: "01",
      title: "Discover",
      description:
        "I’ll look at how you sell today and we’ll pick the next online step that fits — not a random tech wishlist.",
    },
    {
      step: "02",
      title: "Build",
      description:
        "I design and ship in focused cycles you can see early, so you’re never waiting in the dark.",
    },
    {
      step: "03",
      title: "Ship",
      description:
        "Go live with hosting, contact paths, and the basics ready for real customers.",
    },
    {
      step: "04",
      title: "Support",
      description:
        "Improve and grow as the business needs more — without starting from scratch.",
    },
  ],
  aboutHeading: "About",
  aboutParagraphs: [
    "Senior full-stack engineer building web products and business systems for clients across the USA, UK, Canada, Saudi Arabia, and UAE.",
    "I work with founders and business owners who need someone to advise on the next digital step — then own the build end to end, from the public site to the tools that run behind it.",
    "Background in Computer Science.",
  ],
  contactHeading: "Ready to talk?",
  contactSupport:
    "Tell me about your business and what feels stuck offline. I usually reply within a day.",
  contactPrimary: {
    label: "Message on WhatsApp",
    href: whatsapp,
    external: true,
  },
  contactSecondary: {
    label: "Email",
    href: `mailto:${email}?subject=Project%20inquiry`,
  },
  showWhatsApp: true,
};
