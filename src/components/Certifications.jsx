import React from 'react';
import { certificationsData, marqueeItems } from '../data/portfolioData';

export default function Certifications() {
  // Duplicate marquee items for seamless continuous looping
  const marqueeList = [...marqueeItems, ...marqueeItems];

  return (
    <section id="certs" className="section-pad">
      <p className="section-label reveal">Verified Learning</p>
      <h2 className="big-h certs-big reveal">CERTIFICATIONS</h2>

      {/* Infinite Running Marquee */}
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {marqueeList.map((item, index) => (
            <React.Fragment key={index}>
              <span>{item}</span>
              <span className="dot">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Structured Certification Grid */}
      <div className="cert-grid">
        {certificationsData.map((cert, idx) => (
          <div key={idx} className="cert-item reveal">
            <span className="cert-issuer">{cert.issuer}</span>
            <h3 className="cert-name">{cert.name}</h3>
            {cert.badge && <span className="cert-badge-tag">{cert.badge}</span>}
            <span className="cert-date">{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
