import { useState, useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks';
import profileImg from '../assets/profile.svg';
import './About.css';

const STATS = [
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 6, suffix: '+', label: 'Projects Shipped' },
  { value: 15, suffix: '+', label: 'Technologies' },
  { value: 1,  suffix: '',  label: 'IEEE Publication' },
];

function StatCard({ value, suffix, label, animate }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!animate || started.current) return;
    started.current = true;
    if (value === 0) return;
    let current = 0;
    const steps = 50;
    const increment = value / steps;
    const delay = 900 / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, delay);
    return () => clearInterval(timer);
  }, [animate, value]);

  return (
    <div className="stat-card">
      <span className="stat-number">{animate ? count : 0}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

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

        <div className="about-grid">
          <div className="about-img-col">
            <div className="profile-frame">
              <img src={profileImg} alt="Sahil Shelke" className="profile-img" />
            </div>
          </div>

          <div className="about-text-col">
            <p className="about-para">
              Pursuing <span className="bio-highlight">MS Computer Science</span> at TU Dresden,
              focused on <span className="bio-highlight">AI & Machine Learning</span>.
            </p>
            <p className="about-para">
              Built production systems with <span className="bio-highlight">Python</span>,{' '}
              <span className="bio-highlight">FastAPI</span>,{' '}
              <span className="bio-highlight">TensorFlow</span>,{' '}
              <span className="bio-highlight">AWS</span> &{' '}
              <span className="bio-highlight">Azure</span> — serving 500+ users.
            </p>
            <p className="about-para">
              I care about shipping software that makes a{' '}
              <span className="bio-highlight">measurable difference</span>.
            </p>

            <div className="about-stats">
              {STATS.map((s) => (
                <StatCard key={s.label} {...s} animate={visible} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
