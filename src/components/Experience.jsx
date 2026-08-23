import React from 'react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="exp-top">
        <p className="section-label cream reveal">Practical Background</p>
        <h2 className="big-h exp-big cream reveal">EXPERIENCE</h2>
      </div>

      <div className="exp-list">
        {experienceData.map((item, idx) => (
          <div key={idx} className="exp-item reveal">
            <span className="exp-period">{item.period}</span>
            <div>
              <div className="exp-role">{item.role}</div>
              <div className="exp-org">{item.org}</div>
              {item.description && <p className="exp-desc">{item.description}</p>}
            </div>
            <span className="exp-badge">{item.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
