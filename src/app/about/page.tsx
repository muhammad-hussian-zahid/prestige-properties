'use client';

import Link from 'next/link';
import { agents, properties } from '../lib/data';

export default function AboutPage() {
  const totalSold = properties.filter((p) => p.status === 'Sold').length;
  const uniqueCities = [...new Set(properties.map((p) => p.city))];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">About Us</span>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-navy mt-2">Africa&apos;s Most Trusted<br />Real Estate Agency</h1>
        <p className="text-slate mt-4 max-w-2xl mx-auto text-lg">
          Since 2019, Prestige Properties has been connecting discerning buyers with exceptional properties across Africa&apos;s most desirable locations and beyond.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-navy text-warm-white rounded-2xl p-8 mb-12">
        {[
          { num: properties.length, label: 'Active Listings' },
          { num: totalSold, label: 'Properties Sold' },
          { num: uniqueCities.length, label: 'Cities' },
          { num: agents.length, label: 'Expert Agents' },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-heading font-bold text-gold">{s.num}+</div>
            <p className="text-sm text-warm-white/80">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-heading font-bold text-navy">Our Story</h2>
          <div className="mt-4 space-y-3 text-slate">
            <p>Prestige Properties was born from a simple vision: to bring world-class real estate services to Africa&apos;s growing luxury property market.</p>
            <p>Founded in 2019 by a team of seasoned real estate professionals, we have grown from a boutique Lagos agency to a pan-African powerhouse with offices in Abuja, Dubai, and London.</p>
            <p>Today, we are proud to be the partner of choice for high-net-worth individuals, corporate executives, and international investors seeking premium properties across the continent and beyond.</p>
          </div>
        </div>
        <div className="bg-navy/5 rounded-2xl p-8">
          <h3 className="font-heading text-xl font-bold text-navy">Mission</h3>
          <p className="text-slate mt-2">To provide an unparalleled real estate experience through integrity, expertise, and a deep understanding of luxury markets.</p>
          <h3 className="font-heading text-xl font-bold text-navy mt-6">Vision</h3>
          <p className="text-slate mt-2">To be Africa&apos;s most respected real estate brand, setting the standard for excellence in property transactions.</p>
        </div>
      </div>

      {/* Team Overview */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-navy">Leadership Team</h2>
        <p className="text-slate mt-2">Meet the experts behind our success.</p>
        <Link href="/agents" className="text-gold font-semibold underline mt-4 inline-block hover:no-underline">
          View Full Team →
        </Link>
      </div>

      {/* Awards */}
      <div className="bg-navy/5 rounded-2xl p-8 text-center mb-8">
        <h2 className="text-2xl font-heading font-bold text-navy">Awards & Recognition</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-navy/60 font-bold text-sm">
          <span>🏆 Best Luxury Agency 2022</span>
          <span>🏆 Africa Property Awards 2023</span>
          <span>🏆 Top Brokerage Lagos 2024</span>
        </div>
      </div>
    </div>
  );
}