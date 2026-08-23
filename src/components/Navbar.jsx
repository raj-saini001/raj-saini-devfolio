import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className={`portfolio-nav ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          {personalInfo.name.toUpperCase()}
          <span className="accent">.</span>
        </a>

        <div className="nav-right">
          <ul className="nav-desktop-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={activeSection === link.href.replace('#', '') ? 'active' : ''}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            className={`hamburger-btn ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`menu-backdrop ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu} />
      <ul className={`mobile-menu-drawer ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={activeSection === link.href.replace('#', '') ? 'active' : ''}
              onClick={closeMenu}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
