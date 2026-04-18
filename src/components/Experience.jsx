import { useState } from 'react';
import { experience } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import { FiChevronDown } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  const { ref, visible } = useScrollReveal();
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="section" id="experience">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'# experience.py'}</span>
          <h2 className="section-title">Where I've Worked</h2>
          <div className="section-divider"></div>
        </div>

        <div className="exp-container">
          {experience.map((exp, i) => (
            <div
              key={exp.id}
              className="terminal-window exp-terminal"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">
                  {exp.company.toLowerCase().replace(/[\s&()]/g, '_')}.py
                </span>
              </div>
              <div className="terminal-body">
                <div className="exp-code">
                  <p className="code-line">
                    <span className="line-num">1</span>
                    <span className="code-keyword">class</span>{' '}
                    <span className="code-class">{exp.role.replace(/\s/g, '')}</span>:
                  </p>
                  <p className="code-line">
                    <span className="line-num">2</span>
                    {'    '}
                    <span className="code-string-triple">"""</span>
                    <span className="code-string">{exp.company}</span>
                    <span className="code-string-triple">"""</span>
                  </p>
                  <p className="code-line">
                    <span className="line-num">3</span>
                    {'    '}company ={' '}
                    <span className="code-string">"{exp.company}"</span>
                  </p>
                  <p className="code-line">
                    <span className="line-num">4</span>
                    {'    '}location ={' '}
                    <span className="code-string">"{exp.location}"</span>
                  </p>
                  <p className="code-line">
                    <span className="line-num">5</span>
                    {'    '}period ={' '}
                    <span className="code-string">"{exp.period}"</span>
                  </p>
                  <p className="code-line">
                    <span className="line-num">6</span>
                    {'    '}type ={' '}
                    <span className="code-string">"{exp.type}"</span>
                  </p>
                </div>
                <div
                  className="exp-expand-trigger"
                  onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                >
                  <span className="exp-expand-label">
                    <span className="code-keyword">def</span>{' '}
                    <span className="code-func">achievements</span>
                    <span className="code-paren">(self)</span>:
                  </span>
                  <FiChevronDown className={`exp-chevron ${expanded === exp.id ? 'rotated' : ''}`} />
                </div>
                <div className={`exp-bullets ${expanded === exp.id ? 'expanded' : ''}`}>
                  <ul>
                    {exp.bullets.map((b, j) => (
                      <li key={j}>
                        <span className="bullet-prefix">{'>>> '}</span>
                        {b}
                      </li>
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
