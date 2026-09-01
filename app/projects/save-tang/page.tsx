import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Save Tang | Khemdech Neawnan",
  description:
    "A personal saving-goal website that calculates progress and estimated days needed to reach a target.",
};

const techStack = ["HTML5", "CSS", "JavaScript"];

const projectLinks = {
  repository: "https://github.com/Khemdech/Save_Tang",
  liveDemo: "https://khemdech.github.io/Save_Tang/",
};

const features = [
  "Add and remove items from the saving list.",
  "Enter the item name, target price, current savings, and daily saving amount.",
  "Calculate the estimated number of days needed to reach the saving goal.",
];

const screenshots = [
  {
    title: "Saving Goal Calculator",
    src: "/projects/Save_tang/savetang/picture/1.png",
    caption:
      "The main page where users enter a saving goal and see the first calculation.",
  },
  {
    title: "Saving Goal List",
    src: "/projects/Save_tang/savetang/picture/addnewitem.png",
    caption: "Shows all items that the user is currently saving for.",
  },
  {
    title: "Add or Edit a Goal",
    src: "/projects/Save_tang/savetang/picture/add.png",
    caption:
      "A form for entering the item name, price, current savings, and daily saving amount.",
  },
  {
    title: "Saving Progress Summary",
    src: "/projects/Save_tang/savetang/picture/summary.png",
    caption:
      "Shows the progress, remaining amount, estimated days, and saved money updates.",
  },
];

export default function SaveTangProjectPage() {
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
          Personal Project
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          Save Tang
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          A simple website that helps users plan and track their saving goals for
          items they want to buy.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {projectLinks.repository ? (
            <a
              href={projectLinks.repository}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              GitHub Repository
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed rounded-lg bg-slate-200 px-5 py-3 text-sm font-semibold text-slate-500"
            >
              GitHub Repository - Coming Soon
            </span>
          )}

          {projectLinks.liveDemo ? (
            <a
              href={projectLinks.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-sky-500 hover:text-sky-700"
            >
              Live Demo
            </a>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-400"
            >
              Live Demo - Coming Soon
            </span>
          )}
        </div>

        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Project Overview</h2>
          <p className="mt-4 leading-8 text-slate-600">
            I created this project because I sometimes want to buy something but
            need to calculate how much money I should save and how many days it
            will take. Save Tang lets users enter an item name, target price,
            current savings, and daily saving amount. The website then shows the
            item details, saving progress, and estimated time in days and weeks.
            Users can also enter the money they save each time and see how close
            they are to the goal.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
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
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
            My Role
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-950">
            Individual Developer
          </h2>
          <p className="mt-4 leading-8 text-slate-600">
            I planned the features, designed the user interface, implemented the
            website, and tested the main workflows.
          </p>
        </section>

        <section className="mt-6 rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-700">
            Main Functions
          </p>
          <h2 className="mt-2 text-xl font-bold text-slate-950">Features</h2>
          <ul className="mt-5 space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 leading-7 text-slate-600"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-600" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
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
