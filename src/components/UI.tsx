import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { WhatsAppIcon } from './Icons';
import { WHATSAPP } from '../constants';

/* ── Fade-in wrapper ── */
export const FadeIn = ({
  children, delay = 0, className, direction = 'up', style,
}: {
  children: React.ReactNode; delay?: number; className?: string; direction?: 'up' | 'left' | 'right' | 'none'; style?: React.CSSProperties;
}) => {
  const initial =
    direction === 'up'    ? { opacity: 0, y: 50 }  :
    direction === 'left'  ? { opacity: 0, x: -50 } :
    direction === 'right' ? { opacity: 0, x: 50 }  :
    { opacity: 0 };
  return (
    <motion.div initial={initial} whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={style}>
      {children}
    </motion.div>
  );
};

/* ── 3D Tilt Card ── */
export const TiltCard = ({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  return (
    <motion.div ref={ref} onMouseMove={handleMouse} onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000, ...style }}
      className={className}>
      {children}
    </motion.div>
  );
};

/* ── Magnetic Button ── */
export const MagneticButton = ({ children, className, href, onClick, target, style }: {
  children: React.ReactNode; className?: string; href?: string; onClick?: () => void; target?: string; style?: React.CSSProperties;
}) => {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const Tag = href ? motion.a : motion.button;
  return (
    <Tag ref={ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>}
      href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: sx, y: sy, ...style }}
      whileTap={{ scale: 0.96 }}
      className={className}>
      {children}
    </Tag>
  );
};

