import { personalInfo } from '../data/portfolioData';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-brand">
            <span className="footer-prompt">{'>>>'}</span> sahil.py
          </span>
          <p className="footer-copy">
            {'©'} {new Date().getFullYear()} {personalInfo.name}
          </p>
        </div>
        <div className="footer-socials">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={18} />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
