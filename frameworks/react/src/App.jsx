import { Layout } from './components/Layout.jsx';
import { Hero } from './components/Hero.jsx';
import { AboutSection } from './components/sections/About.jsx';
import { ExperienceSection } from './components/sections/Experience.jsx';
import { EducationSection } from './components/sections/Education.jsx';
import { ProjectsSection } from './components/sections/Projects.jsx';
import { SkillsSection } from './components/sections/Skills.jsx';
import { ServicesSection } from './components/sections/Services.jsx';
import { ContactSection } from './components/sections/Contact.jsx';
import { CursorEffect } from './components/CursorEffect.jsx';
import { ScrollProgress } from './components/ScrollProgress.jsx';
import { BackToTop } from './components/BackToTop.jsx';

function App() {
  return (
    <>
      {/* Efectos visuales cool */}
      <CursorEffect />
      <ScrollProgress />
      <BackToTop />
      
      <Layout>
        <Hero />
        {/* Contenedor con márgenes laterales desde "Sobre mí" hacia abajo */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AboutSection />
          <ServicesSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </Layout>
    </>
  );
}

export default App;
