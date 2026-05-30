import { useEffect, useRef } from 'react';

export default function CursorTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Skip on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    const sparks = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function onMove(e) {
      sparks.push({ x: e.clientX, y: e.clientY, r: 2.5, alpha: 0.45 });
      if (sparks.length > 22) sparks.shift();
    }
    window.addEventListener('mousemove', onMove);

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.alpha -= 0.022;
        s.r    *= 0.96;
        if (s.alpha <= 0) { sparks.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,255,200,${s.alpha})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 998, pointerEvents: 'none',
      }}
    />
  );
}
