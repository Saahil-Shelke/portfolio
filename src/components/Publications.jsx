import { publications, awards, volunteering } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import { FiFileText, FiAward, FiUsers, FiExternalLink } from 'react-icons/fi';
import './Publications.css';

export default function Publications() {
  const { ref, visible } = useScrollReveal();

  return (
    <section className="section" id="publications">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label"># achievements</span>
          <h2 className="section-title">Publications & Awards</h2>
          <div className="section-divider"></div>
        </div>

        <div className="achievements-layout">
          {/* Publications */}
          <div className="achievement-group">
            <h3 className="achievement-group-title">
              <FiFileText size={16} /> Publications
            </h3>
            {publications.map((pub, i) => (
              <div key={i} className="achievement-card glass-card">
                <h4 className="achievement-title">{pub.title}</h4>
                <span className="achievement-venue">{pub.conference}</span>
                <p className="achievement-desc">{pub.description}</p>
                {pub.link && (
                  <a href={pub.link} target="_blank" rel="noopener noreferrer" className="achievement-link">
                    <FiExternalLink size={12} /> View on IEEE Xplore
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Awards */}
          <div className="achievement-group">
            <h3 className="achievement-group-title">
              <FiAward size={16} /> Awards
            </h3>
            {awards.map((award, i) => (
              <div key={i} className="achievement-card glass-card">
                <h4 className="achievement-title">{award.title}</h4>
                <p className="achievement-desc">{award.description}</p>
              </div>
            ))}
          </div>

          {/* Volunteering */}
          <div className="achievement-group">
            <h3 className="achievement-group-title">
              <FiUsers size={16} /> Volunteering
            </h3>
            {volunteering.map((vol, i) => (
              <div key={i} className="achievement-card glass-card">
                <h4 className="achievement-title">{vol.title}</h4>
                <span className="achievement-period">{vol.period}</span>
                <p className="achievement-desc">{vol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
