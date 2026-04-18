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
          <span className="section-label">{'# contact.py'}</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider"></div>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <div className="terminal-window contact-info-terminal">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">contact_info.py</span>
              </div>
              <div className="terminal-body">
                <p className="contact-code">
                  <span className="code-keyword">class</span>{' '}
                  <span className="code-class">ContactInfo</span>:
                </p>
                <p className="contact-code">
                  {'    '}
                  <span className="code-string-triple">"""</span>
                  <span className="code-string">Have an interesting project?</span>
                </p>
                <p className="contact-code">
                  {'    '}
                  <span className="code-string">Let's connect and build</span>
                </p>
                <p className="contact-code">
                  {'    '}
                  <span className="code-string">something great together.</span>
                  <span className="code-string-triple">"""</span>
                </p>
                <p className="contact-code contact-code-gap"></p>
                <a href={`mailto:${personalInfo.email}`} className="contact-item">
                  <FiMail size={16} />
                  <span className="contact-attr">email</span> ={' '}
                  <span className="code-string">"{personalInfo.email}"</span>
                </a>
                <span className="contact-item">
                  <FiMapPin size={16} />
                  <span className="contact-attr">location</span> ={' '}
                  <span className="code-string">"{personalInfo.location}"</span>
                </span>
              </div>
            </div>
          </div>

          <div className="terminal-window contact-form-terminal">
            <div className="terminal-header">
              <span className="terminal-dot red"></span>
              <span className="terminal-dot yellow"></span>
              <span className="terminal-dot green"></span>
              <span className="terminal-title">send_message.py</span>
            </div>
            <form className="terminal-body contact-form-body" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  <span className="code-keyword">name</span>{' '}
                  <span className="code-eq">=</span>{' '}
                  <span className="code-func">input</span>
                  <span className="code-paren">(</span>
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder='"Your Name"'
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <span className="form-paren-close">)</span>
              </div>
              <div className="form-group">
                <label className="form-label">
                  <span className="code-keyword">email</span>{' '}
                  <span className="code-eq">=</span>{' '}
                  <span className="code-func">input</span>
                  <span className="code-paren">(</span>
                </label>
                <input
                  type="email"
                  className="form-input"
                  placeholder='"your@email.com"'
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <span className="form-paren-close">)</span>
              </div>
              <div className="form-group">
                <label className="form-label">
                  <span className="code-keyword">message</span>{' '}
                  <span className="code-eq">=</span>{' '}
                  <span className="code-func">input</span>
                  <span className="code-paren">(</span>
                </label>
                <textarea
                  className="form-input form-textarea"
                  placeholder='"Your message..."'
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
                <span className="form-paren-close">)</span>
              </div>
              <button type="submit" className="btn btn-primary form-submit" disabled={sent}>
                {sent ? '✓ Message Sent!' : <><FiSend /> send(message)</>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
