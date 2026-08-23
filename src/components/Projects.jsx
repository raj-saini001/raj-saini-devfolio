import React, { useState } from 'react';
import { projectsData, personalInfo } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { ArrowUpRightIcon } from './Icons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-pad">
      <div className="proj-top">
        <div>
          <p className="section-label reveal">Selected Work</p>
          <h2 className="big-h proj-big reveal">PROJECTS</h2>
        </div>
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline reveal"
        >
          All on GitHub ↗
        </a>
      </div>

      <div className="project-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`project-card reveal ${project.featured ? 'is-featured' : ''}`}
          >
            <div className="card-top-row">
              <span className="project-num">{project.id}</span>
              {project.featured && <span className="featured-pill">Featured Project</span>}
            </div>

            <h3 className="project-title">{project.title}</h3>
            {project.subtitle && <div className="project-subtitle">{project.subtitle}</div>}

            <p className="project-desc">{project.description}</p>

            <div className="project-stack">
              {project.stack.map((tech, idx) => (
                <span key={idx} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-card-footer">
              <button
                className="project-card-btn"
                onClick={() => setSelectedProject(project)}
              >
                Project Details <ArrowUpRightIcon size={16} />
              </button>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-card-btn"
                >
                  Code Repo ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
