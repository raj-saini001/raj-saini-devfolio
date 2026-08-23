import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // 1. Intersection Observer for Scroll Reveals
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('up');

            // If entry contains skill bars, animate them
            const bars = entry.target.querySelectorAll('.skill-bar');
            bars.forEach((bar) => {
              if (bar.dataset.w) {
                bar.style.width = `${bar.dataset.w}%`;
              }
            });

            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      // Stagger children transition delays if in same container
      if (el.parentElement) {
        const siblings = Array.from(el.parentElement.children).filter((child) =>
          child.classList.contains('reveal')
        );
        const idx = siblings.indexOf(el);
        if (idx > 0 && !el.style.transitionDelay) {
          el.style.transitionDelay = `${idx * 65}ms`;
        }
      }
      revealObserver.observe(el);
    });

    // 2. Observer specifically for standalone skill rows
    const skillBarObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bar = entry.target.querySelector('.skill-bar');
            if (bar && bar.dataset.w) {
              bar.style.width = `${bar.dataset.w}%`;
            }
            skillBarObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    const skillRows = document.querySelectorAll('.skill-row');
    skillRows.forEach((row) => skillBarObserver.observe(row));

    // 3. Active Navigation Section Observer (ScrollSpy)
    const sectionIds = [
      'hero',
      'intro',
      'skills',
      'projects',
      'experience',
      'education',
      'awards',
      'certs',
      'contact',
    ];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => {
      revealObserver.disconnect();
      skillBarObserver.disconnect();
      window.removeEventListener('scroll', handleScrollSpy);
    };
  }, []);

  return (
    <div className="portfolio-app-root">
      {/* Ambient background & grid */}
      <div id="global-bg" />
      <div className="ambient-grid" />

      {/* Fluid custom dual-layer cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
