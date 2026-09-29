import { CtaLink } from "@/components/CtaLink";
import { content } from "@/lib/site";

export function Hero() {
  const { site, primaryCta, secondaryCta } = content;

  return (
    <section
      id="top"
      className="atmosphere relative min-h-[100svh] overflow-hidden pt-16"
    >
      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-20">
        <div className="relative z-10 max-w-xl">
          <p className="animate-fade text-sm uppercase tracking-[0.2em] text-paper-muted">
            {site.title}
          </p>
          <h1 className="animate-rise font-display mt-4 text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.95] tracking-tight text-paper">
            {site.name}
          </h1>
          <p className="animate-rise delay-1 mt-6 text-xl leading-snug text-paper sm:text-2xl">
            {site.headline}
          </p>
          <p className="animate-rise delay-2 mt-4 max-w-md text-base leading-relaxed text-paper-muted sm:text-lg">
            {site.support}
          </p>
          <div className="animate-rise delay-3 mt-8 flex flex-wrap gap-3">
            <CtaLink
              cta={primaryCta}
              className="inline-flex items-center justify-center rounded-md bg-coral px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-coral-hover"
            />
            <CtaLink
              cta={secondaryCta}
              className="inline-flex items-center justify-center rounded-md border border-line px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-paper-muted hover:bg-white/5"
            />
          </div>
        </div>

        <div
          className="animate-fade delay-2 relative hidden min-h-[22rem] lg:block lg:min-h-[28rem]"
          aria-hidden="true"
        >
          <div className="hero-visual absolute inset-y-0 -right-8 left-0 rounded-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
