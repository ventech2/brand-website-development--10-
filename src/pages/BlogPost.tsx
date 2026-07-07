import { useParams, Link } from 'react-router-dom';
import { FadeIn, GoldBadge, PageHero } from '../components/UI';
import { loadInsightPosts } from '../utils/posts';

export default function BlogPost() {
  const { slug } = useParams();
  const posts = loadInsightPosts();
  const post = posts.find(item => item.slug === slug);

  if (!post) {
    return (
      <div style={{ background: '#06000a' }}>
        <PageHero tag="Blog" title="Post Not Found" subtitle="The article you are looking for does not exist." />
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <p className="text-white/50 mb-8">Try another story from our blog.</p>
            <Link to="/blog" className="inline-block px-8 py-4 rounded-full bg-[#c9a84c] text-[#1e0228] uppercase tracking-[0.25em] font-bold">Back to Blog</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div style={{ background: '#06000a' }}>
      <PageHero tag={post.category} title={post.title} subtitle={post.excerpt} image={post.cover} />

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-4xl text-white">
          <FadeIn>
            <div className="mb-10 text-sm uppercase tracking-[0.25em] text-[#f0d080]">{post.date}</div>
            <p className="text-white/70 leading-relaxed text-lg" style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
          </FadeIn>
          <div className="mt-16">
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#f0d080] uppercase tracking-[0.25em] font-bold">← Back to Blog</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
