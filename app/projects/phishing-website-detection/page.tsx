import Image from "next/image";
import Link from "next/link";

const screenshots = [
  {
    title: "Weka Analysis Workflow",
    src: "/projects/data-mining-project/screenshots/workflow.png",
    caption:
      "Shows the data analysis workflow in Weka, from importing the dataset and building the Random Forest model to evaluating and displaying the results.",
  },
  {
    title: "Performance Metrics and Confusion Matrix",
    src: "/projects/data-mining-project/screenshots/metrics.png",
    caption: "Performance metrics table and confusion matrix.",
  },
  {
    title: "Random Forest Evaluation Results",
    src: "/projects/data-mining-project/screenshots/evaluation.png",
    caption: "Shows the Random Forest model evaluation results from Weka.",
  },
];

const techStack = ["Data Mining", "Machine Learning", "Random Forest", "Weka"];

export default function PhishingWebsiteDetectionPage() {
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
          Data Analytics and Mining
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Phishing Website Detection
        </h1>

        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Project Overview</h2>
          <p className="mt-4 leading-8 text-slate-600">
            This project uses the Random Forest algorithm to distinguish potentially
            risky websites from legitimate ones. It analyzes the PhiUSIIL Phishing
            URL Dataset, which contains 188,636 URL records and 51 features. Model
            performance is evaluated using Accuracy, Precision, Recall, F-Measure,
            and a Confusion Matrix.
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
              href="/projects/data-mining-project/screenshots/Data-Mining_Project.pdf"
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
          <h2 className="mt-2 text-xl font-bold text-slate-950">Research Contributor</h2>
          <p className="mt-4 leading-8 text-slate-600">
            I reviewed three related research papers and analyzed the strengths and
            limitations of previous studies.
          </p>
        </section>

        <section className="mt-10">
          <p className="font-semibold uppercase tracking-[0.14em] text-sky-700">
            Project Screens
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">Screenshots</h2>
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
                  <p className="font-semibold text-slate-900">{screenshot.title}</p>
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
