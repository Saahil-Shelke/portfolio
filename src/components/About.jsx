import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './About.css';

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="about">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'# about_me.py'}</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider"></div>
        </div>

        <div className="terminal-window about-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">about_me.py — Python 3.12</span>
          </div>
          <div className="terminal-body">
            <div className="code-block">
              <p className="code-line">
                <span className="line-num">1</span>
                <span className="code-keyword">class</span>{' '}
                <span className="code-class">Developer</span>:
              </p>
              <p className="code-line">
                <span className="line-num">2</span>
                {'    '}
                <span className="code-keyword">def</span>{' '}
                <span className="code-func">__init__</span>
                <span className="code-paren">(</span>
                <span className="code-self">self</span>
                <span className="code-paren">)</span>:
              </p>
              <p className="code-line">
                <span className="line-num">3</span>
                {'        '}self.<span className="code-attr">name</span> ={' '}
                <span className="code-string">"{personalInfo.name}"</span>
              </p>
              <p className="code-line">
                <span className="line-num">4</span>
                {'        '}self.<span className="code-attr">role</span> ={' '}
                <span className="code-string">"{personalInfo.title}"</span>
              </p>
              <p className="code-line">
                <span className="line-num">5</span>
                {'        '}self.<span className="code-attr">location</span> ={' '}
                <span className="code-string">"{personalInfo.location}"</span>
              </p>
              <p className="code-line">
                <span className="line-num">6</span>
                {'        '}self.<span className="code-attr">education</span> ={' '}
                <span className="code-string">"MS CS @ TU Dresden"</span>
              </p>
              <p className="code-line">
                <span className="line-num">7</span>
                {'        '}self.<span className="code-attr">passion</span> ={' '}
                <span className="code-string">"Building intelligent systems"</span>
              </p>
              <p className="code-line empty">
                <span className="line-num">8</span>
              </p>
              <p className="code-line">
                <span className="line-num">9</span>
                {'    '}
                <span className="code-keyword">def</span>{' '}
                <span className="code-func">bio</span>
                <span className="code-paren">(</span>
                <span className="code-self">self</span>
                <span className="code-paren">)</span> -&gt;{' '}
                <span className="code-type">str</span>:
              </p>
              <p className="code-line">
                <span className="line-num">10</span>
                {'        '}
                <span className="code-keyword">return</span>{' '}
                <span className="code-string-triple">"""</span>
              </p>
            </div>
            <p className="about-bio">{personalInfo.bio}</p>
            <p className="code-line code-close">
              <span className="line-num">11</span>
              {'        '}
              <span className="code-string-triple">"""</span>
            </p>
          </div>
        </div>

        <div className="about-stats-row">
          <div className="stat-card glass-card">
            <span className="stat-number">2+</span>
            <span className="stat-label">years_exp</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-number">6+</span>
            <span className="stat-label">projects_shipped</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-number">15+</span>
            <span className="stat-label">technologies</span>
          </div>
          <div className="stat-card glass-card">
            <span className="stat-number">1</span>
            <span className="stat-label">ieee_publication</span>
          </div>
        </div>
      </div>
    </section>
  );
}
