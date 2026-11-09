'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getAgentBySlug, getPropertiesByAgentId, formatPrice } from '@/lib/data';
import PropertyCard from '@/components/PropertyCard';

export default function AgentDetailPage() {
  const params = useParams<{ slug: string }>();
  const agent = getAgentBySlug(params?.slug || '');

  if (!agent) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-heading font-bold text-navy">Agent Not Found</h1>
        <Link href="/agents" className="text-gold underline mt-4 inline-block">Back to agents</Link>
      </div>
    );
  }

  const listings = getPropertiesByAgentId(agent.id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Link href="/agents" className="text-sm text-slate hover:text-gold transition">&larr; Back to agents</Link>

      <div className="grid lg:grid-cols-3 gap-8 mt-6">
        {/* Profile */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="aspect-square overflow-hidden">
              <img src={agent.photo} alt={agent.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 text-center">
              <h1 className="font-heading text-2xl font-bold text-navy">{agent.name}</h1>
              <p className="text-slate/70 text-sm">{agent.title}</p>
              <div className="flex items-center justify-center gap-1 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={star <= Math.round(agent.rating) ? 'text-amber-400' : 'text-slate/30'}>★</span>
                ))}
                <span className="text-sm text-navy/70 ml-1">{agent.rating}</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-left">
                <p className="text-slate"><strong>Specialization:</strong> {agent.specialization}</p>
                <p className="text-slate"><strong>Properties:</strong> {agent.propertiesCount}</p>
                <p className="text-slate"><strong>Languages:</strong> {agent.languages.join(', ')}</p>
                <p className="text-slate"><strong>Phone:</strong> {agent.phone}</p>
                <p className="text-slate"><strong>Email:</strong> {agent.email}</p>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <Link href={`mailto:${agent.email}`} className="bg-gold text-navy w-full py-3 rounded-full font-semibold hover:bg-gold/90 transition text-sm text-center">
                  Contact Agent
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bio + Listings */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-heading font-bold text-navy">About {agent.name.split(' ')[0]}</h2>
          <p className="text-slate mt-2 leading-relaxed">{agent.bio}</p>

          {/* Reviews */}
          <h2 className="text-xl font-heading font-bold text-navy mt-6">Client Reviews</h2>
          <div className="space-y-3 mt-2">
            {agent.reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm border-l-4 border-gold/50">
                <p className="text-slate text-sm">&ldquo;{r.text}&rdquo;</p>
                <p className="text-navy font-semibold text-xs mt-2">— {r.name}</p>
              </div>
            ))}
          </div>

          {/* Current Listings */}
          <h2 className="text-xl font-heading font-bold text-navy mt-6">Current Listings ({listings.length})</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-2">
            {listings.map((p) => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}