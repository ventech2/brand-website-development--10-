import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import Mission from './pages/Mission';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Admin from './pages/Admin';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}
        initial={{ opacity: 0, filter: 'blur(8px)' }}
        animate={{ opacity: 1, filter: 'blur(0px)' }}
        exit={{ opacity: 0, filter: 'blur(8px)' }}
        transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}>
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function AppInner() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#06000a', fontFamily: "'Inter',sans-serif", cursor: 'none' }}>
      <Cursor />
      <main className="flex-1">
        <PageTransition>
          <Routes>
            <Route path="/"            element={<Home />} />
            <Route path="/about"       element={<About />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/mission"     element={<Mission />} />
            <Route path="/blog"        element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin"       element={<Admin />} />
            <Route path="/contact"     element={<Contact />} />
            <Route path="*"            element={<Home />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AppInner />
    </HashRouter>
  );
}
