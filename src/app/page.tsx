'use client';

import { useState } from 'react';
import Link from 'next/link';
import { properties, agents, testimonials, formatPrice } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';
import AgentCard from '@/components/AgentCard';

const cities = [
  { name: 'Lagos', image: 'https://images.unsplash.com/photo-1595796790000-5b7e9c9c9c9c?w=600', count: 4 },
  { name: 'Abuja', image: 'https://images.unsplash.com/photo-1595796790000-6b7e9c9c9c9c?w=600', count: 2 },
  { name: 'Dubai', image: 'https://images.unsplash.com/photo-1595796790000-7b7e9c9c9c9c?w=600', count: 1 },
  { name: 'London', image: 'https://images.unsplash.com/photo-1595796790000-8b7e9c9c9c9c?w=600', count: 1 },
];

export default function HomePage() {
  const featured = properties.filter((p) => p.featured).slice(0, 6);
  const spotlight = agents.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-warm-white min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-5567b28e9c3c?w=1920')] bg-cover bg-center opacity-40" />
        <div className="relative max-w-4xl mx-auto px-4 text-center py-20">
          <span className="text-gold text-xs uppercase tracking-[0.3em] font-semibold">Africa&apos;s Premier Real Estate Agency</span>
          <h1 className="text-4xl md:text-6xl font-heading font-bold mt-4 leading-tight">
            Discover Your <span className="text-gold">Dream Property</span>
          </h1>
          <p className="text-lg text-warm-white/80 mt-4 max-w-2xl mx-auto">
            Curated luxury properties in Africa&apos;s most desirable locations — Lagos, Abuja, Dubai, and London.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/listings" className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition text-lg">
              Explore Properties
            </Link>
            <Link href="/contact" className="border border-warm-white/40 text-warm-white px-8 py-3 rounded-full hover:bg-warm-white/10 transition text-lg">
              Schedule a Consultation
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['Buy', 'Rent', 'Shortlet', 'Commercial'].map((chip) => (
              <Link
                key={chip}
                href={`/listings?type=${chip.toLowerCase()}`}
                className="bg-warm-white/10 border border-warm-white/20 text-warm-white text-xs px-4 py-1.5 rounded-full hover:bg-gold/20 transition"
              >
                {chip}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Featured Listings</span>
          <h2 className="text-3xl font-heading font-bold text-navy mt-2">Exceptional Properties</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/listings" className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition">
            View All Properties
          </Link>
        </div>
      </section>

      {/* City Showcase */}
      <section className="bg-navy/5 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Locations</span>
            <h2 className="text-3xl font-heading font-bold text-navy mt-2">Explore by City</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {cities.map((c) => (
              <Link
                key={c.name}
                href={`/listings?city=${c.name}`}
                className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition"
              >
                <img src={c.image} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-warm-white">
                  <h3 className="font-heading text-lg font-bold">{c.name}</h3>
                  <p className="text-xs text-warm-white/70">{c.count} properties</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Why Prestige</span>
          <h2 className="text-3xl font-heading font-bold text-navy mt-2">The Prestige Advantage</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { icon: '🏠', title: '10,000+ Listings', desc: 'Curated selection of premium properties' },
            { icon: '✅', title: 'Verified Properties', desc: 'Every listing thoroughly vetted' },
            { icon: '👔', title: 'Expert Agents', desc: 'Industry professionals at your service' },
            { icon: '⭐', title: '100% Satisfaction', desc: 'Proven track record of excellence' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-heading text-navy font-bold text-lg">{item.title}</h3>
              <p className="text-slate text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Agent Spotlight */}
      <section className="bg-navy/5 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Our Team</span>
            <h2 className="text-3xl font-heading font-bold text-navy mt-2">Meet Your Agents</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {spotlight.map((a) => (
              <AgentCard key={a.id} agent={a} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/agents" className="text-gold font-semibold underline hover:no-underline transition text-lg">
              Meet the full team →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Testimonials</span>
          <h2 className="text-3xl font-heading font-bold text-navy mt-2">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.slice(0, 4).map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-slate text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-navy/10 text-xs flex items-center justify-center">{t.name[0]}</div>
                <div>
                  <p className="font-semibold text-navy text-sm">{t.name}</p>
                  <p className="text-xs text-slate/60">{t.propertyType}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy text-warm-white py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="grid grid-cols-4 gap-6">
            {[
              { num: '500+', label: 'Properties Sold' },
              { num: '200+', label: 'Happy Clients' },
              { num: '15+', label: 'Expert Agents' },
              { num: '5+', label: 'Years Experience' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-heading font-bold text-gold">{s.num}</div>
                <p className="text-sm text-warm-white/80 mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-3xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-heading font-bold text-navy">Stay Updated</h2>
        <p className="text-slate mt-3">Get notified when new listings match your criteria.</p>
        <form className="flex max-w-md mx-auto mt-6">
          <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-l-full border border-slate/30 text-sm" />
          <button type="submit" className="bg-gold text-navy px-6 py-3 rounded-r-full font-semibold text-sm hover:bg-gold/90 transition">
            Subscribe
          </button>
        </form>
      </section>

      {/* Partners */}
      <section className="bg-navy/5 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Trusted Partners</span>
          <div className="flex flex-wrap justify-center gap-8 mt-6 text-navy/40 font-bold text-lg">
            <span>First Bank</span>
            <span>Mortgage Corp</span>
            <span>DevCo Group</span>
            <span>PropertyInsure</span>
          </div>
        </div>
      </section>
    </>
  );
}