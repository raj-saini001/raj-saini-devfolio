import React from 'react';
import { ExternalLinkIcon, GithubIcon, CloseIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <CloseIcon size={22} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
          <span style={{ fontFamily: 'Space Mono', fontWeight: 700, color: 'var(--red)', fontSize: '1.1rem' }}>
            PROJECT {project.id}
          </span>
          {project.featured && <span className="featured-pill">Featured Project</span>}
        </div>

        <h2
          style={{
            fontFamily: 'Barlow Condensed',
            fontSize: '2.4rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1,
            color: 'var(--charcoal)',
            marginBottom: '0.4rem',
          }}
        >
          {project.title}
        </h2>

        <p
          style={{
            fontFamily: 'Space Mono',
            fontSize: '0.8rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--red)',
            marginBottom: '1.5rem',
          }}
        >
          {project.subtitle}
        </p>

        <p
          style={{
            fontSize: '1.05rem',
            lineHeight: 1.85,
            color: 'var(--mid)',
            marginBottom: '1.8rem',
          }}
        >
          {project.longDescription || project.description}
        </p>

        {project.highlights && project.highlights.length > 0 && (
          <div style={{ marginBottom: '2rem' }}>
            <h4
              style={{
                fontFamily: 'Space Mono',
                fontSize: '0.85rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--charcoal)',
                marginBottom: '0.8rem',
              }}
            >
              Key Features & Architectural Highlights
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {project.highlights.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--mid)',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.6rem',
                  }}
                >
                  <span style={{ color: 'var(--red)', fontWeight: 700 }}>▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ marginBottom: '2rem' }}>
          <h4
            style={{
              fontFamily: 'Space Mono',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--charcoal)',
              marginBottom: '0.8rem',
            }}
          >
            Technologies Used
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.stack.map((tech, idx) => (
              <span key={idx} className="tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-red"
            >
              <GithubIcon size={16} /> GitHub Repo ↗
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLinkIcon size={16} /> Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