/* ── Gold divider ── */
export const GoldDivider = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-3 my-6 ${className ?? ''}`}>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,transparent,#c9a84c)' }} />
    <span style={{ color: '#c9a84c', fontSize: '0.65rem' }}>✦</span>
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg,#c9a84c,transparent)' }} />
  </div>
);

/* ── Gold badge pill ── */
export const GoldBadge = ({ text }: { text: string }) => (
  <motion.span initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="inline-block px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold mb-5"
    style={{ background: 'linear-gradient(90deg,#c9a84c,#f0d080,#c9a84c)', color: '#1e0228', backgroundSize: '200% 100%' }}>
    {text}
  </motion.span>
);

/* ── Glowing text ── */
export const GlowText = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <span className={className} style={{ textShadow: '0 0 40px rgba(240,208,128,0.4), 0 0 80px rgba(201,168,76,0.2)' }}>
    {children}
  </span>
);

/* ── Cinematic page hero ── */
export const PageHero = ({ title, subtitle, tag, image }: { title: string; subtitle?: string; tag?: string; image?: string }) => (
  <section className="relative pt-48 pb-28 text-center overflow-hidden" style={{ minHeight: '55vh' }}>
    {image && (
      <div className="absolute inset-0">
        <img src={image} alt="page hero background" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom,#0d0013 0%,transparent 30%,transparent 70%,#0d0013 100%)' }} />
      </div>
    )}
    <div className="absolute inset-0" style={{ background: image ? undefined : 'linear-gradient(135deg,#0d0013 0%,#2a0040 50%,#0d0013 100%)' }} />
    <div className="absolute inset-0 opacity-[0.07]"
      style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,#c9a84c 1px,transparent 0)', backgroundSize: '32px 32px' }} />
    {/* Cinematic light sweep */}
    <motion.div className="absolute inset-0 pointer-events-none"
      initial={{ x: '-100%', opacity: 0.5 }} animate={{ x: '200%', opacity: 0 }}
      transition={{ duration: 2, delay: 0.3, ease: 'easeOut' }}
      style={{ background: 'linear-gradient(90deg,transparent,rgba(240,208,128,0.08),transparent)', width: '60%' }} />
    {/* Orbs */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[120px] opacity-20 pointer-events-none"
      style={{ background: 'radial-gradient(circle,#7b1fa2,transparent)' }} />
    <div className="relative z-10 container mx-auto px-6">
      {tag && <GoldBadge text={tag} />}
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-white leading-none mb-5" style={{ fontSize: 'clamp(3rem,8vw,6rem)', letterSpacing: '-0.02em' }}>
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </motion.p>
      )}
      <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-8 mx-auto h-px w-24" style={{ background: 'linear-gradient(90deg,transparent,#c9a84c,transparent)' }} />
    </div>
  </section>
);

/* ── Cinematic product card with 3D tilt ── */
export const ProductCard = ({
  src, label, name, sub, delay = 0, size = 'normal',
}: {
  src: string; label: string; name: string; sub: string; delay?: number; size?: 'normal' | 'tall';
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <FadeIn delay={delay}>
      <TiltCard>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          className="group block cursor-none">
          <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: size === 'tall' ? '2/3' : '3/4', boxShadow: hovered ? '0 40px 80px rgba(201,168,76,0.15), 0 0 0 1px rgba(201,168,76,0.3)' : '0 20px 40px rgba(0,0,0,0.4)', transition: 'box-shadow 0.5s ease' }}>
            <motion.img src={src} alt={name} className="w-full h-full object-cover object-top"
              animate={{ scale: hovered ? 1.08 : 1 }} transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }} />
            {/* Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#0d001399 30%,transparent 70%)', transition: 'opacity 0.5s' }} />
            <motion.div className="absolute inset-0" style={{ background: 'linear-gradient(135deg,rgba(201,168,76,0.05),transparent)' }}
              animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }} />
            {/* Label top-right */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full text-[9px] uppercase tracking-widest font-bold"
                style={{ background: 'rgba(201,168,76,0.15)', color: '#f0d080', border: '1px solid rgba(201,168,76,0.3)', backdropFilter: 'blur(10px)' }}>
                {label}
              </span>
            </div>
            {/* Content bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <motion.h3 className="font-serif text-white text-xl mb-1 leading-tight"
                animate={{ y: hovered ? -4 : 0 }} transition={{ duration: 0.4 }}>
                {name}
              </motion.h3>
              <p className="text-white/50 text-xs mb-3">{sub}</p>
              <motion.div className="flex items-center gap-2" animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }} transition={{ duration: 0.35 }}>
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span className="text-[#f0d080] text-xs uppercase tracking-widest font-semibold">Order via WhatsApp</span>
              </motion.div>
            </div>
            {/* Corner accent */}
            <motion.div className="absolute bottom-0 right-0 w-16 h-16"
              style={{ background: 'linear-gradient(135deg,transparent 50%,rgba(201,168,76,0.15) 50%)' }}
              animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.4 }} />
          </div>
        </a>
      </TiltCard>
    </FadeIn>
  );
};

/* ── WhatsApp CTA ── */
export const WhatsAppCTA = ({ heading = "Let's bring your crochet vision to life.", sub = "Ready to start crafting?" }: { heading?: string; sub?: string }) => (
  <FadeIn>
    <div className="relative overflow-hidden rounded-3xl text-center py-20 px-8" style={{ background: 'linear-gradient(135deg,#1e0228,#3a0647,#1e0228)', border: '1px solid rgba(201,168,76,0.2)' }}>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,#c9a84c 1px,transparent 0)', backgroundSize: '22px 22px' }} />
      <motion.div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 4, repeat: Infinity }}
        style={{ background: 'radial-gradient(circle,#f0d080,transparent)' }} />
      <div className="relative z-10">
        <p className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4">{sub}</p>
        <h3 className="font-serif text-white mb-8" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)' }}>{heading}</h3>
        <MagneticButton href={WHATSAPP} target="_blank"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-sm uppercase tracking-wider shadow-2xl"
          style={{ background: '#25D366', color: '#fff', boxShadow: '0 20px 60px rgba(37,211,102,0.3)' }}>
          <WhatsAppIcon className="w-5 h-5" /> Message Us on WhatsApp
        </MagneticButton>
      </div>
    </div>
  </FadeIn>
);
