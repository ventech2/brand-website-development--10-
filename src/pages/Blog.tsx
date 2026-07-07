import { Link } from 'react-router-dom';
import { FadeIn, GoldBadge, PageHero } from '../components/UI';
import { loadInsightPosts } from '../utils/posts';

export default function Blog() {
  const posts = loadInsightPosts();

  return (
    <div style={{ background: '#06000a' }}>
      <PageHero tag="Insights" title="From the Studio" subtitle="Latest updates, design stories, and handmade inspiration." image="/images/yarn-materials.jpg" />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <FadeIn className="mb-20 text-center">
            <GoldBadge text="Blog" />
            <h2 className="font-serif text-white text-5xl">Beccaknotery Journal</h2>
            <p className="text-white/40 max-w-2xl mx-auto mt-5">Read about our latest designs, brand updates, and creative process. New stories are added regularly.</p>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-3">
            {posts.map(post => (
              <FadeIn key={post.slug} className="rounded-3xl overflow-hidden border border-white/10 bg-[#0d0018] shadow-2xl">
                <img src={post.cover} alt={post.title} className="w-full h-64 object-cover" />
                <div className="p-8">
                  <p className="text-[#f0d080] uppercase tracking-[0.25em] text-[10px] mb-4">{post.category}</p>
                  <h3 className="font-serif text-2xl text-white mb-4">{post.title}</h3>
                  <p className="text-white/50 leading-relaxed mb-6">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-[#f0d080] hover:text-white transition-colors">
                    Read More →
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
