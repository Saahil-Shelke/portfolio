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
                <p>&nbsp;</p>
                <p><span className="code-indent" /><span className="code-keyword">def</span> <span className="code-func">__init__</span>(<span className="code-self">self</span>):</p>
                <p><span className="code-indent2" /><span className="code-self">self</span>.name = <span className="code-string">"{personalInfo.name}"</span></p>
                <p><span className="code-indent2" /><span className="code-self">self</span>.role = <span className="code-string">"{personalInfo.title}"</span></p>
                <p><span className="code-indent2" /><span className="code-self">self</span>.location = <span className="code-string">"{personalInfo.location}"</span></p>
                <p><span className="code-indent2" /><span className="code-self">self</span>.education = <span className="code-string">"MS CS @ TU Dresden"</span></p>
                <p>&nbsp;</p>
                <p><span className="code-indent" /><span className="code-keyword">def</span> <span className="code-func">get_skills</span>(<span className="code-self">self</span>):</p>
                <p><span className="code-indent2" /><span className="code-keyword">return</span> [<span className="code-string">"Python"</span>, <span className="code-string">"FastAPI"</span>, <span className="code-string">"TensorFlow"</span>, <span className="code-string">"AWS"</span>]</p>
                <p>&nbsp;</p>
                <p><span className="code-indent" /><span className="code-keyword">def</span> <span className="code-func">get_passion</span>(<span className="code-self">self</span>):</p>
                <p><span className="code-indent2" /><span className="code-keyword">return</span> <span className="code-string">"Building AI-powered solutions"</span></p>
              </div>

              <div className="about-bio-block">
                <span className="bio-decorator">{'"""'}</span>
                <ul className="about-bio">
                  <li>
                    Pursuing <span className="bio-highlight">MS Computer Science</span> at TU Dresden,
                    focused on <span className="bio-highlight">AI & Machine Learning</span>.
                  </li>
                  <li>
                    Built production systems with <span className="bio-highlight">Python</span>, <span className="bio-highlight">FastAPI</span>,{' '}
                    <span className="bio-highlight">TensorFlow</span>, <span className="bio-highlight">AWS</span> &{' '}
                    <span className="bio-highlight">Azure</span> — serving 500+ users.
                  </li>
                  <li>
                    Shipping software that makes a <span className="bio-highlight">measurable difference</span>.
                  </li>
                </ul>
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