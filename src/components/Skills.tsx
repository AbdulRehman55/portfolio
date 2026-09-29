import { content } from "@/lib/site";

export function Skills() {
  const { skills, skillsHeading, skillsSupport } = content;
  if (!skills?.length) return null;

  return (
    <section id="skills" className="border-t border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl tracking-tight text-paper sm:text-5xl">
            {skillsHeading}
          </h2>
          {skillsSupport ? (
            <p className="mt-4 text-lg text-paper-muted">{skillsSupport}</p>
          ) : null}
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li key={skill.group}>
              <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-coral">
                {skill.group}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper-muted">
                {skill.items}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
