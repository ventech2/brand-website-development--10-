import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { InstagramIcon, TikTokIcon, TwitterIcon, WhatsAppIcon } from './Icons';
import { NAV_LINKS, WHATSAPP, INSTAGRAM, TIKTOK, TWITTER, EMAIL, PHONE, PHONE_DISPLAY, EMAIL_DISPLAY } from '../constants';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const socials = [
    { href: WHATSAPP,  icon: <WhatsAppIcon className="w-4 h-4" />,   color: '#25D366' },
    { href: INSTAGRAM, icon: <InstagramIcon className="w-4 h-4" />,  color: '#e1306c' },
    { href: TIKTOK,    icon: <TikTokIcon className="w-4 h-4" />,     color: '#ffffff' },
    { href: TWITTER,   icon: <TwitterIcon className="w-4 h-4" />,    color: '#1DA1F2' },
    { href: EMAIL,     icon: <Mail className="w-4 h-4" />,            color: '#ea4335' },
  ];

  return (
    <footer className="border-t pt-16 pb-8" style={{ background: '#06000a', borderColor: 'rgba(201,168,76,0.2)' }}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
              Stay knotted with us. Your premier source of premium crochet materials, handcrafted bags, dresses, and accessories.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = s.color;
                    el.style.color = s.color;
                    el.style.background = `${s.color}18`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = 'rgba(255,255,255,0.1)';
                    el.style.color = 'rgba(255,255,255,0.4)';
                    el.style.background = 'rgba(255,255,255,0.05)';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="font-serif text-white/80 mb-5 text-sm tracking-widest uppercase">Pages</h4>
            <ul className="space-y-3">
              {NAV_LINKS.filter(link => !link.internal).map(l => (
                <li key={l.name}>
                  <NavLink
                    to={l.href}
                    className={({ isActive }) =>
                      `text-sm transition-colors ${isActive ? 'text-[#f0d080]' : 'text-white/40 hover:text-[#f0d080]'}`
                    }
                  >
                    {l.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + subscribe */}
          <div className="space-y-6">
            <div>
              <h4 className="font-serif text-white/80 mb-5 text-sm tracking-widest uppercase">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href={PHONE} className="flex items-center gap-2 text-white/40 text-sm hover:text-[#f0d080] transition-colors">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0" /> {PHONE_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={EMAIL} className="flex items-center gap-2 text-white/40 text-sm hover:text-[#f0d080] transition-colors break-all">
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" /> {EMAIL_DISPLAY}
                  </a>
                </li>
                <li>
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/40 text-sm hover:text-[#f0d080] transition-colors">
                    <InstagramIcon className="w-3.5 h-3.5 flex-shrink-0" /> @beccaknotery
                  </a>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-white/70 text-sm mb-3">Join our circle for exclusive drops, styling tips, and first access to new crochet releases.</p>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setStatus('error');
                    return;
                  }
                  setStatus('success');
                  setEmail('');
                }}
                className="flex flex-col gap-3"
              >
                <label className="sr-only" htmlFor="subscribe-email">Email address</label>
                <input
                  id="subscribe-email"
                  type="email"
                  value={email}
                  onChange={e => {
                    setEmail(e.target.value);
                    setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="w-full rounded-2xl border border-white/10 bg-[#09010f] px-4 py-3 text-sm text-white outline-none ring-2 ring-transparent transition focus:border-[#f0d080] focus:ring-[#f0d080]/30"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#c9a84c] to-[#f0d080] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black transition hover:opacity-95"
                >
                  Subscribe
                </button>
              </form>
              {status === 'success' && <p className="text-emerald-300 text-sm mt-3">Thanks! We'll email you as soon as the next launch is ready.</p>}
              {status === 'error' && <p className="text-rose-300 text-sm mt-3">Please enter a valid email address.</p>}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} Beccaknotery. All rights reserved.</p>
          <p className="text-white/25 text-xs italic">Weaving Dreams, One Stitch At A Time. 🧶</p>
        </div>
      </div>
    </footer>
  );
}
