import Image from "next/image";
import { certificates } from "../data/portfolio";

export function CertificatesSection() {
  return (
    <section id="certificates" className="bg-[#f5f7fb]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-semibold text-sky-700">CERTIFICATIONS</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">
          Certifications
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {certificates.map((certificate) => (
            <article
              key={certificate.id}
              className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
            >
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${certificate.title} certificate`}
                className="group flex h-72 items-center justify-center border-b border-slate-200 bg-slate-50 p-3 outline-none transition hover:bg-sky-50 focus-visible:ring-4 focus-visible:ring-sky-200"
              >
                <Image
                  src={certificate.previewImage}
                  alt={`${certificate.title} certificate preview`}
                  width={900}
                  height={650}
                  className="h-full w-full object-contain transition duration-200 group-hover:scale-[1.02]"
                />
              </a>
              <div className="p-6">
                <p className="text-sm font-medium text-sky-700">
                  {certificate.year}
                </p>
                <h3 className="mt-1 text-lg font-bold text-slate-950">
                  {certificate.title}
                </h3>
                <p className="mt-2 text-slate-600">{certificate.issuer}</p>
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
                >
                  View Certificate
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
