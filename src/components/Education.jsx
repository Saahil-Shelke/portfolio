import { education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './Education.css';

export default function Education() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="education">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'# education.py'}</span>
          <h2 className="section-title">Academic Background</h2>
          <div className="section-divider"></div>
        </div>
        <div className="edu-container">
          {education.map((edu, i) => (
            <div key={edu.id} className={`terminal-window edu-terminal ${edu.current ? 'current' : ''}`}>
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">
                  {edu.institution.toLowerCase().replace(/[\s()]/g, '_')}.py
                </span>
                {edu.current && <span className="running-badge">● running</span>}
              </div>
              <div className="terminal-body">
                <div className="edu-code">
                  <p className="code-line">
                    <span className="line-num">{i * 7 + 1}</span>
                    <span className="code-keyword">class</span>{' '}
                    <span className="code-class">{edu.degree.split(' ').slice(-2).join('')}</span>:
                  </p>
                  <p className="code-line">
                    <span className="line-num">{i * 7 + 2}</span>
                    {'    '}degree ={' '}
                    <span className="code-string">"{edu.degree}"</span>
                  </p>
                  <p className="code-line">
                    <span className="line-num">{i * 7 + 3}</span>
                    {'    '}institution ={' '}
                    <span className="code-string">"{edu.institution}"</span>
                  </p>
                  <p className="code-line">
                    <span className="line-num">{i * 7 + 4}</span>
                    {'    '}location ={' '}
                    <span className="code-string">"{edu.location}"</span>
                  </p>
                  <p className="code-line">
                    <span className="line-num">{i * 7 + 5}</span>
                    {'    '}period ={' '}
                    <span className="code-string">"{edu.period}"</span>
                  </p>
                  <p className="code-line">
                    <span className="line-num">{i * 7 + 6}</span>
                    {'    '}details ={' '}
                    <span className="code-string">"{edu.details}"</span>
                  </p>
                  {edu.current && (
                    <p className="code-line">
                      <span className="line-num">{i * 7 + 7}</span>
                      {'    '}status ={' '}
                      <span className="code-keyword">True</span>
                      <span className="cursor blink">█</span>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
