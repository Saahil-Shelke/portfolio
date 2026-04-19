import { useState, useRef, useEffect, useCallback } from 'react';
import { personalInfo, terminalCommands } from '../data/portfolioData';
import './Hero.css';

const BOOT_LINES = [
  { text: '', delay: 200 },
  { text: `Welcome to Ubuntu 24.04.2 LTS (GNU/Linux 6.8.0-generic x86_64)`, delay: 80, cls: 'boot-welcome' },
  { text: '', delay: 100 },
  { text: ' * Documentation:  https://github.com/saahil-shelke', delay: 60 },
  { text: ' * Portfolio:      https://sahil-shelke.vercel.app', delay: 60 },
  { text: '', delay: 100 },
  { text: '  System information as of ' + new Date().toUTCString(), delay: 40, cls: 'boot-dim' },
  { text: '', delay: 80 },
  { text: `  Name:        ${personalInfo.name}`, delay: 50 },
  { text: `  Role:        ${personalInfo.title}`, delay: 50 },
  { text: `  Location:    ${personalInfo.location}`, delay: 50 },
  { text: `  Education:   MS Computer Science @ TU Dresden`, delay: 50 },
  { text: '', delay: 80 },
  { text: `  Experience:  2+ years    Projects: 6+    Publications: 1 (IEEE)`, delay: 40, cls: 'boot-stats' },
  { text: '', delay: 100 },
  { text: `  Stack: Python · FastAPI · TensorFlow · AWS · PostgreSQL · Docker`, delay: 40, cls: 'boot-accent' },
  { text: '', delay: 150 },
  { text: `Last login: ${new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })} from portfolio.dev`, delay: 40, cls: 'boot-dim' },
];

const NAV_COMMANDS = {
  about: 'about',
  experience: 'experience',
  projects: 'projects',
  skills: 'skills',
  education: 'education',
  achievements: 'publications',
  publications: 'publications',
  contact: 'contact',
};

const EXTENDED_COMMANDS = {
  ...terminalCommands,
  ls: 'about/  experience/  projects/  skills/  education/  achievements/  contact/',
  pwd: '/home/sahil/portfolio',
  whoami: `${personalInfo.name} — ${personalInfo.title} | ${personalInfo.location}`,
  neofetch: `
       .-/+oossssoo+/-.          sahil@portfolio
    \`:+ssssssssssssssssss+:\`     ─────────────────
  -+ssssssssssssssssssyyssss+-   OS:      Ubuntu 24.04.2 LTS
.osssssssssssssssssssdMMMNyssso.  Host:    ${personalInfo.location}
+ssssssssssssssssssdMMMNhssssss+ Kernel:  Python 3.12 / FastAPI
/ssssssshNMMMyhhyyyyhmNMMMNhssss/ Shell:   /bin/sahil
+sssssssdMMMNhssssssssdMMMdssss+ Theme:   Terminal Dark [GTK3]
/sssssssshNMMMyhhhhyyhmNMMMNhsss/ DE:      React + Vite
+sssssssssdMMMNhssssssshdMMMdss+ Terminal:portfolio-v1.0
/sssssssssshmNMMMNhhhyysshNMMMNo  CPU:     Brain @ max-caffeine
.ossssssssssshmNMMMNhsssssssso.  Memory:  2+ yrs / unlimited
  -+sssssssssssssssssssssss+-    Uptime:  Since Oct 2020
    \`:+ssssssssssssssssss+:\`
       .-/+oossssoo+/-.`,
  date: new Date().toString(),
  cat: 'Usage: cat <section> — Try: cat about',
  echo: 'Hello, World!',
  man: 'RTFM — or just type "help" 😎',
  history: '1. npm init\n2. git commit -m "built portfolio"\n3. vercel deploy --prod\n4. sudo hire-sahil',
  exit: 'Nice try. You can\'t escape this portfolio 😎',
  'exit()': 'Nice try. You can\'t escape this portfolio 😎',
  'import this': 'Beautiful is better than ugly.\nExplicit is better than implicit.\nSimple is better than complex.\nFlat is better than nested.\nNow go hire Sahil.',
};

