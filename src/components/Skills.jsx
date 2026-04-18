import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './Skills.css';

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="skills">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'// tech stack'}</span>
          <h2 className="section-title">Skills & Tools</h2>
          <div className="section-divider"></div>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category glass-card">
              <h3 className="skill-category-title">{category}</h3>
              <div className="skill-tags">
                {items.map((skill, i) => (
                  <span
                    key={skill}
                    className="skill-tag"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
