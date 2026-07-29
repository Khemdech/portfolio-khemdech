import Image from "next/image";
import Link from "next/link";

const technicalSkills = [
  {
    title: "Programming Languages",
    accent: "bg-sky-100 text-sky-700",
    skills: [
      "CSS (Basic)",
      "Dart",
      "Java (Basic)",
      "JavaScript (Basic)",
      "Python",
      "TypeScript (Basic)",
    ],
  },
  {
    title: "Frameworks & Libraries",
    accent: "bg-indigo-100 text-indigo-700",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Database",
    accent: "bg-emerald-100 text-emerald-700",
    skills: ["SQL", "SQLite"],
  },
  {
    title: "Tools",
    accent: "bg-amber-100 text-amber-700",
    skills: [
      "Android Studio",
      "Git",
      "GitHub",
      "Microsoft Excel",
      "Visual Studio",
      "Visual Studio Code",
      "Weka",
    ],
  },
  {
    title: "Soft Skills",
    accent: "bg-rose-100 text-rose-700",
    skills: ["Self Responsibility", "Time Management"],
  },
];

const activities = [
  {
    title: "Best AI Prototype for Real-World Impact Award",
    type: "Activity",
    date: "21 May 2026",
    images: ["/activities/activity-3.jpg"],
    description:
      "Our team Gyoubu(เกียวบู) received the Best AI Prototype for Real-World Impact Award, organized by the School of Information Technology and Innovation at Bangkok University. The project focused on applying AI concepts to analyze conversations and demonstrate practical real-world impact.",
    projectLink: "#projects",
  },
];

const projects = [
  {
    title: "Gyoubu AI Project",
    category: "AI Conversation Intelligence",
    summary:
      "A project that uses AI to process and analyze conversations between customers and call center agents. It can identify customer satisfaction, call intent, and product-related issues.",
    role: "Team Member",
    techStack: [
      "Python",
      "TypeScript",
      "CSS",
      "JavaScript",
      "SQL",
    ],
    image: "/projects/gyoubu-ai/screenshots/summary-insight.png",
    imageAlt: "Gyoubu AI conversation analysis results",
    responsibilities: [
      "Collaborated with the team on the project concept and development",
    ],
    links: {
      github: "https://github.com/",
      demo: "#",
      figma: "#",
    },
    learning:
      "This project gave me experience collaborating with a team and exploring AI applications for real-world problems.",
    detailsLink: "/projects/gyoubu-ai",
  },
  {
    title: "Phishing Website Detection",
    category: "Data Analytics and Mining",
    summary:
      "This project applies data mining techniques to classify and analyze the PhiUSIIL Phishing URL Dataset, separating potentially risky websites from legitimate ones.",
    role: "Research Contributor",
    techStack: ["Data Mining", "Machine Learning", "Random Forest", "Weka"],
    image: "/projects/data-mining-project/screenshots/workflow.png",
    imageAlt: "Weka workflow for the phishing website detection project",
    responsibilities: [
      "Reviewed three related research papers",
      "Analyzed the strengths and limitations of previous studies",
    ],
    links: {
      github: "https://github.com/",
      demo: "#",
      figma: "#",
    },
    learning:
      "This project helped me understand the data mining workflow and how to evaluate a classification model.",
    detailsLink: "/projects/phishing-website-detection",
  },
];

const education = {
  school: "Bangkok University",
  degree: "Bachelor of Computer Science",
  faculty: "School of Information Technology and Innovation",
  period: "2023 - Present",
  gpax: "3.31",
};

