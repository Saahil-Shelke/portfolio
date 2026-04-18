import { useState } from 'react';
import { experience } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import { FiBriefcase, FiMapPin, FiChevronDown } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  const { ref, visible } = useScrollReveal();
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="section" id="experience">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'// work experience'}</span>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="section-divider"></div>
        </div>
        <div className="timeline">
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className={`timeline-item ${expanded === exp.id ? 'expanded' : ''}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                {i < experience.length - 1 && <div className="timeline-line"></div>}
              </div>
              <div
                className="timeline-card glass-card"
                onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
              >
                <div className="timeline-card-header">
                  <div>
                    <span className="timeline-period">{exp.period}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <p className="timeline-company">
                      <FiBriefcase size={14} /> {exp.company}
                    </p>
                    <p className="timeline-location">
                      <FiMapPin size={14} /> {exp.location}
                    </p>
                  </div>
                  <FiChevronDown className={`timeline-chevron ${expanded === exp.id ? 'rotated' : ''}`} />
                </div>
                <div className="timeline-bullets">
                  <ul>
                    {exp.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
