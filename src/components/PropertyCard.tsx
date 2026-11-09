'use client';

import { Property } from '../lib/types';
import { formatPrice } from '../lib/data';
import Link from 'next/link';

export default function PropertyCard({ property }: { property: Property }) {
  const bed = property.bedrooms > 0 ? `${property.bedrooms} bed` : '';
  const bath = property.bathrooms > 0 ? `${property.bathrooms} bath` : '';
  const sq = property.sqft > 0 ? `${property.sqft.toLocaleString()} sqft` : '';

  return (
    <Link
      href={`/listings/${property.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-navy/80 text-warm-white text-xs px-3 py-1 rounded-full font-semibold">
          {property.status}
        </span>
        <span className="absolute top-3 right-3 bg-white/90 text-navy text-xs px-3 py-1 rounded-full">
          {property.type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-heading text-navy font-bold text-lg">{property.title}</h3>
        <p className="text-slate text-xs flex items-center gap-1 mb-2">
          <span>📍</span> {property.location}
        </p>
        <div className="text-gold font-bold text-xl">{formatPrice(property.price, property.currency)}</div>
        {bed || bath || sq ? (
          <div className="flex gap-2 mt-2 text-xs text-slate">
            {bed && <span className="bg-navy/5 px-2 py-1 rounded">{bed}</span>}
            {bath && <span className="bg-navy/5 px-2 py-1 rounded">{bath}</span>}
            {sq && <span className="bg-navy/5 px-2 py-1 rounded">{sq}</span>}
          </div>
        ) : null}
      </div>
    </Link>
  );
}