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

  help: `Commands:

  Navigation   about · experience · projects · skills · education · contact
  Profile      sudo hire-sahil · pip install sahil · cat resume.txt
               git log --oneline · docker run sahil · curl sahil.dev/hire
  System       ls · ls -la · htop · uname -a · nvidia-smi · python3
               ssh sahil@tu-dresden.de · ps aux · top
  Fun          neofetch · import this · history · vim sahil.md · make
  Other        clear · pwd · whoami · date · echo`,

  ls: 'about/  experience/  projects/  skills/  education/  achievements/  contact/',

  'ls -la': `total 6 projects
drwxr-xr-x  sahil  farm-precise-chatbot    ← RAG · FastAPI · AWS
drwxr-xr-x  sahil  water-governance        ← IoT · PostgreSQL · Azure
drwxr-xr-x  sahil  fpc-tracking-platform   ← MongoDB · AWS Lambda
drwxr-xr-x  sahil  yield-prediction        ← TensorFlow · GEE · QGIS
drwxr-xr-x  sahil  employee-tracker        ← Flutter · Firebase
drwxr-xr-x  sahil  smart-bat-ieee          ← OCR · IEEE Published ★`,

  pwd: '/home/sahil/portfolio',

  whoami: `${personalInfo.name}
  Role     : ML Engineer & Backend Developer
  Location : ${personalInfo.location}
  Status   : Open to Opportunities
  Email    : saahil.shelke@gmail.com`,

  'sudo hire-sahil': `[sudo] password for recruiter: ••••••••
Resolving dependencies...

  Installing sahil-shelke@2.0.0  ━━━━━━━━━━━━━━━━━━━━  100%

  ✓  Python · FastAPI       ████████████  done
  ✓  TensorFlow · PyTorch   ████████████  done
  ✓  AWS · Azure · Docker   ████████████  done
  ✓  PostgreSQL · MongoDB   ████████████  done
  ✓  RAG · GenAI · YOLOv5   ████████████  done

  sahil-shelke@2.0.0 successfully installed.
  Experience: 2+ years  ·  Projects: 6+  ·  IEEE: 1

  → Next: send-offer-letter --to saahil.shelke@gmail.com`,

  'pip install sahil': `Collecting sahil-shelke==2.0.0
  Downloading sahil_shelke-2.0.0.tar.gz (2+ yrs experience)
Collecting fastapi>=0.100, tensorflow>=2.13, pytorch
Collecting aws-skills, azure, docker, rag, gen-ai, yolov5 ...
Building wheel for sahil-shelke ... done

Successfully installed sahil-shelke-2.0.0

  Name    : Sahil Shelke
  Role    : ML Engineer & Backend Developer
  Location: Dresden, Germany
  License : Open to Opportunities

⚠  Note: Side effects include significant productivity gains.
   Recommended pairing: competitive-salary`,

  'pip3 install sahil': `Collecting sahil-shelke==2.0.0 ... done
Successfully installed sahil-shelke-2.0.0`,

  'pip install sahil-shelke': `Collecting sahil-shelke==2.0.0 ... done
Successfully installed sahil-shelke-2.0.0`,

  neofetch: `
       .-/+oossssoo+/-.          sahil@portfolio
    \`:+ssssssssssssssssss+:\`     ─────────────────
  -+ssssssssssssssssssyyssss+-   OS:      Ubuntu 24.04.2 LTS
.osssssssssssssssssssdMMMNyssso.  Host:    ${personalInfo.location}
+ssssssssssssssssssdMMMNhssssss+ Kernel:  Python 3.12 / FastAPI
/ssssssshNMMMyhhyyyyhmNMMMNhssss/ Shell:   /bin/sahil
+sssssssdMMMNhssssssssdMMMdssss+ Theme:   Terminal Dark [GTK3]
/sssssssshNMMMyhhhhyyhmNMMMNhsss/ DE:      React + Vite
+sssssssssdMMMNhssssssshdMMMdss+ Terminal:portfolio-v2.0
/sssssssssshmNMMMNhhhyysshNMMMNo  CPU:     Brain @ max-caffeine
.ossssssssssshmNMMMNhsssssssso.  Memory:  2+ yrs / unlimited
  -+sssssssssssssssssssss+-    Uptime:  Since Oct 2020
    \`:+ssssssssssssssssss+:\`
       .-/+oossssoo+/-.`,

  'git log --oneline': `a8f3c2d (HEAD → career) ship: MS CS @ TU Dresden — Apr 2026
9e1b7f5 feat: RAG chatbot, 500+ farmers, 92% crop accuracy
3d4a8e1 feat: wheat yield prediction, 89% acc, 15 districts
7f2c1b9 feat: watt-meter CV detection, 94% mAP with YOLOv5
2c4e9a1 build: Python · FastAPI · TF · AWS · Docker · RAG
f1a3c8d ship: Smart BAT published at IEEE ICACTA 2023
0d2b5e7 init: B.Tech Computer Engineering, Mumbai 2024`,

  'git log': `→ Tip: try git log --oneline`,

  'git status': `On branch career
Your branch is ahead of 'origin/job-hunt' by 2+ years of experience.

Changes ready to commit:
  new file:   MS_CS_TU_Dresden.md
  modified:   skills.py   (added RAG, GenAI, YOLOv5)
  modified:   experience/ (500+ farmers impacted)

Untracked files:
  offer-letter.txt  ← waiting for you to create this`,

  'docker run sahil': `Unable to find image 'sahil:latest' locally
Pulling from saahil-shelke/portfolio
  python:3.12-slim .......... Pull complete
  fastapi+uvicorn ........... Pull complete
  tensorflow-gpu ............ Pull complete
  aws+azure+docker .......... Pull complete
  rag+genai+yolov5 .......... Pull complete
  postgresql+mongodb ........ Pull complete
Digest: sha256:2yrs-experience-6projects-1ieee-paper

Container started: sahil-ml-engineer-2026
  API  → localhost:8000  (FastAPI)
  App  → localhost:3000  (React + Vite)
  DB   → localhost:5432  (PostgreSQL)
Status: Running at max caffeine ☕`,

  'curl sahil.dev/hire': `HTTP/2 200 OK
content-type: application/json

{
  "name":              "Sahil Shelke",
  "status":            "open_to_opportunities",
  "role":              "ML Engineer & Backend Developer",
  "education":         "MS CS @ TU Dresden (Apr 2026)",
  "experience_years":  2,
  "ieee_publications": 1,
  "live_projects":     6,
  "response_time":     "< 24h",
  "email":             "saahil.shelke@gmail.com"
}`,

  'ssh sahil@tu-dresden.de': `Connecting to tu-dresden.de port 22...
Authenticating as sahil... ✓

Welcome to Technische Universität Dresden
  [MS Computer Science — April 2026]
  [Research: AI · Machine Learning · Software Development]

  sahil@tu-dresden:~ $ python3 thesis.py
  Loading dataset ........... done
  Training model ........... Epoch 50/50
  Evaluating ............... Accuracy: 97.3%`,

  'cat resume.txt': `══════════════════════════════════════
  SAHIL SHELKE — ML Engineer & Backend Dev
══════════════════════════════════════
  📍 Dresden, Germany  ·  saahil.shelke@gmail.com
  🎓 MS CS @ TU Dresden (April 2026)
  💼 2+ years  ·  6+ projects  ·  1 IEEE publication

  EXPERIENCE
  ▸ Software Developer @ WOTR (2025—2026)
    RAG chatbot · 500+ farmers · 92% accuracy
    IoT: 30+ sensors · LoRa · 35% irrigation savings
  ▸ Intern @ WOTR (2024—2025)
    Wheat yield prediction · 89% acc · 15 districts
  ▸ Intern @ Sequelstring (2023)
    YOLOv5 fault detection · 94% mAP

  STACK
  Python · FastAPI · TensorFlow · PyTorch
  AWS · Azure · Docker · PostgreSQL · RAG · GenAI

══════════════════════════════════════
  → Full details: scroll down ↓`,

  htop: `  PID   USER    CPU%  MEM%  Command
  2024  sahil   42.1   8.3  python3 train_rag_model.py
  8001  sahil   18.7   4.1  uvicorn fastapi_app:app --reload
  5432  sahil   12.4   6.9  postgres -D farm_database
  9000  sahil    9.2   3.5  vite --host 0.0.0.0
   420  sahil    4.3   1.2  docker-compose up --build
     1  sahil    0.1   0.3  /bin/sahil --status=open-to-work

  Load: 0.92 0.88 0.95  Uptime: 2+ years  Tasks: 6 · ∞ ideas`,

  top: `→ Try htop for better visuals`,

  'ps aux': `USER   PID   %CPU  %MEM  COMMAND
sahil  2024  42.1   8.3  python3 train_rag_model.py
sahil  8001  18.7   4.1  uvicorn app:app --reload
sahil   001   0.1   0.3  /bin/sahil --open-to-work`,

  'nvidia-smi': `┌────────────────────────────────────────────────────┐
│ NVIDIA-SMI  sahil@max-caffeine  Driver: Curiosity  │
├────────────────────────────────────────────────────┤
│ GPU 0  Sahil Neural Net  Temp: 98.6°F  Util: 99%  │
│ GPU 1  TU-Dresden-A100   Mem:  80 GB   Training ✓  │
└────────────────────────────────────────────────────┘`,

  'uname -a': `Ubuntu 24.04.2 LTS sahil-portfolio #1 SMP
Python-3.12 FastAPI TensorFlow RAG GenAI x86_64 GNU/Linux
Built-by: saahil.shelke@gmail.com
Kernel  : curiosity + 2-yrs-experience + caffeine`,

  python3: `Python 3.12.0 (sahil-portfolio, ${new Date().getFullYear()})
>>> import sahil
>>> sahil.status
'open_to_opportunities'
>>> sahil.stack
['Python', 'FastAPI', 'TensorFlow', 'AWS', 'RAG', 'GenAI', ...]
>>> sahil.hire()
'✓ Redirecting to saahil.shelke@gmail.com...'
>>> `,

  'vim sahil.md': `-- INSERT MODE --
# Sahil Shelke
ML Engineer  ·  Dresden, Germany

Tip: :wq to save  ·  :q! to quit without hiring`,

  make: `make: *** No rule to make target 'this-work'.
Did you mean: sudo hire-sahil?`,

  date: new Date().toString(),

  cat: 'Usage: cat <section> — Try: cat about · cat resume.txt',

  echo: `Hello, World! — Try: echo hire-sahil`,

  'echo hire-sahil': '✓ Hiring sahil... → saahil.shelke@gmail.com',

  man: 'man: no entry for "not-hiring-sahil" — try: sudo hire-sahil',

  history: `  1  git clone https://github.com/saahil-shelke
  2  pip install sahil-shelke
  3  docker run --rm -it sahil/portfolio
  4  curl sahil.dev/hire
  5  sudo hire-sahil`,

  exit: "Nice try. You can't escape this portfolio 😎",
  'exit()': "Nice try. You can't escape this portfolio 😎",

  'import this': `Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Flat is better than nested.
Now go hire Sahil.`,
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
      setBootLines([]);
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
