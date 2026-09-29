import { content } from "@/lib/site";

export function Process() {
  const { processSteps, processHeading, processSupport } = content;

  return (
    <section id="process" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
            {processHeading}
          </h2>
          <p className="mt-4 text-lg text-paper-muted">{processSupport}</p>
        </div>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <li key={item.step}>
              <p className="text-sm tracking-[0.18em] text-coral">{item.step}</p>
              <h3 className="mt-3 text-xl font-medium text-paper">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
