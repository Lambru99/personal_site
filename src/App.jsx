import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import LanguageSwitcher from './components/LanguageSwitcher';
import './index.css';
import './i18n'; // L'importazione di i18n qui è corretta

function App() {
  return (
    <>
      
      <HeroSection />
      <LanguageSwitcher />
      <AboutSection />
      <SkillsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}

export default App;