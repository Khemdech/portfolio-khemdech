import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-slate-200 bg-[#fbfaf7]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-semibold text-sky-700">PROJECTS</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 ${
                project.detailsLink
                  ? "cursor-pointer hover:-translate-y-1 hover:shadow-lg"
                  : "cursor-default"
              }`}
            >
              {project.detailsLink && (
                <Link
                  href={project.detailsLink}
                  aria-label={`View details for ${project.title}`}
                  className="absolute inset-0 z-10 rounded-lg"
                />
              )}

              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="h-44 w-full border-b border-slate-200 object-cover"
                />
              ) : (
                <div className="flex h-44 w-full items-center justify-center border-b border-slate-200 bg-gradient-to-br from-sky-50 via-white to-indigo-50">
                  <span className="rounded-full border border-sky-200 bg-white/80 px-4 py-2 text-sm font-semibold tracking-wide text-sky-700 shadow-sm">
                    {project.title.toUpperCase()}
                  </span>
                </div>
              )}

              <div className="p-6">
                <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
                  {project.category}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{project.summary}</p>

                <div className="mt-5">
                  <p className="text-sm font-semibold text-slate-900">Tech Stack</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  className={`pointer-events-none mt-5 inline-flex rounded-lg px-4 py-2.5 text-sm font-semibold ${
                    project.detailsLink
                      ? "bg-slate-950 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {project.detailsLink
                    ? "View Project Details →"
                    : "Details Coming Soon"}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
