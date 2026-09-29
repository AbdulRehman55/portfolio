import { content } from "@/lib/site";

export function About() {
  const { aboutHeading, aboutParagraphs } = content;

  return (
    <section id="about" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <h2 className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
          {aboutHeading}
        </h2>
        <div className="max-w-xl space-y-5 text-base leading-relaxed text-paper-muted sm:text-lg">
          {aboutParagraphs.map((paragraph, index) => (
            <p
              key={paragraph}
              className={index === 0 ? "text-paper" : undefined}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
