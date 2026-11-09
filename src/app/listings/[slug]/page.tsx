'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getPropertyBySlug, getPropertiesByAgentId, properties } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';

// Simple agent slug lookup for the detail page
function findAgentForProperty(propertySlug: string) {
  const p = getPropertyBySlug(propertySlug);
  if (!p) return undefined;
  // Map agent IDs to slugs
  const agentSlugs: Record<number, string> = { 1: 'sarah-oyelowo', 2: 'james-okoro', 3: 'amina-hassan' };
  return agentSlugs[p.agentId];
}

export default function PropertyDetailPage() {
  const params = useParams<{ slug: string }>();
  const property = getPropertyBySlug(params?.slug || '');

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-heading font-bold text-navy">Property Not Found</h1>
        <Link href="/listings" className="text-gold underline mt-4 inline-block">Back to listings</Link>
      </div>
    );
  }

  const similar = properties.filter((p) => p.city === property.city && p.id !== property.id).slice(0, 3);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Gallery */}
      <section className="grid grid-cols-2 gap-2 mb-8 rounded-xl overflow-hidden">
        <div className="row-span-2 col-span-1">
          <img src={property.images[0]} alt={property.title} className="w-full h-full object-cover cursor-pointer" onClick={() => { setGalleryIndex(0); setGalleryOpen(true); }} />
        </div>
        {property.images.slice(1, 5).map((img, i) => (
          <img key={i} src={img} alt={`${property.title} ${i + 2}`} className="w-full h-full object-cover cursor-pointer" onClick={() => { setGalleryIndex(i + 1); setGalleryOpen(true); }} loading="lazy" />
        ))}
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-2 mb-2">
            <span className="bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-semibold">{property.status}</span>
            <span className="bg-navy/5 text-navy/70 px-3 py-1 rounded-full text-xs">{property.type}</span>
          </div>
          <h1 className="font-heading text-3xl font-bold text-navy">{property.title}</h1>
          <p className="text-slate/60 text-sm mt-1">📍 {property.location}</p>
          <p className="text-gold text-3xl font-bold mt-4">{property.currency === 'GBP' ? '£' : property.currency === 'USD' ? '$' : '$'}{property.price.toLocaleString()}</p>

          {/* Key Details */}
          <div className="flex gap-4 mt-4 p-4 bg-navy/5 rounded-xl">
            {property.bedrooms > 0 && <div className="text-center"><div className="text-2xl">{property.bedrooms}</div><div className="text-xs text-slate">Bedrooms</div></div>}
            {property.bathrooms > 0 && <div className="text-center"><div className="text-2xl">{property.bathrooms}</div><div className="text-xs text-slate">Bathrooms</div></div>}
            {property.sqft > 0 && <div className="text-center"><div className="text-2xl">{property.sqft.toLocaleString()}</div><div className="text-xs text-slate">Sq. Ft.</div></div>}
          </div>

          {/* Description */}
          <h2 className="text-xl font-heading font-bold text-navy mt-6">Description</h2>
          <p className="text-slate mt-2 leading-relaxed">{property.description}</p>

          {/* Amenities */}
          <h2 className="text-xl font-heading font-bold text-navy mt-6">Amenities</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {property.amenities.map((a) => (
              <span key={a} className="bg-gold/10 text-gold/80 px-4 py-1.5 rounded-full text-xs font-semibold">✓ {a}</span>
            ))}
          </div>

          {/* Similar */}
          {similar.length > 0 && (
            <>
              <h2 className="text-xl font-heading font-bold text-navy mt-6">Similar Properties</h2>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                {similar.map((p) => <PropertyCard key={p.id} property={p} />)}
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Agent Card - simple */}
          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-4">
            <div className="w-20 h-20 rounded-full mx-auto overflow-hidden mb-3 bg-navy/10 flex items-center justify-center text-3xl">👤</div>
            <h3 className="font-heading text-navy font-bold text-center">Dedicated Agent</h3>
            <p className="text-xs text-slate/70 text-center">Your personal property specialist</p>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="/contact" className="bg-gold text-navy w-full py-3 rounded-full font-semibold hover:bg-gold/90 transition text-sm text-center">
                Contact Agent
              </Link>
              <Link href="/contact" className="border border-navy/20 text-navy w-full py-3 rounded-full hover:bg-navy/5 transition text-sm text-center">
                Schedule Tour
              </Link>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-4 bg-white rounded-xl p-4 shadow-sm">
            <button className="w-full text-navy text-sm py-2 hover:bg-navy/5 rounded-lg transition">❤️ Save Property</button>
            <button className="w-full text-navy text-sm py-2 mt-1 hover:bg-navy/5 rounded-lg transition">📤 Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}