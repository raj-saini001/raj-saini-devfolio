import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { MailIcon, LinkedinIcon, GithubIcon } from './Icons';

export default function Contact() {
  const mailtoLink = `mailto:${personalInfo.email}?subject=Hello%20Raj%20-%20Portfolio%20Inquiry`;

  return (
    <section id="contact">
      <div className="contact-inner">
        <p className="section-label cream reveal" style={{ justifyContent: 'center' }}>
          Let's Connect
        </p>

        <h2 className="big-h contact-big cream reveal">
          GET IN<br />TOUCH
        </h2>

        <p className="contact-sub reveal">
          Whether you have an exciting full-stack opportunity, want to collaborate on software projects,
          discuss database architecture, or simply connect — my inbox is always open.
        </p>

        <div className="contact-links reveal">
          <a
            href={mailtoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <MailIcon size={16} /> MAIL ↗
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <LinkedinIcon size={16} /> LINKEDIN ↗
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <GithubIcon size={16} /> GITHUB ↗
          </a>
        </div>
      </div>
    </section>
  );
}
