import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';

function AppContent() {
  const [activeSection, setActiveSection] = useState('home');
  const { language, toggleLanguage } = useLanguage();

  const handleSetActive = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar activeSection={activeSection} language={language} toggleLanguage={toggleLanguage} />
      <main>
        <section id="home">
          <Hero onSetActive={() => handleSetActive('home')} />
        </section>
        <section id="about">
          <About onSetActive={() => handleSetActive('about')} />
        </section>
        <section id="skills">
          <Skills onSetActive={() => handleSetActive('skills')} />
        </section>
        <section id="projects">
          <Projects onSetActive={() => handleSetActive('projects')} />
        </section>
        <section id="experience">
          <Experience onSetActive={() => handleSetActive('experience')} />
        </section>
        <section id="education">
          <Education onSetActive={() => handleSetActive('education')} />
        </section>
        <section id="contact">
          <Contact onSetActive={() => handleSetActive('contact')} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;