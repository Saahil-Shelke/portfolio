import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './Projects.css';

export default function Projects() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="projects">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label"># projects</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="terminal-window project-card">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">
                  {project.title.toLowerCase().replace(/[\s—&]/g, '_')}.py
                </span>
              </div>
              <div className="terminal-body project-body">
                <div className="project-top">
                  <span className="project-icon">{project.icon}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>
                <div className="project-desc-block">
                  <span className="desc-decorator">{'"""'}</span>
                  <p className="project-desc">{project.description}</p>
                  <span className="desc-decorator">{'"""'}</span>
                </div>
                <div className="project-tags">
                  {project.tech.map((t, j) => (
                    <span key={j} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
