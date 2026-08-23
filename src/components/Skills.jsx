import React from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const categories = [skillsData.frontend, skillsData.backend, skillsData.tools];

  return (
    <section id="skills" className="section-pad">
      <p className="section-label reveal">What I Bring</p>
      <h2 className="big-h skills-big reveal">
        PERSONAL<br />SKILLS
      </h2>

      <div className="skills-grid">
        {categories.map((group, gIdx) => (
          <div key={gIdx}>
            <div className="skill-group-title reveal">
              <span>{group.category}</span>
              <span style={{ fontSize: '0.75rem', opacity: 0.6 }}>0{gIdx + 1}</span>
            </div>

            <div className="skill-items">
              {group.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-row reveal">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-wrap">
                    <div
                      className="skill-bar"
                      data-w={skill.level}
                      style={{ width: '0%' }}
                    />
                  </div>
                  <span className="skill-percent">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
