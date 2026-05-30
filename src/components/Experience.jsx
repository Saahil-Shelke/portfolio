import { useState } from 'react';
import { experience } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import { FiChevronDown, FiMapPin } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  const { ref, visible } = useScrollReveal();
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="section" id="experience">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label"># experience</span>
          <h2 className="section-title">Work Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="exp-list">
          {experience.map((exp) => (
            <div key={exp.id} className="exp-card">
              <div className="exp-top">
                <div className="exp-info">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  <p className="exp-meta">
                    <FiMapPin size={12} /> {exp.location}
                    <span className="exp-sep">·</span>
                    {exp.period}
                  </p>
                </div>
                <span className={`exp-type ${exp.type}`}>{exp.type}</span>
              </div>

              <button
                className="exp-toggle"
                onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
              >
                <span>{expanded === exp.id ? 'Hide details' : 'Show details'}</span>
                <FiChevronDown className={expanded === exp.id ? 'rotated' : ''} />
              </button>

              <div className={`exp-details ${expanded === exp.id ? 'open' : ''}`}>
                <ul>
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
