import Image from "next/image";
import Link from "next/link";

const screenshots = [
  {
    title: "Conversation Analysis Results",
    src: "/projects/gyoubu-ai/screenshots/summary-insight.png",
    caption: "Conversation analysis results.",
  },
  {
    title: "Conversation Metadata",
    src: "/projects/gyoubu-ai/screenshots/metadata-details.png",
    caption:
      "Conversation details, including Agent ID, brand, product, warranty, and QA score.",
  },
  {
    title: "Tools and AI Stack",
    src: "/projects/gyoubu-ai/screenshots/tools-and-ai-stack.png",
    caption: "Tools and AI models used in the project.",
  },
  {
    title: "Award Recognition",
    src: "/projects/gyoubu-ai/screenshots/activity-3.jpg",
    caption: "Best AI Prototype for Real-World Impact Award.",
  },
];

const techStack = ["Python", "TypeScript", "CSS", "JavaScript", "SQL"];

export default function GyoubuAiProjectPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] px-6 py-16 text-slate-800">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="text-sm font-semibold text-sky-700 transition hover:text-sky-900"
        >
          ← Back to Projects
        </Link>

        <p className="mt-12 font-semibold uppercase tracking-[0.16em] text-sky-700">
          AI Conversation Intelligence
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Gyoubu AI Project
        </h1>

        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Project Overview</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Gyoubu AI takes audio from customer and call center conversations and
            sends it to Typhoon ASR to turn the speech into text. The transcribed
            conversation is then analyzed by Llama 3.3 to identify the call
            topic, customer intent, product issues, and service-related problems.
            The system also summarizes the results, which can be used to improve
            customer service.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-sky-50 px-3 py-1.5 text-sm font-medium text-sky-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <a
              href="/projects/gyoubu-ai/screenshots/Giewbu_Project.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Read Project PDF
            </a>
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
            My Role
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-950">
            Database Engineer
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            I was responsible for planning and designing the database structure.
          </p>
        </section>

        <section className="mt-10">
          <p className="font-semibold uppercase tracking-[0.14em] text-sky-700">
            Project Screens
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Screenshots
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {screenshots.map((screenshot) => (
              <figure
                key={screenshot.title}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <a
                  href={screenshot.src}
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-slate-50"
                  aria-label={`Open ${screenshot.title} in full size`}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.title}
                    width={1200}
                    height={675}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="aspect-video w-full object-contain"
                  />
                </a>
                <figcaption className="p-5 text-sm leading-7 text-slate-600">
                  <p className="font-semibold text-slate-900">
                    {screenshot.title}
                  </p>
                  <p className="mt-1">{screenshot.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
