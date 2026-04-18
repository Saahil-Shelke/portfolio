import { projects } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './Projects.css';

export default function Projects() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="projects">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'# projects.py'}</span>
          <h2 className="section-title">What I've Built</h2>
          <div className="section-divider"></div>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="terminal-window project-terminal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">
                  {project.title.toLowerCase().replace(/[\s—&]/g, '_')}.py
                </span>
              </div>
              <div className="terminal-body project-body">
                <div className="project-icon">{project.icon}</div>
                <p className="project-def">
                  <span className="code-keyword">class</span>{' '}
                  <span className="code-class">{project.title.replace(/[\s—&]/g, '')}</span>:
                </p>
                <p className="project-docstring">
                  <span className="code-string-triple">"""</span>
                  <span className="code-string">{project.description}</span>
                  <span className="code-string-triple">"""</span>
                </p>
                <div className="project-highlights">
                  {project.highlights.map((h, j) => (
                    <span key={j} className="highlight-tag">
                      <span className="tag-hash"># </span>{h}
                    </span>
                  ))}
                </div>
                <div className="project-tech">
                  <span className="tech-label">requirements</span>
                  <span className="tech-eq"> = </span>
                  <span className="tech-bracket">[</span>
                  {project.tech.map((t, j) => (
                    <span key={j} className="tech-tag">
                      "{t}"{j < project.tech.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                  <span className="tech-bracket">]</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
