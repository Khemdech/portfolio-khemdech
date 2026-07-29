import Image from "next/image";
import { activities } from "../data/portfolio";

export function ActivitiesSection() {
  return (
    <section id="activities" className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-semibold text-sky-700">ACTIVITIES & CONTRIBUTIONS</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">
          Activities and Contributions
        </h2>
        <div className="mt-8 grid gap-6">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="overflow-hidden rounded-lg border border-slate-200 bg-[#fbfaf7] shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-slate-200 bg-white p-2 lg:border-b-0 lg:border-r">
                  <Image
                    src={activity.images[0]}
                    alt={`${activity.title} main activity photo`}
                    width={900}
                    height={600}
                    className="h-full min-h-72 w-full rounded-lg object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm font-semibold text-sky-700">
                    {activity.type} - {activity.date}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">
                    {activity.title}
                  </h3>
                  <p className="mt-4 leading-7 text-slate-600">
                    {activity.description}
                  </p>
                  <a
                    href={activity.projectLink}
                    className="mt-6 inline-flex rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-md"
                  >
                    View Main Projects
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
