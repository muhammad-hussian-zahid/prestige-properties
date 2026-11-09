'use client';

import { useState } from 'react';
import AgentCard from '../../components/AgentCard';
import { agents } from '../../lib/data';

export default function AgentsPage() {
  const [search, setSearch] = useState('');

  const filtered = agents.filter((a) =>
    !search ||
    a.name.toLowerCase().includes(search.toLowerCase()) ||
    a.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Our Team</span>
        <h1 className="text-3xl font-heading font-bold text-navy mt-2">Meet Our Expert Agents</h1>
        <p className="text-slate mt-3 max-w-2xl mx-auto">
          Our team of dedicated professionals brings decades of combined experience in luxury real estate across Africa and international markets.
        </p>
      </div>

      <div className="max-w-md mx-auto mb-8">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or specialization..."
          className="w-full px-4 py-3 rounded-full border border-slate/20 text-sm"
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((a) => (
          <AgentCard key={a.id} agent={a} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate text-lg">No agents match your search.</p>
        </div>
      )}
    </div>
  );
}