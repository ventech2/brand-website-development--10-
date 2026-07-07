import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_LINKS, WHATSAPP } from '../constants';
import { WhatsAppIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100]"
        animate={{
          paddingTop: scrolled ? 12 : 20,
          paddingBottom: scrolled ? 12 : 20,
          backgroundColor: scrolled ? 'rgba(6,0,10,0.95)' : 'rgba(6,0,10,0)',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent' }}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <NavLink to="/">
            <Logo small={scrolled} />
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.filter(link => !link.internal).map((link, i) => (
              <motion.div key={link.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 + 0.2 }}>
                <NavLink to={link.href}>
                  {({ isActive }) => (
                    <span className="relative text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-300 group"
                      style={{ color: isActive ? '#f0d080' : 'rgba(255,255,255,0.55)' }}>
                      {link.name}
                      <span className="absolute -bottom-1.5 left-0 h-px transition-all duration-500 ease-out"
                        style={{ width: isActive ? '100%' : '0%', background: 'linear-gradient(90deg,#c9a84c,#f0d080)' }} />
                    </span>
                  )}
                </NavLink>
              </motion.div>
            ))}

            <motion.a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(37,211,102,0.25)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.15em] font-bold"
              style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)', color: '#fff' }}>
              <WhatsAppIcon className="w-3.5 h-3.5" /> Order Now
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 z-[110] relative" onClick={() => setMenuOpen(o => !o)}>
            <AnimatePresence mode="wait">
              {menuOpen
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X className="text-[#f0d080] w-6 h-6" /></motion.div>
                : <motion.div key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="text-white w-6 h-6" /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 44px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[105] md:hidden flex flex-col items-center justify-center"
            style={{ background: 'rgba(6,0,10,0.98)', backdropFilter: 'blur(30px)' }}>
            {/* Gold orb decoration */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle,#c9a84c,transparent)' }} />
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.filter(link => !link.internal).map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 40 }} transition={{ delay: i * 0.07, duration: 0.4 }}>
                  <NavLink to={link.href} onClick={() => setMenuOpen(false)}>
                    {({ isActive }) => (
                      <span className="font-serif text-4xl transition-colors" style={{ color: isActive ? '#f0d080' : 'rgba(255,255,255,0.6)' }}>
                        {link.name}
                      </span>
                    )}
                  </NavLink>
                </motion.div>
              ))}
              <motion.a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ delay: 0.4 }}
                className="mt-6 flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest"
                style={{ background: '#25D366', color: '#fff' }}>
                <WhatsAppIcon className="w-4 h-4" /> Order Now
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
