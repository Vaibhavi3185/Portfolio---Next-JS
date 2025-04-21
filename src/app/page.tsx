// src/app/page.tsx
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <About />
      <Skills />
      <Experience />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}