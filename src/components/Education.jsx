import { education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './Education.css';

export default function Education() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="education">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label"># education</span>
          <h2 className="section-title">Education</h2>
          <div className="section-divider"></div>
        </div>
        <div className="edu-list">
          {education.map((edu) => (
            <div key={edu.id} className={`terminal-window edu-card ${edu.current ? 'current' : ''}`}>
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">
                  {edu.degree.split(' ')[0].toLowerCase()}.py
                </span>
                {edu.current && <span className="edu-running">● active</span>}
              </div>
              <div className="terminal-body">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <p className="edu-meta">{edu.location} · {edu.period}</p>
                <p className="edu-details">{edu.details}</p>
                {edu.current && (
                  <span className="edu-cursor">
                    <span className="cursor blink">█</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
