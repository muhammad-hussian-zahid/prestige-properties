'use client';

import { Agent } from '../lib/types';
import Link from 'next/link';

export default function AgentCard({ agent }: { agent: Agent }) {
  return (
    <Link
      href={`/agents/${agent.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img src={agent.photo} alt={agent.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" />
      </div>
      <div className="p-5 text-center">
        <h3 className="font-heading text-navy font-semibold text-lg">{agent.name}</h3>
        <p className="text-xs text-slate/70 mt-1">{agent.title}</p>
        <div className="flex items-center justify-center gap-1 mt-2">
          <span className="text-amber-400">★</span>
          <span className="text-sm text-navy/70">{agent.rating}</span>
          <span className="text-xs text-slate/50">({agent.reviews.length} reviews)</span>
        </div>
        <div className="mt-2 text-xs text-slate/60">{agent.propertiesCount} properties</div>
      </div>
    </Link>
  );
}