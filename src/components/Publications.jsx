import { publications, awards } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import { FiFileText, FiAward } from 'react-icons/fi';
import './Publications.css';

export default function Publications() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="publications">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'// publications & awards'}</span>
          <h2 className="section-title">Recognition</h2>
          <div className="section-divider"></div>
        </div>
        <div className="pub-grid">
          <div className="pub-section">
            <h3 className="pub-section-title"><FiFileText /> Publications</h3>
            {publications.map((pub, i) => (
              <div key={i} className="pub-card glass-card">
                <h4 className="pub-title">{pub.title}</h4>
                <span className="pub-conference">{pub.conference}</span>
                <p className="pub-desc">{pub.description}</p>
              </div>
            ))}
          </div>
          <div className="pub-section">
            <h3 className="pub-section-title"><FiAward /> Awards</h3>
            {awards.map((award, i) => (
              <div key={i} className="pub-card glass-card">
                <h4 className="pub-title">{award.title}</h4>
                <p className="pub-desc">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
