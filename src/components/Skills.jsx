import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './Skills.css';

export default function Skills() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="skills">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'# skills.py'}</span>
          <h2 className="section-title">Skills & Tools</h2>
          <div className="section-divider"></div>
        </div>

        <div className="terminal-window skills-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">skills.py — pip freeze</span>
          </div>
          <div className="terminal-body">
            <div className="skills-pip">
              <p className="pip-prompt">
                <span className="prompt-symbol">{'>>>'}</span>{' '}
                <span className="code-keyword">from</span> sahil{' '}
                <span className="code-keyword">import</span> skills
              </p>
              <p className="pip-prompt">
                <span className="prompt-symbol">{'>>>'}</span>{' '}
                skills.list_all()
              </p>
            </div>
            <div className="skills-grid">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <h3 className="skill-category-title">
                    <span className="dict-key">"{category}"</span>
                    <span className="dict-colon">:</span>{' '}
                    <span className="dict-bracket">[</span>
                  </h3>
                  <div className="skill-tags">
                    {items.map((skill, i) => (
                      <span
                        key={skill}
                        className="skill-tag"
                        style={{ animationDelay: `${i * 0.08}s` }}
                      >
                        <span className="skill-quote">"</span>
                        {skill}
                        <span className="skill-quote">"</span>
                      </span>
                    ))}
                  </div>
                  <span className="dict-bracket-close">]</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
