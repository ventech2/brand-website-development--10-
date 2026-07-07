import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [onLink, setOnLink] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const sx = useSpring(mx, { stiffness: 500, damping: 40 });
  const sy = useSpring(my, { stiffness: 500, damping: 40 });
  // Trailing dot — slower spring
  const tx = useSpring(mx, { stiffness: 120, damping: 22 });
  const ty = useSpring(my, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => { mx.set(e.clientX); my.set(e.clientY); setVisible(true); };
    const down = () => setClicking(true);
    const up   = () => setClicking(false);
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setOnLink(!!(el.closest('a') || el.closest('button')));
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('mouseover', over);
    };
  }, [mx, my]);

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Main ring cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: clicking ? 0.7 : onLink ? 1.8 : 1, opacity: visible ? 1 : 0 }}
        transition={{ scale: { duration: 0.15 }, opacity: { duration: 0.3 } }}
      >
        <div style={{ width: onLink ? 48 : 32, height: onLink ? 48 : 32, borderRadius: '50%', border: '2px solid #f0d080', transition: 'width 0.25s, height 0.25s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {onLink && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#f0d080' }} />}
        </div>
      </motion.div>
      {/* Trailing dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: tx, y: ty, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: visible ? 0.6 : 0 }}
      >
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#c9a84c,#f0d080)', boxShadow: '0 0 12px rgba(240,208,128,0.8)' }} />
      </motion.div>
    </>
  );
}
