import React from 'react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="awards" className="section-pad">
      <p className="section-label cream reveal">Recognition</p>
      <h2 className="big-h awards-big cream reveal">
        RECOGNITIONS<br />& ACHIEVEMENTS
      </h2>

      <div className="awards-grid">
        {achievementsData.map((item, idx) => (
          <div key={idx} className="award-card reveal">
            <div className="award-icon">{item.icon}</div>
            <h3 className="award-title">{item.title}</h3>
            <div className="award-org">{item.org}</div>
            <p className="award-detail">{item.detail}</p>
            <div className="award-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
