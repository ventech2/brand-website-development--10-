import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FadeIn, GoldBadge, GoldDivider, GlowText, MagneticButton, PageHero, WhatsAppCTA } from '../components/UI';

export default function Mission() {
  return (
    <div style={{ background: '#06000a' }}>
      <PageHero tag="Our Purpose" title="Mission & Vision" subtitle="The principles that guide every stitch, every knot, every creation." image="/images/yarn-materials.jpg" />

      {/* ── MISSION CINEMATIC SPLIT ── */}
      <section className="overflow-hidden" style={{ background: '#06000a' }}>
        <div className="flex flex-col lg:flex-row min-h-[680px]">
          <FadeIn direction="left" className="lg:w-1/2 flex flex-col justify-center px-10 md:px-20 py-28">
            <GoldBadge text="What We Stand For" />
            <h2 className="font-serif text-white mb-8" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1 }}>
              Our <GlowText><span className="italic" style={{ color: '#f0d080' }}>Mission</span></GlowText>
            </h2>
            <GoldDivider />
            <p className="text-white/55 text-xl leading-relaxed mb-6">
              At Beccaknotery, our mission is to provide high-quality crochet materials and handmade crochet pieces that <strong style={{ color: '#f0d080' }}>inspire creativity</strong> and <strong style={{ color: '#f0d080' }}>add beauty</strong> to everyday life.
            </p>
            <p className="text-white/35 text-base leading-relaxed mb-10">
              We believe every person deserves access to premium crafting tools and the joy that comes from creating — or wearing — something made with genuine love.
            </p>
            <Link to="/collections">
              <MagneticButton className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold" style={{ color: '#c9a84c' }}>
                Shop the collection <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </Link>
          </FadeIn>
          <div className="lg:w-1/2 relative min-h-[440px] overflow-hidden">
            <img src="/images/becca-blue.jpg" alt="Mission" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right,#06000a 0%,transparent 40%)' }} />
            {/* Floating stat */}
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 right-10 px-6 py-5 rounded-2xl text-center"
              style={{ background: 'rgba(6,0,10,0.85)', border: '1px solid rgba(201,168,76,0.3)', backdropFilter: 'blur(20px)' }}>
              <p className="font-serif text-3xl font-bold" style={{ color: '#f0d080' }}>100%</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Handcrafted</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION CINEMATIC SPLIT ── */}
      <section className="overflow-hidden" style={{ background: '#0a0015' }}>
        <div className="flex flex-col lg:flex-row-reverse min-h-[680px]">
          <FadeIn direction="right" className="lg:w-1/2 flex flex-col justify-center px-10 md:px-20 py-28">
            <GoldBadge text="Where We're Headed" />
            <h2 className="font-serif text-white mb-8" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1 }}>
              Our <GlowText><span className="italic" style={{ color: '#f0d080' }}>Vision</span></GlowText>
            </h2>
            <GoldDivider />
            <p className="text-white/55 text-xl leading-relaxed mb-6">
              Beccaknotery envisions becoming the <strong style={{ color: '#f0d080' }}>premier provider</strong> of high-quality crochet materials, tools, and handcrafted pieces — fostering a global community of creators.
            </p>
            <p className="text-white/35 text-base leading-relaxed mb-10">
              Dedicated to empowering crafters of all levels through creativity, craftsmanship, and excellence — building a world where every knot connects people.
            </p>
            <Link to="/about">
              <MagneticButton className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-semibold" style={{ color: '#c9a84c' }}>
                Read our full story <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </Link>
          </FadeIn>
          <div className="lg:w-1/2 relative min-h-[440px] overflow-hidden">
            <img src="/images/becca-purple.jpg" alt="Vision" className="absolute inset-0 w-full h-full object-cover object-top" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to left,#0a0015 0%,transparent 40%)' }} />
            <motion.div animate={{ y: [-5, 5, -5] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-10 px-6 py-5 rounded-2xl text-center"
              style={{ background: 'rgba(6,0,10,0.85)', border: '1px solid rgba(201,168,76,0.3)', backdropFilter: 'blur(20px)' }}>
              <p className="font-serif text-3xl font-bold" style={{ color: '#f0d080' }}>Global</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Community</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="py-32" style={{ background: '#4c0d57' }}>
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <GoldBadge text="Our Core Values" />
            <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>What Drives Us</h2>
          </FadeIn>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(201,168,76,0.08)' }}>
            {[
              { icon: '🧶', title: 'Craftsmanship', desc: 'Precision in every knot, pride in every piece.' },
              { icon: '🎨', title: 'Creativity',    desc: 'We push the boundaries of what crochet can be.' },
              { icon: '💜', title: 'Passion',        desc: 'Every thread carries genuine love and devotion.' },
              { icon: '🌍', title: 'Community',      desc: 'A global family of crochet lovers, one stitch at a time.' },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <motion.div whileHover={{ background: 'rgba(201,168,76,0.06)' }} transition={{ duration: 0.3 }}
                  className="p-10 text-center" style={{ background: 'rgba(6,0,10,0.5)' }}>
                  <div className="text-4xl mb-5">{v.icon}</div>
                  <h4 className="font-serif text-white text-xl mb-3">{v.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND PLEDGE ── */}
      <section className="py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg,#0a0015,#06000a)' }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn className="text-center mb-16">
            <GoldBadge text="Our Promise" />
            <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>The Beccaknotery Pledge</h2>
            <GoldDivider />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', text: 'We will always use only the finest, premium-grade yarns and materials in every product we create.' },
              { num: '02', text: 'We will treat every custom order as if it were made for ourselves — with care, devotion, and artistry.' },
              { num: '03', text: 'We will continue to grow our community, sharing knowledge and creativity freely with all.' },
            ].map((p, i) => (
              <FadeIn key={p.num} delay={i * 0.15}>
                <motion.div whileHover={{ borderColor: 'rgba(201,168,76,0.3)', y: -6 }} transition={{ duration: 0.3 }}
                  className="relative p-10 rounded-2xl border border-[#c9a84c]/08 transition-all duration-300"
                  style={{ background: 'rgba(201,168,76,0.02)' }}>
                  <p className="font-serif text-6xl font-bold mb-5" style={{ color: 'rgba(201,168,76,0.12)', lineHeight: 1 }}>{p.num}</p>
                  <p className="text-white/50 text-base leading-relaxed italic">"{p.text}"</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#06000a' }}>
        <div className="container mx-auto max-w-3xl">
          <WhatsAppCTA heading="Let's bring your crochet vision to life." sub="Ready to create something beautiful?" />
        </div>
      </section>
    </div>
  );
}