export default function Hero() {
  const [bootLines, setBootLines] = useState([]);
  const [bootDone, setBootDone] = useState(false);
  const [termLines, setTermLines] = useState([]);
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  // Boot sequence
  useEffect(() => {
    let i = 0;
    let totalDelay = 300;
    const timers = [];

    BOOT_LINES.forEach((line) => {
      const timer = setTimeout(() => {
        setBootLines((prev) => [...prev, line]);
        i++;
        if (i >= BOOT_LINES.length) {
          setTimeout(() => {
            setBootDone(true);
            setTimeout(() => inputRef.current?.focus(), 100);
          }, 400);
        }
      }, totalDelay);
      timers.push(timer);
      totalDelay += line.delay;
    });

    return () => timers.forEach(clearTimeout);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [bootLines, termLines, bootDone]);

  const handleCommand = useCallback((cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const lower = trimmed.toLowerCase();
    const newLines = [...termLines, { type: 'cmd', text: `sahil@portfolio:~$ ${trimmed}` }];

    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    // Clear
    if (lower === 'clear') {
      setTermLines([]);
      return;
    }

    // Navigation commands
    if (NAV_COMMANDS[lower]) {
      const section = NAV_COMMANDS[lower];
      newLines.push({ type: 'output', text: `→ Navigating to ${lower}...` });
      setTermLines(newLines);
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
      return;
    }

    // cat <section>
    if (lower.startsWith('cat ')) {
      const section = lower.replace('cat ', '').trim();
      if (NAV_COMMANDS[section]) {
        newLines.push({ type: 'output', text: `→ Opening ${section}...` });
        setTermLines(newLines);
        setTimeout(() => {
          document.getElementById(NAV_COMMANDS[section])?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
        return;
      }
    }

    // cd <section>
    if (lower.startsWith('cd ')) {
      const section = lower.replace('cd ', '').replace('/', '').trim();
      if (NAV_COMMANDS[section]) {
        newLines.push({ type: 'output', text: `→ Navigating to ${section}...` });
        setTermLines(newLines);
        setTimeout(() => {
          document.getElementById(NAV_COMMANDS[section])?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
        return;
      }
    }

    // Known commands
    if (EXTENDED_COMMANDS[lower]) {
      const response = EXTENDED_COMMANDS[lower];
      if (response === '__CLEAR__') {
        setTermLines([]);
        return;
      }
      newLines.push({ type: lower === 'neofetch' ? 'neofetch' : 'output', text: response });
      setTermLines(newLines);
      return;
    }

    // Unknown command
    newLines.push({ type: 'error', text: `bash: ${trimmed}: command not found — type "help" for options` });
    setTermLines(newLines);
  }, [termLines]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const newIdx = historyIdx < cmdHistory.length - 1 ? historyIdx + 1 : historyIdx;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const newIdx = historyIdx - 1;
        setHistoryIdx(newIdx);
        setInput(cmdHistory[cmdHistory.length - 1 - newIdx]);
      } else {
        setHistoryIdx(-1);
        setInput('');
      }
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="terminal-window hero-terminal">
          <div className="terminal-header">
            <span className="terminal-dot red"></span>
            <span className="terminal-dot yellow"></span>
            <span className="terminal-dot green"></span>
            <span className="terminal-title">sahil@portfolio: ~</span>
          </div>
          <div
            className="terminal-body hero-term-body"
            ref={scrollRef}
            onClick={() => inputRef.current?.focus()}
          >
            {/* Boot sequence */}
            {bootLines.map((line, i) => (
              <p key={`b-${i}`} className={`term-line ${line.cls || ''}`}>
                {line.text || '\u00A0'}
              </p>
            ))}

            {/* Interactive terminal */}
            {bootDone && (
              <>
                {termLines.map((line, i) => (
                  <p key={`t-${i}`} className={`term-line term-${line.type}`}>
                    {line.text}
                  </p>
                ))}
                <form onSubmit={handleSubmit} className="term-input-row">
                  <span className="term-prompt">sahil@portfolio:~$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    className="term-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    spellCheck={false}
                    autoComplete="off"
                    autoCapitalize="off"
                  />
                </form>
              </>
            )}
          </div>
        </div>

        {bootDone && (
          <div className="hero-hint">
            <span>Type <code>help</code> for commands or <code>about</code> to navigate</span>
          </div>
        )}
      </div>
    </section>
  );
}
