import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <span>
        © {currentYear} <strong>{personalInfo.name.toUpperCase()}</strong> · ALL RIGHTS RESERVED
      </span>
      <span>
        {personalInfo.university.toUpperCase()} · CSE
      </span>
    </footer>
  );
}
