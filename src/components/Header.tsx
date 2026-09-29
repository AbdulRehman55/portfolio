"use client";

import { useEffect, useState } from "react";
import { CtaLink } from "@/components/CtaLink";
import { content } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { site, nav, headerCta } = content;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-paper transition-colors hover:text-coral"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-paper-muted transition-colors hover:text-paper"
            >
              {item.label}
            </a>
          ))}
          <CtaLink
            cta={headerCta}
            className="rounded-md bg-coral px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-coral-hover"
          />
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-px w-5 bg-current transition-transform ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-current transition-transform ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`fixed inset-0 top-16 bg-ink/95 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <nav
            className="flex flex-col gap-6 px-5 py-10"
            aria-label="Mobile"
            onClick={() => setOpen(false)}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-display text-3xl text-paper"
              >
                {item.label}
              </a>
            ))}
            <CtaLink
              cta={headerCta}
              className="mt-2 inline-flex w-fit rounded-md bg-coral px-5 py-3 text-sm font-medium text-paper"
            />
          </nav>
        </div>
      </div>
    </header>
  );
}
