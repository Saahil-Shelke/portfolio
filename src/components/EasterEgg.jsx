import { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../data/portfolioData';
import './EasterEgg.css';

export default function EasterEgg() {
  const [lines, setLines] = useState([
    { type: 'system', text: '# Try typing a command. Type "help" to get started.' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newLines = [...lines, { type: 'cmd', text: `>>> ${input}` }];

    if (cmd === 'clear') {
      setLines([{ type: 'system', text: '# Terminal cleared. Type "help" to get started.' }]);
    } else {
      const response = terminalCommands[cmd] || `NameError: name '${input}' is not defined`;
      newLines.push({ type: response.startsWith('NameError') ? 'error' : 'output', text: response });
      setLines(newLines);
    }

    setInput('');
  };

  return (
    <div className="easter-egg">
      <button className="egg-toggle" onClick={() => { setIsOpen(!isOpen); setTimeout(() => inputRef.current?.focus(), 100); }}>
        <span className="egg-icon">{'>>>'}</span>
        <span>{isOpen ? 'Close Terminal' : 'Open Terminal'}</span>
      </button>

      <div className={`egg-terminal ${isOpen ? 'open' : ''}`}>
        <div className="terminal-window">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">python3 — interactive</span>
          </div>
          <div className="egg-body" ref={scrollRef} onClick={() => inputRef.current?.focus()}>
            {lines.map((line, i) => (
              <p key={i} className={`egg-line egg-${line.type}`}>
                {line.text}
              </p>
            ))}
            <form onSubmit={handleSubmit} className="egg-input-row">
              <span className="egg-prompt">{'>>>'}</span>
              <input
                ref={inputRef}
                type="text"
                className="egg-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                spellCheck={false}
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
