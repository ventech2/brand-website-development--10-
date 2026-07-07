import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, GoldBadge, GoldDivider, MagneticButton, PageHero, ProductCard, WhatsAppCTA } from '../components/UI';
import { WhatsAppIcon } from '../components/Icons';
import { WHATSAPP } from '../constants';

const CATEGORIES = ['All', 'Dresses', 'Bags', 'Accessories', 'Materials'];

const PRODUCTS = [
  { id: 1, category: 'Dresses',     src: '/images/becca-purple.jpg',  label: 'Signature',   name: 'Purple Rose Crochet Set',     sub: 'Dress · Head Wrap · Crystal Details',    featured: true },
  { id: 2, category: 'Dresses',     src: '/images/becca-blue.jpg',    label: 'Signature',   name: 'Royal Blue Crochet Suit',     sub: 'Blazer Romper · Gold Chain Accents',     featured: true },
  { id: 3, category: 'Bags',        src: '/images/bag-purple.jpg',    label: 'Bag',         name: 'Purple Tote Bag',             sub: 'Handcrafted · Gold Chain Handle',         featured: false },
  { id: 4, category: 'Bags',        src: '/images/bag-beige.jpg',     label: 'Bag',         name: 'Boho Crossbody Bag',          sub: 'Natural Beige · Tassel Details',          featured: false },
  { id: 5, category: 'Bags',        src: '/images/bag-mini.jpg',      label: 'Bag',         name: 'Mini Bucket Bag',             sub: 'Pastel Pink · Crochet Flower',            featured: false },
  { id: 6, category: 'Bags',        src: '/images/bag-clutch.jpg',    label: 'Bag',         name: 'Evening Clutch',              sub: 'Purple & Gold · Diamond Pattern',         featured: false },
  { id: 7, category: 'Accessories', src: '/images/crochet-hat.jpg',   label: 'Accessory',   name: 'Crystal Head Wrap',           sub: 'Luxury Turban · Crystal Embellishments',  featured: false },
  { id: 8, category: 'Materials',   src: '/images/yarn-materials.jpg',label: 'Materials',   name: 'Premium Yarn & Tools Bundle', sub: 'Yarns · Hooks · Stitch Markers',          featured: false },
];

export default function Collections() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  return (
    <div style={{ background: '#06000a' }}>
      <PageHero tag="Shop" title="Our Collections" subtitle="Every piece is handcrafted with precision, love, and a deep passion for crochet." image="/images/bag-purple.jpg" />

      {/* ── STICKY FILTER ── */}
      <div className="sticky z-40 py-5 border-b" style={{ top: 70, background: 'rgba(6,0,10,0.95)', backdropFilter: 'blur(24px)', borderColor: 'rgba(201,168,76,0.1)' }}>
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat, i) => (
            <motion.button key={cat} onClick={() => setActive(cat)}
              initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              className="px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-bold border transition-all duration-300"
              style={active === cat
                ? { background: 'linear-gradient(135deg,#c9a84c,#f0d080)', color: '#1e0228', borderColor: 'transparent', boxShadow: '0 8px 24px rgba(201,168,76,0.25)' }
                : { background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.45)', borderColor: 'rgba(255,255,255,0.08)' }
              }>
              {cat}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#06000a' }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,#c9a84c 1px,transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-6 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} src={p.src} label={p.label} name={p.name} sub={p.sub} delay={i * 0.06} />
              ))}
            </motion.div>
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="text-center py-24 text-white/20 text-lg">No products in this category yet.</div>
          )}
        </div>
      </section>

      {/* ── SIGNATURE SPOTLIGHT ── */}
      <section className="py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg,#06000a,#12001f,#06000a)' }}>
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <GoldBadge text="Her Finest Work" />
            <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>
              Signature <span className="italic text-white/40">Designs</span>
            </h2>
            <p className="text-white/35 max-w-xl mx-auto mt-4">Iconic handcrafted pieces — each one a wearable work of art.</p>
          </FadeIn>

          {/* Full immersive split */}
          {PRODUCTS.filter(p => p.featured).map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-0 mb-2`}>
              {/* Photo side */}
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lg:w-1/2 group">
                <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
                  <motion.img src={p.src} alt={p.name} className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.06 }} transition={{ duration: 0.8 }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,#06000a 0%,transparent 50%)' }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'rgba(201,168,76,0.06)' }} />
                </div>
              </a>
              {/* Text side */}
              <div className="lg:w-1/2 p-12 lg:p-20">
                <GoldBadge text={p.label} />
                <h3 className="font-serif text-white mb-4" style={{ fontSize: 'clamp(2rem,4vw,3rem)', lineHeight: 1.1 }}>{p.name}</h3>
                <GoldDivider />
                <p className="text-white/45 mb-8 leading-relaxed">{p.sub}</p>
                <MagneticButton href={WHATSAPP} target="_blank"
                  className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider"
                  style={{ background: '#25D366', color: '#fff', boxShadow: '0 12px 40px rgba(37,211,102,0.2)' }}>
                  <WhatsAppIcon className="w-4 h-4" /> Order This Piece
                </MagneticButton>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── HOW TO ORDER ── */}
      <section className="py-28 overflow-hidden" style={{ background: '#4c0d57' }}>
        <div className="container mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <GoldBadge text="Simple Process" />
            <h2 className="font-serif text-white" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)' }}>How to Order</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-px max-w-4xl mx-auto" style={{ background: 'rgba(201,168,76,0.08)' }}>
            {[
              { step: '01', icon: '👀', title: 'Browse & Choose',  desc: 'Explore collections and pick the perfect piece — or request something fully custom.' },
              { step: '02', icon: '💬', title: 'Message Us',       desc: 'Reach out on WhatsApp with your choice, size, and any special details.' },
              { step: '03', icon: '✨', title: 'Receive & Enjoy',  desc: 'We craft it with love and deliver it to you. Wear it with joy!' },
            ].map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.15}>
                <div className="relative p-10 text-center" style={{ background: 'rgba(6,0,10,0.5)' }}>
                  <p className="absolute top-5 right-6 font-serif text-5xl font-bold" style={{ color: 'rgba(201,168,76,0.1)', lineHeight: 1 }}>{s.step}</p>
                  <div className="text-4xl mb-5">{s.icon}</div>
                  <h4 className="font-serif text-white text-xl mb-3">{s.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#06000a' }}>
        <div className="container mx-auto max-w-3xl">
          <GoldDivider />
          <WhatsAppCTA heading="Ready to order your perfect piece?" sub="Custom orders always welcome" />
        </div>
      </section>
    </div>
  );
}
