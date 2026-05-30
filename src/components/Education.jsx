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
            <div key={edu.id} className={`edu-card ${edu.current ? 'current' : ''}`}>
              <div className="edu-card-top">
                <h3 className="edu-degree">{edu.degree}</h3>
                {edu.current && <span className="edu-badge">active</span>}
              </div>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-meta">{edu.location} · {edu.period}</p>
              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
