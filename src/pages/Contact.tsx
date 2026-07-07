import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FadeIn, GoldBadge, GoldDivider, MagneticButton, PageHero } from '../components/UI';
import { InstagramIcon, TikTokIcon, TwitterIcon, WhatsAppIcon } from '../components/Icons';
import { WHATSAPP, INSTAGRAM, TIKTOK, TWITTER, EMAIL, PHONE, PHONE_DISPLAY, EMAIL_DISPLAY } from '../constants';

const SOCIALS = [
  { href: WHATSAPP,  label: 'WhatsApp',    handle: PHONE_DISPLAY,  cta: 'Chat Now',   icon: <WhatsAppIcon className="w-7 h-7" />,   color: '#25D366', glow: 'rgba(37,211,102,0.2)',   desc: 'Fastest way to place orders or inquire about custom pieces.' },
  { href: INSTAGRAM, label: 'Instagram',   handle: '@beccaknotery', cta: 'Follow Us',  icon: <InstagramIcon className="w-7 h-7" />,  color: '#e1306c', glow: 'rgba(225,48,108,0.2)',   desc: 'See our latest designs, behind-the-scenes and inspiration.' },
  { href: TIKTOK,    label: 'TikTok',      handle: '@beccaknotery', cta: 'Watch Us',   icon: <TikTokIcon className="w-7 h-7" />,    color: '#ffffff', glow: 'rgba(255,255,255,0.1)',  desc: 'Watch crochet process videos, tutorials and product reveals.' },
  { href: TWITTER,   label: 'Twitter / X', handle: '@beccaknotery', cta: 'Follow Us',  icon: <TwitterIcon className="w-7 h-7" />,   color: '#1DA1F2', glow: 'rgba(29,161,242,0.2)',   desc: 'Stay updated with news, drops and crochet conversations.' },
  { href: EMAIL,     label: 'Email',       handle: EMAIL_DISPLAY,   cta: 'Send Mail',  icon: <Mail className="w-7 h-7" />,          color: '#ea4335', glow: 'rgba(234,67,53,0.2)',    desc: 'For business inquiries, collaborations and wholesale orders.' },
  { href: PHONE,     label: 'Phone',       handle: PHONE_DISPLAY,   cta: 'Call Now',   icon: <Phone className="w-7 h-7" />,         color: '#c9a84c', glow: 'rgba(201,168,76,0.2)',   desc: 'Prefer talking? Give us a call — we\'re happy to help.' },
];

export default function Contact() {
  return (
    <div style={{ background: '#06000a' }}>
      <PageHero tag="Stay Knotted" title="Connect With Us" subtitle="Reach us anywhere — WhatsApp, DMs, or email. We'd love to hear from you!" />

      {/* ── SOCIAL CARDS ── */}
      <section className="py-28" style={{ background: 'linear-gradient(180deg,#06000a,#0f0018)' }}>
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {SOCIALS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.07}>
                <motion.a href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -10, boxShadow: `0 30px 60px ${s.glow}` }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col gap-5 p-8 rounded-2xl border border-white/5 group block"
                  style={{ background: 'rgba(255,255,255,0.02)' }}>
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center border border-white/8 transition-all duration-300 group-hover:border-transparent"
                    style={{ background: `${s.color}12`, color: s.color }}>
                    {s.icon}
                  </div>
                  {/* Info */}
                  <div className="flex-1">
                    <p className="text-white font-semibold text-lg mb-1">{s.label}</p>
                    <p className="text-white/30 text-xs mb-3 break-all">{s.handle}</p>
                    <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  {/* CTA pill */}
                  <motion.span whileHover={{ scale: 1.05 }}
                    className="inline-block text-xs uppercase tracking-[0.2em] font-bold px-5 py-2.5 rounded-full self-start border"
                    style={{ borderColor: `${s.color}50`, color: s.color }}>
                    {s.cta} →
                  </motion.span>
                </motion.a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN WHATSAPP CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden" style={{ background: '#0a0015' }}>
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px,#c9a84c 1px,transparent 0)', backgroundSize: '28px 28px' }} />
        <motion.div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 5, repeat: Infinity }}
          style={{ background: 'radial-gradient(circle,#25D366,transparent)' }} />
        <div className="container mx-auto max-w-3xl relative z-10 text-center">
          <FadeIn>
            <GoldBadge text="Fastest Way to Reach Us" />
            <h2 className="font-serif text-white mb-6" style={{ fontSize: 'clamp(2.5rem,5vw,4.5rem)', lineHeight: 1.05 }}>
              Message us on<br /><span style={{ color: '#25D366', textShadow: '0 0 40px rgba(37,211,102,0.3)' }}>WhatsApp</span>
            </h2>
            <GoldDivider />
            <p className="text-white/40 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
              Place an order, ask about custom designs, or just say hello. We respond fast and we'd love to help!
            </p>
            <MagneticButton href={WHATSAPP} target="_blank"
              className="inline-flex items-center gap-3 px-12 py-5 rounded-full font-bold text-base uppercase tracking-wider"
              style={{ background: '#25D366', color: '#fff', boxShadow: '0 20px 60px rgba(37,211,102,0.3)', fontSize: '1rem' }}>
              <WhatsAppIcon className="w-6 h-6" /> Start a WhatsApp Chat
            </MagneticButton>
            <p className="text-white/20 text-sm mt-6">{PHONE_DISPLAY}</p>
          </FadeIn>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="py-20 border-t" style={{ background: '#06000a', borderColor: 'rgba(201,168,76,0.08)' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto text-center">
            {[
              { icon: '📍', label: 'Location',      value: 'Nigeria 🇳🇬' },
              { icon: '⏰', label: 'Response Time', value: 'Within 24 hrs' },
              { icon: '📦', label: 'Custom Orders', value: 'Always Welcome' },
            ].map((info, i) => (
              <FadeIn key={info.label} delay={i * 0.1}>
                <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-3">
                  <span className="text-4xl">{info.icon}</span>
                  <p className="text-white/25 text-xs uppercase tracking-[0.2em]">{info.label}</p>
                  <p className="text-white/70 font-medium text-lg">{info.value}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <GoldDivider className="max-w-2xl mx-auto mt-16" />
          <p className="text-center text-white/20 text-sm italic mt-6">Weaving Dreams, One Stitch At A Time. 🧶</p>
        </div>
      </section>
    </div>
  );
}
