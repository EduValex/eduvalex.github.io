import { Layout } from './components/Layout.jsx';
import { Hero } from './components/Hero.jsx';
import { AboutSection } from './components/sections/About.jsx';
import { ExperienceSection } from './components/sections/Experience.jsx';
import { ProjectsSection } from './components/sections/Projects.jsx';
import { SkillsSection } from './components/sections/Skills.jsx';
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
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </Layout>
    </>
  );
}

export default App;
