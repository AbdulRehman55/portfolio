import { clientsContent } from "./clients";
import { jobsContent } from "./jobs";
import type { PortfolioContent, PortfolioMode } from "./types";

function resolveMode(): PortfolioMode {
  const raw = (process.env.NEXT_PUBLIC_PORTFOLIO_MODE ?? "jobs").toLowerCase();
  return raw === "clients" ? "clients" : "jobs";
}

export const portfolioMode = resolveMode();

export const content: PortfolioContent =
  portfolioMode === "clients" ? clientsContent : jobsContent;

export type { PortfolioContent, PortfolioMode };
