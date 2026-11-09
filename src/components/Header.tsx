'use client';

import Link from 'next/link';
import { useAppStore } from '@/lib/store';

const links = [
  { href: '/', label: 'Home' },
  { href: '/listings', label: 'Properties' },
  { href: '/agents', label: 'Agents' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const store = useAppStore();

  return (
    <header className="bg-navy text-warm-white/90">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-gold text-2xl font-heading font-bold tracking-wide">Prestige</span>
            <span className="text-xs text-warm-white/50 uppercase tracking-[0.3em]">Properties</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-warm-white/70 hover:text-gold transition-colors">
                {l.label}
              </Link>
            ))}
            <Link href="/listings" className="bg-gold text-navy px-5 py-2 rounded-full text-sm font-semibold hover:bg-gold/90 transition">
              Browse Properties
            </Link>
          </nav>
          <button onClick={() => store.toggleMobileMenu()} className="lg:hidden p-2" aria-label="Menu">
            <span className="block w-6 h-0.5 bg-warm-white/80 rounded mb-1" />
            <span className="block w-6 h-0.5 bg-warm-white/80 rounded mb-1" />
            <span className="block w-6 h-0.5 bg-warm-white/80 rounded" />
          </button>
        </div>
        {store.mobileMenuOpen && (
          <div className="lg:hidden bg-navy/95 border-t border-gold/30 pb-4">
            <nav className="flex flex-col gap-2 px-4">
              {links.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => store.closeMobileMenu()} className="text-warm-white/80 hover:text-gold py-2 text-sm">
                  {l.label}
                </Link>
              ))}
              <Link href="/listings" onClick={() => store.closeMobileMenu()} className="bg-gold text-navy text-center py-2 rounded-full text-sm font-semibold mt-2">
                Browse Properties
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}