import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks';
import { FiMail, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error('Send failed:', data.error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
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
                  disabled={status === 'sending'}
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
                  disabled={status === 'sending'}
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
                  disabled={status === 'sending'}
                />
              </div>
              <button
                type="submit"
                className={`btn form-btn ${status === 'sent' ? 'btn-success' : status === 'error' ? 'btn-error' : 'btn-primary'}`}
                disabled={status === 'sending' || status === 'sent'}
              >
                {status === 'idle' && <><FiSend /> Send Message</>}
                {status === 'sending' && <><span className="spinner"></span> Sending...</>}
                {status === 'sent' && <><FiCheck /> Message Sent!</>}
                {status === 'error' && <><FiAlertCircle /> Failed — Try Again</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
