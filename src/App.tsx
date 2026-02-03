import React, { Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import { ExperienceTimeline } from './components/ExperienceTimeline/ExperienceTimeline';
import { Certifications } from './components/Certifications/Certifications';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-primary selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <ExperienceTimeline />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
