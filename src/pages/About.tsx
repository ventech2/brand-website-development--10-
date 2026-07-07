import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeIn, GoldBadge, GoldDivider, GlowText, TiltCard, MagneticButton, PageHero, WhatsAppCTA } from '../components/UI';
import { InstagramIcon, TikTokIcon } from '../components/Icons';
import { INSTAGRAM, TIKTOK } from '../constants';

export default function About() {
  return (
    <div style={{ background: '#06000a' }}>
      <PageHero tag="Our Story" title="About Beccaknotery" subtitle="A name woven from passion, creativity, and the art of the knot." image="/images/texture-gold.jpg" />

      {/* ── BRAND INTRO ── */}
      <section className="py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg,#06000a,#0f0018)' }}>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Photos */}
            <FadeIn direction="left" className="relative hidden lg:block" style={{ height: 640 }}>
              <TiltCard className="absolute left-0 top-0 w-80 h-[420px] rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(201,168,76,0.2)', zIndex: 2 } as React.CSSProperties}>
                <div>
                  <img src="/images/becca-purple.jpg" alt="Beccaknotery" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#0f001855,transparent)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-serif text-white text-sm">Purple Rose Set</p>
                    <p className="text-white/40 text-xs">Signature Design</p>
                  </div>
                </div>
              </TiltCard>
              <TiltCard className="absolute right-0 bottom-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(201,168,76,0.2)', zIndex: 3 } as React.CSSProperties}>
                <div>
                  <img src="/images/becca-blue.jpg" alt="Beccaknotery" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#0f001855,transparent)' }} />
                </div>
              </TiltCard>
              {/* Floating badge */}
              <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-6 py-5 rounded-2xl text-center"
                style={{ background: 'rgba(6,0,10,0.9)', border: '1px solid rgba(201,168,76,0.35)', backdropFilter: 'blur(20px)', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
                <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: '#c9a84c' }}>Beccaknotery</p>
                <p className="font-serif text-white text-lg">Handcrafted<br />with Love 🧶</p>
              </motion.div>
              <div className="absolute -top-4 -left-4 grid grid-cols-5 gap-2 opacity-15 z-0">
                {Array(25).fill(0).map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />)}
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
                <p><strong className="text-white">Beccaknotery</strong> is your trusted source for premium crochet materials and expertly handcrafted pieces. We offer high-quality yarns, tools, and supplies to support crocheters of all skill levels.</p>
                <p>The name blends <strong style={{ color: '#f0d080' }}>"Becca"</strong> — drawn from the name Rebecca — and <strong style={{ color: '#f0d080' }}>"knotery"</strong> — rooted in "knot," a fundamental concept in crochet, symbolizing the art of tying yarn together to create intricate, breathtaking designs.</p>
                <blockquote className="pl-5 border-l-2 border-[#c9a84c] italic text-white/65 text-xl">"A unique name that speaks to creativity, craftsmanship, and a passion for crochet."</blockquote>
              </div>
              <div className="flex gap-5">
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/35 hover:text-[#f0d080] transition-colors">
                  <InstagramIcon className="w-4 h-4" /> @beccaknotery
                </a>
                <a href={TIKTOK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/35 hover:text-[#f0d080] transition-colors">
                  <TikTokIcon className="w-4 h-4" /> @beccaknotery
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── BRAND STORY CINEMATIC BAND ── */}
      <section className="relative py-32 overflow-hidden" style={{ background: '#4c0d57' }}>
        <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,white 1px,transparent 0)', backgroundSize: '30px 30px' }} />
        <motion.div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 pointer-events-none"
          animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity }}
          style={{ background: 'radial-gradient(circle,#f0d080,transparent)' }} />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <FadeIn>
            <GoldBadge text="Our Heritage" />
            <h2 className="font-serif text-white text-5xl md:text-6xl mb-10">Brand Story</h2>
            <GoldDivider />
            <p className="text-white/70 text-xl md:text-2xl font-light leading-relaxed mb-8">
              Beccaknotery was founded out of a deep passion for crochet and a burning desire to share that creativity with the world. What started as a personal crafting journey — quiet evenings, colourful yarns, a single crochet hook — has grown into a brand dedicated to premium materials and tools.
            </p>
            <p className="text-white/40 text-lg italic">"At Beccaknotery, we are here to help bring your crochet visions to life."</p>
          </FadeIn>
        </div>
      </section>

      {/* ── FOUNDER SHOWCASE ── */}
      <section className="py-32 overflow-hidden" style={{ background: '#06000a' }}>
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <GoldBadge text="The Face Behind the Brand" />
            <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>Meet the Creator</h2>
            <p className="text-white/40 max-w-lg mx-auto mt-4">Every stitch carries her signature — a blend of artistry, dedication, and love.</p>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { src: '/images/becca-purple.jpg', name: 'Purple Rose Crochet Set', desc: 'Handcrafted dress with matching crystal head wrap — a complete signature ensemble.' },
              { src: '/images/becca-blue.jpg',   name: 'Royal Blue Crochet Suit', desc: 'Luxurious blue blazer romper with gold chain accents — elegance redefined.' },
            ].map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.15}>
                <TiltCard>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl group" style={{ aspectRatio: '3/4', border: '1px solid rgba(201,168,76,0.12)' }}>
                    <motion.img src={item.src} alt={item.name} className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.06 }} transition={{ duration: 0.7 }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#06000aee 30%,transparent 65%)' }} />
                    <motion.div className="absolute inset-0 rounded-3xl border-2 border-transparent"
                      whileHover={{ borderColor: 'rgba(201,168,76,0.5)' }} transition={{ duration: 0.4 }} />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="font-serif text-white text-2xl mb-2">{item.name}</h3>
                      <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#0f0018,#06000a)' }}>
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <GoldBadge text="Our Values" />
            <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>What Drives Us</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { num: '01', icon: '🎨', title: 'Creativity',    desc: 'Every design starts with imagination. We push the boundaries of what crochet can be.' },
              { num: '02', icon: '💎', title: 'Craftsmanship', desc: 'Precision in every knot, pride in every piece. We never compromise on quality.' },
              { num: '03', icon: '🌍', title: 'Community',     desc: 'From beginner to expert, Beccaknotery is a home for every crocheter.' },
            ].map((v, i) => (
              <FadeIn key={v.num} delay={i * 0.15}>
                <motion.div whileHover={{ y: -8, borderColor: 'rgba(201,168,76,0.3)' }}
                  className="relative p-10 rounded-2xl border border-white/5 transition-all duration-300"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <p className="absolute top-5 right-6 font-serif text-6xl font-bold" style={{ color: 'rgba(201,168,76,0.08)', lineHeight: 1 }}>{v.num}</p>
                  <div className="text-4xl mb-5">{v.icon}</div>
                  <h4 className="font-serif text-white text-xl mb-3">{v.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#06000a' }}>
        <div className="container mx-auto max-w-3xl">
          <WhatsAppCTA heading="Want a custom piece made just for you?" sub="Let's create something beautiful together" />
          <FadeIn className="text-center mt-8">
            <Link to="/collections">
              <MagneticButton className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold" style={{ color: '#c9a84c' }}>
                Browse collections <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
