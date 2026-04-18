import { education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import { FiBookOpen } from 'react-icons/fi';
import './Education.css';

export default function Education() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="education">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'// education'}</span>
          <h2 className="section-title">Academic Background</h2>
          <div className="section-divider"></div>
        </div>
        <div className="edu-grid">
          {education.map((edu) => (
            <div key={edu.id} className={`edu-card glass-card ${edu.current ? 'current' : ''}`}>
              {edu.current && <span className="edu-badge">Currently Pursuing</span>}
              <div className="edu-icon"><FiBookOpen size={24} /></div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-location">{edu.location}</p>
              <span className="edu-period">{edu.period}</span>
              <p className="edu-details">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
