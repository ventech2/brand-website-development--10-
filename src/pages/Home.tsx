import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { FadeIn, GoldBadge, GoldDivider, GlowText, TiltCard, MagneticButton, ProductCard } from '../components/UI';
import { WhatsAppIcon, InstagramIcon, TikTokIcon } from '../components/Icons';
import { WHATSAPP, INSTAGRAM, TIKTOK } from '../constants';

/* Animated floating particle */
const Particle = ({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) => (
  <motion.div className="absolute rounded-full pointer-events-none"
    style={{ left: x, top: y, width: size, height: size, background: 'radial-gradient(circle,#c9a84c,transparent)', opacity: 0 }}
    animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0], scale: [1, 1.5, 1] }}
    transition={{ duration: 4 + Math.random() * 3, delay, repeat: Infinity, ease: 'easeInOut' }} />
);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY   = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const particles = Array.from({ length: 14 }, (_, i) => ({
    x: `${Math.random() * 100}%`, y: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2, delay: i * 0.4,
  }));

  return (
    <div style={{ background: '#06000a' }}>

      {/* ══════════════════════════════════════
          CINEMATIC HERO
      ══════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">

        {/* Parallax BG */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-[1.15]">
          <img src="/images/texture-gold.jpg" alt="gold texture background" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 80% at 50% 50%,#2a003d 0%,#06000a 70%)' }} />
        </motion.div>

        {/* Particles */}
        {particles.map((p, i) => <Particle key={i} {...p} />)}

        {/* Diagonal light beams */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full opacity-10" style={{ background: 'linear-gradient(to bottom,transparent,#c9a84c 30%,#c9a84c 70%,transparent)' }} />
          <div className="absolute top-0 right-1/3 w-px h-full opacity-6"  style={{ background: 'linear-gradient(to bottom,transparent,#f0d080 40%,transparent)' }} />
        </div>

        {/* Giant decorative BK letterform */}
        <motion.div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
          initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, delay: 0.5 }}>
          <span className="font-serif font-bold" style={{ fontSize: 'clamp(18rem,28vw,32rem)', lineHeight: 1, color: 'transparent', WebkitTextStroke: '1px rgba(201,168,76,0.07)', userSelect: 'none' }}>BK</span>
        </motion.div>

        {/* Content */}
        <motion.div style={{ y: textY, opacity }} className="relative z-10 container mx-auto px-6 py-32 pt-48">
          <div className="max-w-3xl">

            {/* Badge */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-10 border"
              style={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.25)', backdropFilter: 'blur(10px)' }}>
              <Sparkles className="w-3.5 h-3.5" style={{ color: '#f0d080' }} />
              <span className="text-[11px] uppercase tracking-[0.25em]" style={{ color: '#f0d080' }}>Premium Handcrafted Crochet</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
            </motion.div>

            {/* Main headline — massive serif */}
            <div className="overflow-hidden mb-4">
              <motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-white" style={{ fontSize: 'clamp(3.5rem,9vw,8rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
                Weaving
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-4">
              <motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif italic" style={{ fontSize: 'clamp(3.5rem,9vw,8rem)', lineHeight: 0.95, letterSpacing: '-0.03em', color: '#f0d080', textShadow: '0 0 60px rgba(240,208,128,0.3)' }}>
                Dreams,
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-12">
              <motion.h1 initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-light" style={{ fontSize: 'clamp(2.2rem,5.5vw,5.5rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'rgba(255,255,255,0.35)' }}>
                One Stitch At A Time.
              </motion.h1>
            </div>

            {/* Divider */}
            <motion.div initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }} transition={{ duration: 1.2, delay: 0.5 }}
              className="mb-8 origin-left h-px w-48" style={{ background: 'linear-gradient(90deg,#c9a84c,transparent)' }} />

            {/* Sub text */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.55 }}
              className="text-white/45 text-lg leading-relaxed mb-12 max-w-lg">
              Premium crochet materials, expertly handcrafted bags, dresses & accessories — each piece knitted with love.
            </motion.p>

            {/* CTA row */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-5 items-center">
              <MagneticButton href="/collections"
                className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider"
                style={{ background: 'linear-gradient(135deg,#c9a84c,#f0d080,#c9a84c)', color: '#1e0228', boxShadow: '0 20px 60px rgba(201,168,76,0.25)' }}>
                Explore Collections <ArrowRight className="w-4 h-4" />
              </MagneticButton>
              <MagneticButton href={WHATSAPP} target="_blank"
                className="flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wider border"
                style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.03)' }}>
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" /> WhatsApp Order
              </MagneticButton>
            </motion.div>

            {/* Stat row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
              className="flex gap-12 mt-16 pt-12 border-t border-white/5">
              {[['100%', 'Handcrafted'], ['Premium', 'Materials'], ['Custom', 'Orders Welcome']].map(([n, l]) => (
                <div key={l}>
                  <p className="font-serif text-2xl font-bold mb-0.5" style={{ color: '#f0d080' }}>{n}</p>
                  <p className="text-white/30 text-xs uppercase tracking-widest">{l}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Floating product preview */}
        <motion.div initial={{ opacity: 0, x: 80, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute right-8 bottom-16 hidden xl:block z-20">
          <TiltCard>
            <div className="w-52 h-64 rounded-2xl overflow-hidden relative shadow-2xl"
              style={{ border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.1)' }}>
              <img src="/images/becca-purple.jpg" alt="Purple Rose Set crochet product" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#06000a 10%,transparent 60%)' }} />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-serif text-sm">Purple Rose Set</p>
                <p className="text-white/40 text-xs mt-0.5">Handcrafted</p>
              </div>
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full border border-[#c9a84c]/30 flex items-center justify-center">
                <span style={{ color: '#c9a84c', fontSize: 10 }}>✦</span>
              </motion.div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Scroll cue */}
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
          <div className="w-px h-14" style={{ background: 'linear-gradient(to bottom,transparent,rgba(201,168,76,0.5))' }} />
          <ChevronDown className="w-4 h-4" style={{ color: 'rgba(201,168,76,0.5)' }} />
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          GOLD MARQUEE
      ══════════════════════════════════════ */}
      <div className="relative py-4 overflow-hidden" style={{ background: 'linear-gradient(90deg,#c9a84c,#f0d080,#e8c060,#f0d080,#c9a84c)' }}>
        <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-0 whitespace-nowrap" style={{ width: 'max-content' }}>
          {Array(4).fill(['✦ HANDCRAFTED CROCHET', '◆ PREMIUM YARNS & TOOLS', '✦ CUSTOM DRESSES', '◆ LUXURY BAGS', '✦ HEAD WRAPS', '◆ BECCAKNOTERY']).flat().map((t, i) => (
            <span key={i} className="inline-block px-8 text-[11px] uppercase tracking-[0.25em] font-black" style={{ color: '#1e0228' }}>{t}</span>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════
          CINEMATIC ABOUT TEASER
      ══════════════════════════════════════ */}
      <section className="relative py-36 overflow-hidden" style={{ background: 'linear-gradient(180deg,#06000a 0%,#0f0018 50%,#06000a 100%)' }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(201,168,76,0.5) 40px,rgba(201,168,76,0.5) 41px)', backgroundSize: '100% 41px' }} />

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Photo stack */}
            <FadeIn direction="left" className="relative h-[600px] hidden lg:block">
              {/* Main photo */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }}
                className="absolute left-0 top-0 w-72 h-96 rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(201,168,76,0.2)', zIndex: 2 }}>
                <img src="/images/becca-purple.jpg" alt="Purple Rose Set handcrafted crochet" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#06000a55,transparent)' }} />
              </motion.div>
              {/* Second photo */}
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.5 }}
                className="absolute right-0 bottom-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(201,168,76,0.2)', zIndex: 3 }}>
                <img src="/images/becca-blue.jpg" alt="Royal Blue Crochet Suit handcrafted crochet" className="w-full h-full object-cover object-top" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#06000a55,transparent)' }} />
              </motion.div>
              {/* Gold accent card */}
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-6 py-4 rounded-2xl text-center"
                style={{ background: 'rgba(6,0,10,0.9)', border: '1px solid rgba(201,168,76,0.4)', backdropFilter: 'blur(20px)', minWidth: 160, boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(201,168,76,0.08)' }}>
                <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#c9a84c' }}>Since Day One</p>
                <p className="font-serif text-white text-lg">Handcrafted<br />with Love</p>
                <div className="mt-2 flex justify-center gap-1">
                  {Array(5).fill(0).map((_, i) => <span key={i} className="text-xs" style={{ color: '#f0d080' }}>★</span>)}
                </div>
              </motion.div>
              {/* Dot grid */}
              <div className="absolute -top-4 -left-4 grid grid-cols-5 gap-2 opacity-20 z-0">
                {Array(25).fill(0).map((_, i) => <div key={i} className="w-1 h-1 rounded-full bg-[#c9a84c]" />)}
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn direction="right">
              <GoldBadge text="Brand Introduction" />
              <h2 className="font-serif text-white mb-8" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                Crafting beauty<br /><GlowText><span style={{ color: '#f0d080' }}>stitch by stitch.</span></GlowText>
              </h2>
              <GoldDivider />
              <div className="space-y-5 text-white/50 text-lg leading-relaxed mb-10">
                <p><strong className="text-white">Beccaknotery</strong> is your trusted source for premium crochet materials and expertly handcrafted pieces — wearable art born from a deep passion for the craft.</p>
                <p>The name blends <strong style={{ color: '#f0d080' }}>"Becca"</strong> from Rebecca with <strong style={{ color: '#f0d080' }}>"knotery"</strong> — rooted in the fundamental art of the knot, symbolizing creation, connection, and beauty.</p>
              </div>
              <blockquote className="pl-5 border-l-2 border-[#c9a84c] italic text-white/60 text-xl mb-10">
                "A unique name that speaks to creativity, craftsmanship, and a passion for crochet."
              </blockquote>
              <Link to="/about">
                <MagneticButton className="flex items-center gap-2 text-sm uppercase tracking-widest font-semibold transition-colors"
                  style={{ color: '#c9a84c' }}>
                  Our Full Story <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED PRODUCTS
      ══════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden" style={{ background: '#06000a' }}>
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,#c9a84c 1px,transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <FadeIn>
              <GoldBadge text="Handcrafted With Love" />
              <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', lineHeight: 1.05 }}>
                Featured<br /><span className="italic text-white/40">Pieces</span>
              </h2>
            </FadeIn>
            <FadeIn direction="right">
              <Link to="/collections">
                <MagneticButton className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] border px-5 py-3 rounded-full transition-all hover:border-[#c9a84c]"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.5)' }}>
                  View All <ArrowRight className="w-3.5 h-3.5" />
                </MagneticButton>
              </Link>
            </FadeIn>
          </div>

          {/* Asymmetric masonry grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Hero card — spans 7 cols */}
            <div className="md:col-span-7">
              <ProductCard src="/images/becca-purple.jpg" label="Signature" name="Purple Rose Crochet Set" sub="Dress · Head Wrap · Crystal Details" delay={0.05} size="tall" />
            </div>
            {/* Right column — 5 cols, 2 stacked */}
            <div className="md:col-span-5 flex flex-col gap-5">
              <ProductCard src="/images/bag-purple.jpg" label="Bag" name="Purple Tote Bag" sub="Handcrafted · Gold Chain Handle" delay={0.15} />
              <ProductCard src="/images/bag-beige.jpg" label="Bag" name="Boho Crossbody" sub="Natural Beige · Tassel Details" delay={0.25} />
            </div>
          </div>

          {/* Second row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <ProductCard src="/images/becca-blue.jpg" label="Signature" name="Royal Blue Suit" sub="Blazer Romper · Gold Chains" delay={0.1} />
            <ProductCard src="/images/crochet-hat.jpg" label="Accessories" name="Crystal Head Wrap" sub="Luxury Turban · Crystals" delay={0.2} />
            <ProductCard src="/images/bag-mini.jpg" label="Bag" name="Mini Bucket Bag" sub="Pastel Pink · Crochet Flower" delay={0.3} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          IMMERSIVE WHY US
      ══════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#1a003d 0%,#4c0d57 50%,#1a003d 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg,transparent,transparent 30px,rgba(201,168,76,0.3) 30px,rgba(201,168,76,0.3) 31px)' }} />
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="text-center mb-20">
            <GoldBadge text="Why Beccaknotery" />
            <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>The Beccaknotery<br /><span className="italic text-white/50">Difference</span></h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(201,168,76,0.1)' }}>
            {[
              { icon: '🧶', n: '01', title: '100% Handcrafted', desc: 'Every piece knitted with care, love, and precision — no mass production, ever.' },
              { icon: '✨', n: '02', title: 'Premium Quality',  desc: 'Only the finest yarns, hooks, and materials make it to our collection.' },
              { icon: '🎨', n: '03', title: 'Custom Orders',    desc: 'Want something unique? We bring your exact creative vision to life.' },
              { icon: '🌍', n: '04', title: 'Global Community', desc: 'Empowering crochet lovers at every skill level across the globe.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.12}>
                <motion.div whileHover={{ background: 'rgba(201,168,76,0.06)' }}
                  className="relative p-10 text-center transition-all duration-300 group"
                  style={{ background: 'rgba(6,0,10,0.5)' }}>
                  <p className="absolute top-5 right-6 font-serif text-5xl font-bold" style={{ color: 'rgba(201,168,76,0.08)', lineHeight: 1 }}>{item.n}</p>
                  <div className="text-4xl mb-6">{item.icon}</div>
                  <h4 className="font-serif text-white text-xl mb-3">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-12 transition-all duration-500"
                    style={{ background: 'linear-gradient(90deg,#c9a84c,#f0d080)' }} />
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SOCIAL + CTA
      ══════════════════════════════════════ */}
      <section className="py-32" style={{ background: '#06000a' }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <GoldBadge text="Stay Connected" />
              <h2 className="font-serif text-white mb-8" style={{ fontSize: 'clamp(2rem,4vw,3.5rem)', lineHeight: 1.1 }}>
                Follow the journey<br /><span className="italic" style={{ color: '#f0d080' }}>@beccaknotery</span>
              </h2>
              <GoldDivider />
              <div className="flex flex-col gap-4">
                {[
                  { href: INSTAGRAM, icon: <InstagramIcon className="w-5 h-5" />, label: 'Instagram', handle: '@beccaknotery', color: '#e1306c' },
                  { href: TIKTOK,    icon: <TikTokIcon className="w-5 h-5" />,    label: 'TikTok',    handle: '@beccaknotery', color: '#ffffff' },
                  { href: WHATSAPP,  icon: <WhatsAppIcon className="w-5 h-5" />,  label: 'WhatsApp',  handle: '08162525251',   color: '#25D366' },
                ].map(s => (
                  <motion.a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                    whileHover={{ x: 8, borderColor: s.color }}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-white/6 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${s.color}15`, color: s.color }}>{s.icon}</div>
                    <div><p className="text-white font-medium text-sm">{s.label}</p><p className="text-white/35 text-xs mt-0.5">{s.handle}</p></div>
                    <ArrowRight className="w-4 h-4 ml-auto" style={{ color: 'rgba(255,255,255,0.2)' }} />
                  </motion.a>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="relative overflow-hidden rounded-3xl py-16 px-10 text-center border border-[#c9a84c]/15"
                style={{ background: 'linear-gradient(135deg,#0f0018,#200030)' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-24 -right-24 w-64 h-64 rounded-full border border-[#c9a84c]/10" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full border border-[#c9a84c]/08" />
                <div className="relative z-10">
                  <p className="text-white/35 text-xs uppercase tracking-widest mb-4">Custom order? Let's talk</p>
                  <h3 className="font-serif text-white mb-6" style={{ fontSize: 'clamp(1.6rem,3vw,2.5rem)' }}>Your vision, our needles, one perfect piece.</h3>
                  <MagneticButton href={WHATSAPP} target="_blank"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider"
                    style={{ background: '#25D366', color: '#fff', boxShadow: '0 20px 50px rgba(37,211,102,0.25)' }}>
                    <WhatsAppIcon className="w-4 h-4" /> Start a Chat
                  </MagneticButton>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
