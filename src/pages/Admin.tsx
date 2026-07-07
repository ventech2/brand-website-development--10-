import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FadeIn, GoldBadge, PageHero } from '../components/UI';
import INSIGHT_POSTS from '../data/insightPosts.json';

const DEFAULT_POST = {
  slug: '',
  category: '',
  title: '',
  excerpt: '',
  cover: '/images/yarn-materials.jpg',
  date: '',
  content: '',
};

const ADMIN_SECRET = import.meta.env.VITE_ADMIN_SECRET || 'stitch-admin';
const STORAGE_KEY = 'beccak_insight_posts';

export default function Admin() {
  const [searchParams] = useSearchParams();
  const [posts, setPosts] = useState(() => {
    if (typeof window === 'undefined') return INSIGHT_POSTS;
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) as typeof INSIGHT_POSTS : INSIGHT_POSTS;
    } catch {
      return INSIGHT_POSTS;
    }
  });
  const [selectedSlug, setSelectedSlug] = useState(posts[0]?.slug || '');
  const [draft, setDraft] = useState(() => posts[0] || DEFAULT_POST);
  const [accessCode, setAccessCode] = useState('');
  const [accessGranted, setAccessGranted] = useState(false);
  const [error, setError] = useState('');
  const [saveMessage, setSaveMessage] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!accessGranted && searchParams.get('secret') === ADMIN_SECRET) {
        setAccessGranted(true);
      } else {
        setAccessGranted(sessionStorage.getItem('beccak_admin_granted') === '1');
      }
    }
  }, [accessGranted, searchParams]);

  useEffect(() => {
    if (accessGranted && typeof window !== 'undefined') {
      sessionStorage.setItem('beccak_admin_granted', '1');
    }
  }, [accessGranted]);

  const handleSelect = (slug: string) => {
    setSelectedSlug(slug);
    setDraft(posts.find(post => post.slug === slug) || DEFAULT_POST);
  };

  const persistToLocalStorage = (value: typeof INSIGHT_POSTS) => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    } catch {
      // ignore storage errors
    }
  };

  const saveDraft = () => {
    const updated = posts.map(post => post.slug === selectedSlug ? draft : post);
    setPosts(updated);
    persistToLocalStorage(updated);
    if (draft.slug !== selectedSlug) {
      setSelectedSlug(draft.slug);
    }
    setSaveMessage('Draft updated and saved to local storage.');
    window.setTimeout(() => setSaveMessage(''), 3000);
  };

  const exportData = () => {
    const blob = new Blob([JSON.stringify(posts, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'insightPosts.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importData = async (file: File) => {
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      if (!Array.isArray(parsed) || parsed.some(item => typeof item.slug !== 'string')) {
        throw new Error('Invalid format');
      }
      setPosts(parsed);
      persistToLocalStorage(parsed);
      const first = parsed[0] || DEFAULT_POST;
      setSelectedSlug(first.slug || '');
      setDraft(first);
      setError('');
      setSaveMessage('Imported JSON successfully.');
      window.setTimeout(() => setSaveMessage(''), 3000);
    } catch {
      setError('Unable to import file. Please use a valid insightPosts JSON export.');
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await importData(file);
      event.target.value = '';
    }
  };

  const resetToDefault = () => {
    if (typeof window !== 'undefined' && !window.confirm('Reset all posts to the default content? This will overwrite local changes.')) {
      return;
    }

    setPosts(INSIGHT_POSTS);
    persistToLocalStorage(INSIGHT_POSTS);
    const first = INSIGHT_POSTS[0] || DEFAULT_POST;
    setSelectedSlug(first.slug || '');
    setDraft(first);
    setError('');
    setSaveMessage('Blog posts reset to default content.');
    window.setTimeout(() => setSaveMessage(''), 3000);
  };

  const updateDraft = (field: string, value: string) => {
    setDraft(prev => ({ ...prev, [field]: value }));
  };

  const handleAccess = () => {
    if (accessCode.trim() === ADMIN_SECRET) {
      setError('');
      setAccessGranted(true);
    } else {
      setError('Invalid access code.');
      setAccessGranted(false);
    }
  };

  if (!accessGranted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#06000a' }}>
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0d0018] p-10 shadow-[0_0_80px_rgba(0,0,0,0.35)]">
          <h1 className="text-3xl font-semibold text-white mb-4">Admin Access</h1>
          <p className="text-white/60 mb-8">Enter the admin code to access the blog editor.</p>

          <label className="block text-sm text-white/60 mb-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#f0d080]">Access Code</span>
            <input
              value={accessCode}
              onChange={e => setAccessCode(e.target.value)}
              type="password"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-[#02020a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
              placeholder="Enter secret code"
            />
          </label>

          {error && <p className="text-sm text-[#f06666] mb-4">{error}</p>}

          <button onClick={handleAccess}
            className="w-full rounded-full bg-[#c9a84c] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1e0228] transition hover:brightness-110">
            Unlock Admin
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: '#06000a' }}>
      <PageHero tag="Admin" title="Blog Admin" subtitle="Edit and preview blog posts from one place." image="/images/yarn-materials.jpg" />

      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-[280px_1fr] gap-10">
          <FadeIn>
            <div className="space-y-4">
              <GoldBadge text="Posts" />
              <div className="rounded-3xl border border-white/10 bg-[#0d0018] p-6 space-y-3">
                {posts.map(post => (
                  <button key={post.slug}
                    onClick={() => handleSelect(post.slug)}
                    className={`block w-full text-left p-4 rounded-2xl transition ${selectedSlug === post.slug ? 'bg-[#1d0e37] border border-[#c9a84c]/20' : 'hover:bg-white/5'}`}
                    style={{ color: '#fff' }}>
                    <div className="font-semibold">{post.title}</div>
                    <div className="text-xs text-white/40">{post.category}</div>
                  </button>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-[#0d0018] p-8 space-y-6">
              <div className="grid gap-4">
                {['slug', 'category', 'title', 'excerpt', 'cover', 'date'].map(field => (
                  <label key={field} className="block text-white/60 text-sm">
                    <div className="mb-2 uppercase tracking-[0.2em] text-[10px] text-[#f0d080]">{field}</div>
                    <input
                      type="text"
                      value={(draft as any)[field]}
                      onChange={e => updateDraft(field, e.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-[#02020a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                    />
                  </label>
                ))}
                <label className="block text-white/60 text-sm">
                  <div className="mb-2 uppercase tracking-[0.2em] text-[10px] text-[#f0d080]">content</div>
                  <textarea
                    value={draft.content}
                    onChange={e => updateDraft('content', e.target.value)}
                    className="w-full min-h-[220px] rounded-2xl border border-white/10 bg-[#02020a] px-4 py-3 text-white outline-none focus:border-[#c9a84c]"
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <button onClick={saveDraft}
                  className="inline-flex items-center justify-center rounded-full bg-[#c9a84c] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#1e0228] transition hover:brightness-110">
                  Save Draft
                </button>
                <button onClick={exportData}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5">
                  Export JSON
                </button>
                <button onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white/5">
                  Import JSON
                </button>
                <button onClick={resetToDefault}
                  className="inline-flex items-center justify-center rounded-full border border-[#f06666] bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#f06666] transition hover:bg-[#f06666]/10">
                  Reset Default
                </button>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                className="hidden"
                onChange={handleFileChange}
              />

              {saveMessage && <p className="text-sm text-[#c9a84c] mt-2">{saveMessage}</p>}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
