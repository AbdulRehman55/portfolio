export type PortfolioMode = "jobs" | "clients";

export type Cta = {
  label: string;
  href: string;
  external?: boolean;
};

export type PortfolioContent = {
  mode: PortfolioMode;
  site: {
    name: string;
    title: string;
    email: string;
    phone: string;
    whatsapp: string;
    linkedin: string;
    headline: string;
    support: string;
  };
  nav: ReadonlyArray<{ label: string; href: string }>;
  primaryCta: Cta;
  secondaryCta: Cta;
  headerCta: Cta;
  servicesHeading: string;
  servicesSupport: string;
  services: ReadonlyArray<{ title: string; description: string }>;
  workHeading: string;
  workSupport: string;
  workCtaLabel: string;
  projects: ReadonlyArray<{
    name: string;
    blurb: string;
    outcome: string;
    stack?: string;
    status?: "shipped" | "in-progress";
  }>;
  skillsHeading?: string;
  skillsSupport?: string;
  skills?: ReadonlyArray<{ group: string; items: string }>;
  processHeading: string;
  processSupport: string;
  processSteps: ReadonlyArray<{
    step: string;
    title: string;
    description: string;
  }>;
  aboutHeading: string;
  aboutParagraphs: ReadonlyArray<string>;
  contactHeading: string;
  contactSupport: string;
  contactPrimary: Cta;
  contactSecondary: Cta;
  showWhatsApp: boolean;
};
