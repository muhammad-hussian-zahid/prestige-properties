'use client';

import { useState, useEffect } from 'react';
import { properties as allProperties, cities } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';
import { Property } from '@/lib/types';

export default function ListingsPage() {
  const [filters, setFilters] = useState({ type: '', listingType: '', location: '', priceMin: '', priceMax: '', bedrooms: '', sort: 'newest' });
  const [page, setPage] = useState(1);
  const perPage = 12;

  function clearFilters() {
    setFilters({ type: '', listingType: '', location: '', priceMin: '', priceMax: '', bedrooms: '', sort: 'newest' });
    setPage(1);
  }

  const filtered = allProperties.filter((p) => {
    if (filters.type && p.type !== filters.type) return false;
    if (filters.listingType && p.listingType !== filters.listingType) return false;
    if (filters.location && !p.city.toLowerCase().includes(filters.location.toLowerCase()) && !p.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.priceMin && p.price < Number(filters.priceMin)) return false;
    if (filters.priceMax && p.price > Number(filters.priceMax)) return false;
    if (filters.bedrooms && p.bedrooms < Number(filters.bedrooms)) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (filters.sort === 'price-asc') return a.price - b.price;
    if (filters.sort === 'price-desc') return b.price - a.price;
    return b.id - a.id;
  });

  const paginated = sorted.slice(0, page * perPage);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Properties</span>
        <h1 className="text-3xl font-heading font-bold text-navy mt-2">Discover Your Dream Property</h1>
      </div>

      {/* Search Panel */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-slate/10">
        <div className="grid md:grid-cols-7 gap-3 items-end">
          <select value={filters.type} onChange={(e) => setFilters({ ...filters, type: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-slate/20 text-sm">
            <option value="">All Types</option>
            <option value="Apartment">Apartment</option>
            <option value="House">House</option>
            <option value="Villa">Villa</option>
            <option value="Land">Land</option>
            <option value="Commercial">Commercial</option>
          </select>
          <select value={filters.listingType} onChange={(e) => setFilters({ ...filters, listingType: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-slate/20 text-sm">
            <option value="">All Listings</option>
            <option value="Buy">Buy</option>
            <option value="Rent">Rent</option>
            <option value="Shortlet">Shortlet</option>
          </select>
          <input value={filters.location} onChange={(e) => setFilters({ ...filters, location: e.target.value })} placeholder="Location" className="w-full px-3 py-2 rounded-lg border border-slate/20 text-sm" />
          <input value={filters.priceMin} onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })} placeholder="Min price" type="number" className="w-full px-3 py-2 rounded-lg border border-slate/20 text-sm" />
          <input value={filters.priceMax} onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })} placeholder="Max price" type="number" className="w-full px-3 py-2 rounded-lg border border-slate/20 text-sm" />
          <select value={filters.bedrooms} onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })} className="w-full px-3 py-2 rounded-lg border border-slate/20 text-sm">
            <option value="">Bedrooms</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
          </select>
          <button onClick={clearFilters} className="bg-slate/10 text-slate px-4 py-2 rounded-lg text-sm hover:bg-slate/20 transition">Clear</button>
        </div>
      </div>

      {/* Sort + Count */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-slate">{sorted.length} properties found</p>
        <select value={filters.sort} onChange={(e) => setFilters({ ...filters, sort: e.target.value })} className="px-3 py-2 rounded-lg border border-slate/20 text-sm">
          <option value="newest">Newest First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate text-lg">No properties match your filters.</p>
          <button onClick={clearFilters} className="text-gold underline mt-2 text-sm">Clear all filters</button>
        </div>
      )}

      {paginated.length < sorted.length && (
        <div className="text-center mt-8">
          <button onClick={() => setPage(page + 1)} className="bg-gold text-navy px-8 py-3 rounded-full font-semibold hover:bg-gold/90 transition">
            Load More ({sorted.length - paginated.length} remaining)
          </button>
        </div>
      )}
    </div>
  );
}