const certificates = [
  {
    id: "ai-governance-ethics",
    title: "AI Governance & Ethics",
    issuer: "TDGA / DGA",
    year: "2025",
    credentialUrl: "/certificates/AI-Governance&Ethics.pdf",
    previewImage: "/certificates/previews/ai-governance-ethics.png",
  },
  {
    id: "aws-academy-generative-ai",
    title: "AWS Academy Generative AI",
    issuer: "AWS Academy",
    year: "2026",
    credentialUrl: "/certificates/AWSAcademy_Gen_AI.pdf",
    previewImage: "/certificates/previews/aws-academy-generative-ai.png",
  },
  {
    id: "aws-academy-machine-learning-nlp",
    title: "AWS Academy Graduate - Machine Learning for NLP",
    issuer: "AWS Academy",
    year: "2026",
    credentialUrl:
      "/certificates/AWS_Academy_Graduate_Machine_Learning_for_NLP.pdf",
    previewImage: "/certificates/previews/aws-ml-nlp.png",
  },
  {
    id: "aws-academy-machine-learning-foundations",
    title: "AWS Academy Graduate - Machine Learning Foundations",
    issuer: "AWS Academy",
    year: "2026",
    credentialUrl:
      "/certificates/AWS_Academy_Graduate_Machine_Learning_Foundations.pdf",
    previewImage: "/certificates/previews/aws-ml-foundations.png",
  },
  {
    id: "oracle-cloud-ai-foundation",
    title: "Oracle Cloud Infrastructure AI Foundations",
    issuer: "Oracle",
    year: "2025",
    credentialUrl: "/certificates/Oracle-cloud-infrastructor-AI-Foundation.pdf",
    previewImage: "/certificates/previews/oracle-ai-foundation.png",
  },
  {
    id: "thnca-cybersecurity-foundation",
    title: "Cybersecurity Foundation Course",
    issuer: "THNCA",
    year: "2025",
    credentialUrl:
      "/certificates/THNCA_Cybersecurity%20Foundation%20Course.pdf",
    previewImage: "/certificates/previews/thnca-cybersecurity-foundation.png",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "khemdech.neaw@gmail.com",
    href: "mailto:khemdech.neaw@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Khemdech",
    href: "https://github.com/Khemdech",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/khemdech neawnan",
    href: "https://www.linkedin.com/in/khemdech-neaw/",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-slate-800">
      <nav className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href="#home" className="group flex items-center gap-3 text-xl font-bold text-slate-950 md:text-2xl">
            <span className="relative h-10 w-12 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
              <Image
                src="/brand/kn-logo.jpg"
                alt="KN logo"
                fill
                sizes="48px"
                className="scale-150 object-cover"
              />
            </span>
            <span>Khemdech <span className="text-sky-600">Neawnan</span></span>
          </a>

          <div className="hidden gap-6 text-base font-medium text-slate-600 md:flex">
            <a href="#home" className="transition hover:text-sky-600">
              Home
            </a>
            <a href="#about" className="transition hover:text-sky-600">
              About
            </a>
            <a href="#skills" className="transition hover:text-sky-600">
              Skills
            </a>
            <a href="#activities" className="transition hover:text-sky-600">
              Activities
            </a>
            <a href="#projects" className="transition hover:text-sky-600">
              Projects
            </a>
            <a href="#certificates" className="transition hover:text-sky-600">
              Certificates
            </a>
            <a href="#contact" className="transition hover:text-sky-600">
              Contact
            </a>
          </div>
        </div>
      </nav>

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
            Computer Science Student · Bangkok University
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
                alt="KN personal logo"
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

      <section id="about" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-semibold text-sky-700">ABOUT ME</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            About Me
          </h2>

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

      <section id="activities" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-semibold text-sky-700">
            ACTIVITIES & CONTRIBUTIONS
          </p>
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
                  {activity.images.length > 0 ? (
                    <div className="border-b border-slate-200 bg-white p-2 lg:border-b-0 lg:border-r">
                      <Image
                        src={activity.images[0]}
                        alt={`${activity.title} main activity photo`}
                        width={900}
                        height={600}
                        className="h-full min-h-72 w-full rounded-lg object-cover"
                      />
                    </div>
                  ) : (
                    <div className="flex min-h-72 items-center justify-center border-b border-slate-200 bg-gradient-to-br from-sky-100 via-white to-amber-100 text-center text-slate-500 lg:border-b-0 lg:border-r">
                      <span>
                        Activity Image
                        <br />
                        Add later
                      </span>
                    </div>
                  )}

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

      <section id="projects" className="border-b border-slate-200 bg-[#fbfaf7]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-semibold text-sky-700">PROJECTS</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Projects
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className={`relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg ${project.detailsLink ? "cursor-pointer" : ""}`}
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
                  <div className="flex h-44 items-center justify-center border-b border-slate-200 bg-gradient-to-br from-slate-100 via-white to-sky-100 text-slate-500">
                    Project Screenshot
                  </div>
                )}

                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-950">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    {project.summary}
                  </p>

                  {project.detailsLink && (
                    <div className="mt-5">
                      <p className="text-sm font-semibold text-slate-900">
                        Tech Stack
                      </p>
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
                  )}

                  {project.detailsLink && (
                    <span className="pointer-events-none mt-5 inline-flex rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white">
                      View Project Details →
                    </span>
                  )}

                  {!project.detailsLink && (
                    <details className="project-details mt-5 rounded-lg border border-slate-200 bg-[#fbfaf7] p-4">
                    <summary className="cursor-pointer font-semibold text-sky-700">
                      View project details
                    </summary>

                    <div className="mt-4 space-y-4 text-slate-600">
                      <div>
                        <p className="font-semibold text-slate-900">Role</p>
                        <p className="mt-2">{project.role}</p>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          Tech Stack
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          Responsibilities
                        </p>
                        <ul className="mt-2 list-disc space-y-1 pl-5">
                          {project.responsibilities.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">Links</p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
                          >
                            GitHub
                          </a>
                          <a
                            href={project.links.demo}
                            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
                          >
                            Live Demo
                          </a>
                          <a
                            href={project.links.figma}
                            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-500 hover:text-sky-700"
                          >
                            Figma
                          </a>
                        </div>
                      </div>

                      <div>
                        <p className="font-semibold text-slate-900">
                          What I learned
                        </p>
                        <p className="mt-2 leading-7">{project.learning}</p>
                      </div>
                    </div>
                    </details>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-semibold text-sky-700">CONTACT</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-950">Contact</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-sky-200 hover:shadow-md"
            >
              <p className="text-sm font-semibold text-sky-700">
                {link.label}
              </p>
              <p className="mt-2 text-lg font-medium text-slate-800">
                {link.value}
              </p>
            </a>
          ))}
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">Phone</p>
            <p className="mt-2 text-lg font-medium text-slate-800">
              097-152-0826
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-sky-700">Location</p>
            <p className="mt-2 text-lg font-medium text-slate-800">
              Phra Nakhon Si Ayutthaya, Thailand
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-7 text-center text-sm text-slate-500">
        © 2026 Khemdech Neawnan
      </footer>
    </main>
  );
}
