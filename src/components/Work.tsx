import { content } from "@/lib/site";

export function Work() {
  const { projects, workHeading, workSupport, workCtaLabel } = content;

  return (
    <section id="work" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
            {workHeading}
          </h2>
          <p className="mt-4 text-lg text-paper-muted">{workSupport}</p>
        </div>

        <ul className="mt-14 divide-y divide-line border-y border-line">
          {projects.map((project) => (
            <li key={project.name}>
              <a
                href="#contact"
                className="group grid gap-3 py-8 transition-colors sm:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] sm:items-baseline sm:gap-8"
              >
                <div>
                  <h3 className="font-display text-2xl text-paper transition-colors group-hover:text-coral sm:text-3xl">
                    {project.name}
                  </h3>
                  {project.status === "in-progress" ? (
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-coral">
                      In progress
                    </p>
                  ) : null}
                </div>
                <div>
                  <p className="text-base text-paper">{project.blurb}</p>
                  <p className="mt-2 text-sm text-paper-muted">
                    {project.outcome}
                  </p>
                  {project.stack ? (
                    <p className="mt-2 text-xs uppercase tracking-wider text-paper-muted/80">
                      {project.stack}
                    </p>
                  ) : null}
                </div>
                <span className="text-sm text-coral opacity-0 transition-opacity group-hover:opacity-100 sm:justify-self-end">
                  {workCtaLabel}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
