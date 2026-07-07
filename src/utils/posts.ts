import INSIGHT_POSTS from '../data/insightPosts.json';

export const STORAGE_KEY = 'beccak_insight_posts';
export type InsightPost = (typeof INSIGHT_POSTS)[number];

export function loadInsightPosts(): typeof INSIGHT_POSTS {
  if (typeof window === 'undefined') {
    return INSIGHT_POSTS;
  }

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved ? (JSON.parse(saved) as typeof INSIGHT_POSTS) : INSIGHT_POSTS;
  } catch {
    return INSIGHT_POSTS;
  }
}

export function saveInsightPosts(posts: typeof INSIGHT_POSTS) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  } catch {
    // ignore localStorage errors
  }
}
