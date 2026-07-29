import Image from "next/image";

export function SiteHeader() {
  return (
    <>
      <nav className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a
            href="#home"
            className="group flex items-center gap-3 text-xl font-bold text-slate-950 md:text-2xl"
          >
            <span className="relative h-10 w-12 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
              <Image
                src="/brand/kn-logo.jpg"
                alt="KN logo"
                fill
                sizes="48px"
                className="scale-150 object-cover"
              />
            </span>
            <span>
              Khemdech <span className="text-sky-600">Neawnan</span>
            </span>
          </a>

          <div className="hidden gap-6 text-base font-medium text-slate-600 md:flex">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Activities", "#activities"],
              ["Projects", "#projects"],
              ["Certificates", "#certificates"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-sky-600">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="hero-background">
        <section
          id="home"
          className="mx-auto grid min-h-[76vh] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr]"
        >
        <div className="animate-fade-up">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
            Hello, I&apos;m
          </p>
          <h1 className="bg-gradient-to-r from-slate-950 via-slate-800 to-sky-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
            Khemdech Neawnan
          </h1>
          <p className="mt-3 text-sm font-medium text-slate-500 md:text-base">
            Computer Science Student at Bangkok University
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-slate-950 px-5 py-3 font-medium text-white shadow-lg shadow-slate-300/60 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-700 hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="https://github.com/Khemdech"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300/90 bg-white/85 px-5 py-3 font-medium text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700 hover:shadow-md"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/khemdech-neaw/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300/90 bg-white/85 px-5 py-3 font-medium text-slate-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-700 hover:shadow-md"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="animate-float mx-auto w-full max-w-sm">
          <div className="animate-logo-glow rounded-3xl border border-white/80 bg-white/80 p-3 shadow-xl shadow-slate-200/70 backdrop-blur">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-sky-50 via-white to-indigo-50">
              <Image
                src="/profile/Profile.jpg"
                alt="Khemdech Neawnan"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                loading="eager"
                className="object-cover object-[50%_62%]"
              />
            </div>
            <p className="px-2 pb-1 pt-4 text-center text-sm font-semibold tracking-[0.18em] text-slate-500">
              KHEMDECH NEAWNAN
            </p>
          </div>
        </div>
        </section>
      </div>
    </>
  );
}
