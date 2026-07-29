import { AboutSection } from "./components/AboutSection";
import { ActivitiesSection } from "./components/ActivitiesSection";
import { CertificatesSection } from "./components/CertificatesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteHeader } from "./components/SiteHeader";
import { SkillsSection } from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen text-slate-800">
      <SiteHeader />
      <AboutSection />
      <SkillsSection />
      <ActivitiesSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
