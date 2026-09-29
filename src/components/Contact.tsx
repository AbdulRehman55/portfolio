import { CtaLink } from "@/components/CtaLink";
import { content } from "@/lib/site";

export function Contact() {
  const {
    site,
    contactHeading,
    contactSupport,
    contactPrimary,
    contactSecondary,
    showWhatsApp,
  } = content;

  return (
    <section id="contact" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
            {contactHeading}
          </h2>
          <p className="mt-4 text-lg text-paper-muted">{contactSupport}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <CtaLink
            cta={contactPrimary}
            className="inline-flex items-center justify-center rounded-md bg-coral px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-coral-hover"
          />
          <CtaLink
            cta={contactSecondary}
            className="inline-flex items-center justify-center rounded-md border border-line px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-paper-muted hover:bg-white/5"
          />
          {showWhatsApp ? (
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-line px-5 py-3 text-sm font-medium text-paper transition-colors hover:border-paper-muted hover:bg-white/5"
            >
              WhatsApp
            </a>
          ) : null}
        </div>

        <p className="mt-8 text-sm text-paper-muted">
          <a
            href={`mailto:${site.email}`}
            className="underline-offset-4 transition-colors hover:text-paper hover:underline"
          >
            {site.email}
          </a>
          <span className="mx-3 text-line">·</span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 transition-colors hover:text-paper hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}
