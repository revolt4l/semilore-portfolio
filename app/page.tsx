import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { SkillsSection } from '@/components/sections/skills';
import { ServicesSection } from '@/components/sections/services';
import { CertificationsSection } from '@/components/sections/certifications';
import { GithubSection } from '@/components/sections/github';
import { ContactSection } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ServicesSection />
        <CertificationsSection />
        <GithubSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
