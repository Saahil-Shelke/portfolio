import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import './About.css';

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="about">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'// about me'}</span>
          <h2 className="section-title">Who I Am</h2>
          <div className="section-divider"></div>
        </div>
        <div className="about-content">
          <div className="about-text">
            <div className="code-block">
              <span className="code-keyword"></span>{' '}
              <span className="code-var">developer</span> = {'{'}
              <div className="code-indent">
                <span className="code-key">"name"</span>: <span className="code-string">"{personalInfo.name}"</span>,
              </div>
              <div className="code-indent">
                <span className="code-key">"role"</span>: <span className="code-string">"{personalInfo.title}"</span>,
              </div>
              <div className="code-indent">
                <span className="code-key">"location"</span>: <span className="code-string">"{personalInfo.location}"</span>,
              </div>
              <div className="code-indent">
                <span className="code-key">"education"</span>: <span className="code-string">"MS CS @ TU Dresden"</span>,
              </div>
              <div className="code-indent">
                <span className="code-key">"passion"</span>: <span className="code-string">"Building intelligent systems"</span>,
              </div>
              {'}'}
            </div>
            <p className="about-bio">{personalInfo.bio}</p>
          </div>
          <div className="about-stats">
            <div className="stat-card glass-card">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number">5+</span>
              <span className="stat-label">Projects Shipped</span>
            </div>
            <div className="stat-card glass-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
