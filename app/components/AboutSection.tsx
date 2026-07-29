import { education } from "../data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-semibold text-sky-700">ABOUT ME</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">About Me</h2>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-lg border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950">
              Interested in Web Development & Data
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              Hello, my name is Khemdech, and my nickname is Ton. I&apos;m a
              Computer Science student at Bangkok University.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              I am currently interested in web and software development,
              particularly in building systems that can be used in real
              situations, both for personal use and by general users. I also
              have a strong interest in databases and data-related work because
              I want to understand how data can be managed, analyzed, and used
              effectively within systems. At present, I am studying and
              developing my skills in React, Next.js, TypeScript, Tailwind CSS,
              SQL, and fundamental database concepts. I remain open to learning
              new things and exploring emerging technologies.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
                  Education
                </p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">
                  {education.degree}
                </h3>
              </div>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800">
                {education.period}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {education.faculty}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  University
                </p>
                <p className="mt-1 font-semibold text-slate-800">
                  {education.school}
                </p>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  GPAX
                </p>
                <p className="mt-1 text-2xl font-bold text-sky-700">
                  {education.gpax}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
