import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './About.css';

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="about">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label"># about</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-layout">
          <div className="terminal-window">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">about.py</span>
            </div>
            <div className="terminal-body about-body">
              <div className="about-code">
                <p><span className="code-keyword">class</span> <span className="code-class">Developer</span>:</p>
                <p>    name = <span className="code-string">"{personalInfo.name}"</span></p>
                <p>    role = <span className="code-string">"{personalInfo.title}"</span></p>
                <p>    location = <span className="code-string">"{personalInfo.location}"</span></p>
                <p>    education = <span className="code-string">"MS CS @ TU Dresden"</span></p>
              </div>

              <div className="about-bio-block">
                <span className="bio-decorator">{'"""'}</span>
                <p className="about-bio">{personalInfo.bio}</p>
                <span className="bio-decorator">{'"""'}</span>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">6+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">1</span>
              <span className="stat-label">IEEE Publication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
