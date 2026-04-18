import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './Projects.css';

export default function Projects() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="projects">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'// featured projects'}</span>
          <h2 className="section-title">What I've Built</h2>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="project-card glass-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-highlights">
                {project.highlights.map((h, j) => (
                  <span key={j} className="highlight-tag">{h}</span>
                ))}
              </div>
              <div className="project-tech">
                {project.tech.map((t, j) => (
                  <span key={j} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
