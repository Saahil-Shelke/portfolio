import { useTypingEffect } from '../hooks';
import { personalInfo } from '../data/portfolioData';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  const line1 = useTypingEffect('>>> from sahil import Developer', 55, 500);
  const line2 = useTypingEffect('>>> dev = Developer("Sahil Shelke")', 45, 3000);
  const line3 = useTypingEffect('>>> dev.passion', 50, 5200);
  const line4 = useTypingEffect(`"${personalInfo.tagline}"`, 30, 6200);

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">python3 — sahil@portfolio</span>
          </div>
          <div className="terminal-body">
            <p className="terminal-line cmd">
              {line1.displayed}<span className={`cursor ${line1.done ? 'hidden' : ''}`}>█</span>
            </p>
            {line1.done && (
              <p className="terminal-line cmd">
                {line2.displayed}<span className={`cursor ${line2.done ? 'hidden' : ''}`}>█</span>
              </p>
            )}
            {line2.done && (
              <p className="terminal-line cmd">
                {line3.displayed}<span className={`cursor ${line3.done ? 'hidden' : ''}`}>█</span>
              </p>
            )}
            {line3.done && (
              <p className="terminal-line output">
                {line4.displayed}<span className={`cursor ${!line4.done ? '' : 'blink'}`}>█</span>
              </p>
            )}
          </div>
        </div>

        <div className={`hero-info ${line4.done ? 'visible' : ''}`}>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <p className="hero-role">{personalInfo.title}</p>
          <p className="hero-subtitle">
            MS Computer Science @ <span className="highlight">TU Dresden</span>
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <FiMail /> Get in Touch
            </a>
            <a href="#projects" className="btn btn-ghost">
              <FiArrowDown /> View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
