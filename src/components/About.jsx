import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="intro" className="section-pad">
      <div className="intro-big-watermark">ABOUT</div>

      <div className="intro-content">
        {/* Left Column: Bio & Core Focus */}
        <div className="intro-col">
          <p className="section-label reveal">Who I Am</p>
          <h2 className="reveal">
            Hello,<br />
            I'm <em>{personalInfo.name}</em>
          </h2>

          <p className="reveal">
            I'm a <strong>B.Tech Computer Science & Engineering</strong> student at{' '}
            <strong>{personalInfo.university}</strong> with a passion for architecting full-stack web applications,
            robust backend services, and interactive user interfaces.
            <br /><br />
            My focus centers on end-to-end development with the <strong>MERN stack</strong>, relational databases like{' '}
            <strong>MySQL</strong>, NoSQL storage with <strong>MongoDB</strong>, and modern styling utilities like{' '}
            <strong>Tailwind CSS</strong>. I thrive on translating real-world problems into clean, maintainable software.
          </p>

          <div className="intro-tags reveal">
            {personalInfo.focusTags.map((tag, idx) => (
              <span key={idx} className="intro-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Stats & Action Links */}
        <div className="intro-col">
          <p className="section-label reveal">At a Glance</p>

          <div className="intro-stats-row reveal">
            {personalInfo.stats.map((stat, index) => (
              <div key={index} className="i-stat">
                <div className="num">
                  {stat.num.replace(/[^0-9]/g, '')}
                  <span>{stat.num.replace(/[0-9]/g, '') || ''}</span>
                </div>
                <div className="lbl">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="intro-btns reveal">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              GitHub ↗
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              LinkedIn ↗
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
