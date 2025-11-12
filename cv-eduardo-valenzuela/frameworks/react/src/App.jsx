import { Layout } from './components/Layout.jsx';
import { Hero } from './components/Hero.jsx';
import { AboutSection } from './components/sections/About.jsx';
import { ExperienceSection } from './components/sections/Experience.jsx';
import { ProjectsSection } from './components/sections/Projects.jsx';
import { SkillsSection } from './components/sections/Skills.jsx';
import { ContactSection } from './components/sections/Contact.jsx';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </Layout>
  );
}

export default App;
