import type { Cta } from "@/content/types";

type Props = {
  cta: Cta;
  className?: string;
};

export function CtaLink({ cta, className }: Props) {
  return (
    <a
      href={cta.href}
      className={className}
      {...(cta.external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {cta.label}
    </a>
  );
}
