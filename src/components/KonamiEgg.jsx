import { useState, useEffect, useRef } from 'react';
import './KonamiEgg.css';

const KONAMI = [
  'arrowup','arrowup','arrowdown','arrowdown',
  'arrowleft','arrowright','arrowleft','arrowright',
  'b','a',
];

export default function KonamiEgg() {
  const [show, setShow] = useState(false);
  const seq = useRef([]);

  useEffect(() => {
    function onKey(e) {
      seq.current.push(e.key.toLowerCase());
      if (seq.current.length > KONAMI.length) seq.current.shift();
      if (seq.current.join(',') === KONAMI.join(',')) {
        setShow(true);
        seq.current = [];
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!show) return;
    function onEsc(e) { if (e.key === 'Escape') setShow(false); }
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, [show]);

  if (!show) return null;

  return (
    <div className="konami-overlay" onClick={() => setShow(false)}>
      <div className="konami-card" onClick={(e) => e.stopPropagation()}>
        <div className="konami-badge">🎮 SECRET UNLOCKED</div>

        <h2 className="konami-title">Achievement Unlocked</h2>
        <p className="konami-sequence">↑ ↑ ↓ ↓ ← → ← → B A</p>

        <div className="konami-sep" />

        <p className="konami-message">
          You pay attention to things others miss.<br />
          That's exactly how I approach every system I ship.
        </p>

        <div className="konami-facts">
          <div className="konami-fact">
            <span className="fact-dot" />
            RAG chatbot · 500+ farmers · 92% crop disease accuracy
          </div>
          <div className="konami-fact">
            <span className="fact-dot" />
            Wheat yield prediction · 89% accuracy · 15 districts
          </div>
          <div className="konami-fact">
            <span className="fact-dot" />
            IEEE published · Smart BAT at ICACTA 2023
          </div>
          <div className="konami-fact">
            <span className="fact-dot" />
            MS Computer Science · TU Dresden · April 2026
          </div>
        </div>

        <div className="konami-footer">
          <a
            href="mailto:saahil.shelke@gmail.com"
            className="konami-email"
            onClick={() => setShow(false)}
          >
            saahil.shelke@gmail.com
          </a>
          <button className="konami-close" onClick={() => setShow(false)}>
            Close <span className="konami-esc">ESC</span>
          </button>
        </div>
      </div>
    </div>
  );
}
