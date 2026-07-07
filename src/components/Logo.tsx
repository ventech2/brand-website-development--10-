import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | false | null)[]) {
  return twMerge(clsx(inputs));
}

export const Logo = ({ className, small = false }: { className?: string; small?: boolean }) => (
  <div className={cn('flex items-center gap-3 select-none', className)}>
    <svg viewBox="0 0 90 90" className={cn('flex-shrink-0', small ? 'w-9 h-9' : 'w-12 h-12')} fill="none">
      <defs>
        <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9a84c" />
          <stop offset="40%" stopColor="#f0d080" />
          <stop offset="70%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#9a6e1a" />
        </linearGradient>
        <linearGradient id="lg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3a0647" />
          <stop offset="100%" stopColor="#1e0228" />
        </linearGradient>
        <linearGradient id="lg3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0d080" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#f0d080" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="86" height="86" rx="10" fill="url(#lg2)" />
      <rect x="4.5" y="4.5" width="81" height="81" rx="8" fill="none" stroke="url(#lg1)" strokeWidth="0.8" />
      {/* B */}
      <rect x="16" y="18" width="6" height="54" rx="1" fill="url(#lg1)" />
      <path d="M22 18 H38 Q50 18 50 30 Q50 42 38 42 H22 Z" fill="url(#lg1)" />
      <path d="M22 42 H40 Q54 42 54 56 Q54 72 40 72 H22 Z" fill="url(#lg1)" />
      <path d="M24 21 H37 Q46 21 46 30 Q46 39 37 39 H24 Z" fill="url(#lg2)" />
      <path d="M24 45 H39 Q50 45 50 56 Q50 68 39 68 H24 Z" fill="url(#lg2)" />
      {/* K */}
      <rect x="60" y="18" width="6" height="54" rx="1" fill="url(#lg1)" />
      <polygon points="66,42 66,18 78,18 66,45" fill="url(#lg1)" />
      <polygon points="66,48 66,72 78,72 66,45" fill="url(#lg1)" />
      <line x1="45" y1="22" x2="45" y2="68" stroke="url(#lg3)" strokeWidth="0.5" strokeDasharray="2 3" />
    </svg>
    <div className="flex flex-col leading-none">
      <span
        className="font-serif uppercase"
        style={{
          fontSize: small ? '0.9rem' : '1.15rem',
          fontWeight: 600,
          letterSpacing: '0.22em',
          background: 'linear-gradient(90deg,#c9a84c 0%,#f0d080 40%,#c9a84c 70%,#9a6e1a 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Beccaknotery
      </span>
      <span className="italic mt-0.5" style={{ fontSize: '0.48rem', letterSpacing: '0.14em', color: '#b08a3a' }}>
        Weaving Dreams, One Stitch At A Time.
      </span>
    </div>
  </div>
);
