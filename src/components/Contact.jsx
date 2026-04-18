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
          <span className="section-label"># contact</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-text">
              Have an interesting project or opportunity? I'd love to hear from you.
            </p>
            <div className="contact-links">
              <a href={`mailto:${personalInfo.email}`} className="contact-link">
                <FiMail size={16} />
                <span>{personalInfo.email}</span>
              </a>
              <span className="contact-link">
                <FiMapPin size={16} />
                <span>{personalInfo.location}</span>
              </span>
            </div>
          </div>

          <div className="terminal-window contact-form-wrap">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">send_message.py</span>
            </div>
            <form className="terminal-body contact-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label className="form-label">name</label>
                <input
                  type="text" className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label">email</label>
                <input
                  type="email" className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="form-field">
                <label className="form-label">message</label>
                <textarea
                  className="form-input form-textarea"
                  placeholder="Your message..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary form-btn" disabled={sent}>
                {sent ? '✓ Sent!' : <><FiSend /> Send Message</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
