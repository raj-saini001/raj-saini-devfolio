import React from 'react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education">
      <div className="edu-top">
        <p className="section-label reveal">Academic Journey</p>
        <h2 className="big-h edu-big reveal">EDUCATION</h2>
      </div>

      <div className="edu-cards">
        {educationData.map((item, idx) => (
          <div key={idx} className="edu-card reveal">
            <p className="yr">{item.period}</p>
            <h3 className="inst">{item.institution}</h3>
            <p className="degree-label">{item.degree}</p>
            <p>{item.description}</p>
            {item.highlight && <span className="edu-highlight">{item.highlight}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
