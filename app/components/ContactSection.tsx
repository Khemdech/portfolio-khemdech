import { contactLinks } from "../data/portfolio";

export function ContactSection() {
  return (
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
            <p className="text-sm font-semibold text-sky-700">{link.label}</p>
            <p className="mt-2 text-lg font-medium text-slate-800">
              {link.value}
            </p>
          </a>
        ))}
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-sky-700">Phone</p>
          <p className="mt-2 text-lg font-medium text-slate-800">097-152-0826</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-sky-700">Location</p>
          <p className="mt-2 text-lg font-medium text-slate-800">
            Phra Nakhon Si Ayutthaya, Thailand
          </p>
        </div>
      </div>
    </section>
  );
}
