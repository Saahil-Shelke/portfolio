import { publications, awards, volunteering } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './Publications.css';

export default function Publications() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="publications">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'# achievements.py'}</span>
          <h2 className="section-title">Recognition</h2>
          <div className="section-divider"></div>
        </div>

        <div className="terminal-window pub-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">achievements.py — Python 3.12</span>
          </div>
          <div className="terminal-body">
            {/* Publications */}
            <div className="pub-section">
              <p className="pub-class-def">
                <span className="code-keyword">class</span>{' '}
                <span className="code-class">Publications</span>:
              </p>
              {publications.map((pub, i) => (
                <div key={i} className="pub-entry">
                  <p className="pub-attr">
                    {'    '}title ={' '}
                    <span className="code-string">"{pub.title}"</span>
                  </p>
                  <p className="pub-attr">
                    {'    '}venue ={' '}
                    <span className="code-string">"{pub.conference}"</span>
                  </p>
                  <p className="pub-attr">
                    {'    '}
                    <span className="code-comment"># {pub.description}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="pub-divider"></div>

            {/* Awards */}
            <div className="pub-section">
              <p className="pub-class-def">
                <span className="code-keyword">class</span>{' '}
                <span className="code-class">Awards</span>:
              </p>
              {awards.map((award, i) => (
                <div key={i} className="pub-entry">
                  <p className="pub-attr">
                    {'    '}title ={' '}
                    <span className="code-string">"{award.title}"</span>
                  </p>
                  <p className="pub-attr">
                    {'    '}
                    <span className="code-comment"># {award.description}</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="pub-divider"></div>

            {/* Volunteering */}
            <div className="pub-section">
              <p className="pub-class-def">
                <span className="code-keyword">class</span>{' '}
                <span className="code-class">Volunteering</span>:
              </p>
              {volunteering.map((vol, i) => (
                <div key={i} className="pub-entry">
                  <p className="pub-attr">
                    {'    '}role ={' '}
                    <span className="code-string">"{vol.title}"</span>
                  </p>
                  <p className="pub-attr">
                    {'    '}period ={' '}
                    <span className="code-string">"{vol.period}"</span>
                  </p>
                  <p className="pub-attr">
                    {'    '}
                    <span className="code-comment"># {vol.description}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
