import { personalInfo } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-socials">
          <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
        </div>
        <p className="footer-text">
          <span className="footer-code">{'<'}</span>
          Built with <FiHeart size={14} className="footer-heart" /> & React
          <span className="footer-code">{' />'}</span>
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} {personalInfo.name}</p>
      </div>
    </footer>
  );
}
