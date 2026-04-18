import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './Skills.css';

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="skills">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label"># skills</span>
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-divider"></div>
        </div>

        <div className="terminal-window skills-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">skills.py</span>
          </div>
          <div className="terminal-body">
            <div className="skills-list">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-group">
                  <h3 className="skill-group-title">{category}</h3>
                  <div className="skill-items">
                    {items.map((skill) => (
                      <span key={skill} className="skill-chip">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
