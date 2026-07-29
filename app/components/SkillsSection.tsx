import { technicalSkills } from "../data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <p className="font-semibold text-sky-700">TECHNICAL SKILLS</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-950">
        Technical Skills
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {technicalSkills.map((group) => (
          <article
            key={group.title}
            className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold ${group.accent}`}
            >
              {group.title.slice(0, 2)}
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-950">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
