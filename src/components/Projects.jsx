import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import { FiExternalLink, FiSmartphone, FiFileText } from 'react-icons/fi';
import './Projects.css';

export default function Projects() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="projects">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">
            <span className="prompt-user">sahil@portfolio</span>:<span className="prompt-path">~</span>$ <span className="prompt-cmd">ls projects/</span>
          </span>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={project.id} className="terminal-window project-card">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">
                  {project.title.toLowerCase().replace(/[\s—&]/g, '_')}.py
                </span>
                <span className="project-index">#{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="terminal-body project-body">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-desc-block">
                  <p className="project-desc">{project.description}</p>
                </div>
                <div className="project-footer">
                  <div className="project-tags">
                    {project.tech.map((t, j) => (
                      <span key={j} className="project-tag">{t}</span>
                    ))}
                  </div>
                  {(project.links?.live || project.links?.app || project.links?.paper) && (
                    <div className="project-links">
                      {project.links.live && (
                        <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FiExternalLink size={14} /> Live
                        </a>
                      )}
                      {project.links.app && (
                        <a href={project.links.app} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FiSmartphone size={14} /> App
                        </a>
                      )}
                      {project.links.paper && (
                        <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="project-link">
                          <FiFileText size={14} /> Paper
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
