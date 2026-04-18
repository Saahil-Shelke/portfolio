import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailto, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="section" id="contact">
      <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
        <div className="section-header">
          <span className="section-label">{'// get in touch'}</span>
          <h2 className="section-title">Contact Me</h2>
          <div className="section-divider"></div>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-text">
              Have an interesting project or opportunity? Let's connect and build something great together.
            </p>
            <div className="contact-details">
              <a href={`mailto:${personalInfo.email}`} className="contact-item">
                <FiMail size={18} /> {personalInfo.email}
              </a>
              <span className="contact-item">
                <FiMapPin size={18} /> {personalInfo.location}
              </span>
            </div>
          </div>
          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="form-title">new_message.js</span>
            </div>
            <div className="form-body">
              <div className="form-group">
                <label className="form-label">
                  <span className="code-keyword">const</span> name =</label>
                <input type="text" className="form-input" placeholder='"Your Name"'
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className="form-group">
                <label className="form-label">
                  <span className="code-keyword">const</span> email =</label>
                <input type="email" className="form-input" placeholder='"your@email.com"'
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div className="form-group">
                <label className="form-label">
                  <span className="code-keyword">const</span> message =</label>
                <textarea className="form-input form-textarea" placeholder='"Your message..."' rows={4}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={sent}>
                {sent ? '✓ Message Sent!' : <><FiSend /> send(message)</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
