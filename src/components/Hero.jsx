import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-backdrop-text">DEV</div>

      <div className="hero-content">
        <div className="hero-badge reveal">
          <span className="pulse-dot"></span>
          <span>{personalInfo.university} · B.Tech CSE</span>
        </div>

        <h1 className="hero-title reveal">
          <span>{personalInfo.firstName}</span> <span className="outline-text">{personalInfo.lastName}</span>
        </h1>

        <div className="hero-subtitle reveal">
          <span>{personalInfo.role}</span>
        </div>

        <p className="hero-desc reveal">
          Engineering modern, reliable web solutions from <strong>Mandsaur University</strong>.
          Specialized in full-stack architecture, clean JavaScript/React interfaces, and scalable database systems.
        </p>

        <div className="hero-actions reveal">
          <a href="#projects" className="btn-red">
            View Projects ↗
          </a>
          <a
            href={personalInfo.resumeUrl}
            download="Raj_Saini_Resume.pdf"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Raj Saini Resume PDF"
          >
            Download Resume ↓
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch ↗
          </a>
        </div>
      </div>

      <a href="#intro" className="hero-scroll-down" aria-label="Scroll to About Section">
        <span>Scroll</span>
        <div className="scroll-indicator-line"></div>
      </a>
    </section>
  );
}
