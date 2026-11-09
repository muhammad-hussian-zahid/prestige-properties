'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <span className="text-gold text-xs uppercase tracking-[0.2em] font-semibold">Get in Touch</span>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-navy mt-2">Let&apos;s Find Your<br />Dream Property</h1>
        <p className="text-slate mt-4 max-w-2xl mx-auto text-lg">
          Whether you&apos;re buying, selling, or investing, our team is here to help.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {sent ? (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">✉️</div>
              <h2 className="text-2xl font-heading font-bold text-navy">Thank You!</h2>
              <p className="text-slate mt-2">We&apos;ll be in touch within 24 hours.</p>
              <button onClick={() => setSent(false)} className="text-gold underline mt-4 text-sm">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input required placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-slate/20 text-sm" />
                <input required type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg border border-slate/20 text-sm" />
              </div>
              <input required type="tel" placeholder="Your Phone" className="w-full px-4 py-3 rounded-lg border border-slate/20 text-sm" />
              <select required className="w-full px-4 py-3 rounded-lg border border-slate/20 text-sm">
                <option value="">Inquiry Type</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
                <option value="sell">Sell</option>
                <option value="partnership">Partnership</option>
              </select>
              <textarea required placeholder="Your Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate/20 text-sm" />
              <button type="submit" className="bg-gold text-navy w-full py-3 rounded-full font-semibold hover:bg-gold/90 transition">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Offices */}
        <div className="space-y-4">
          {[
            { city: 'Lagos', addr: '42 Ikoyi Road, Ikoyi, Lagos', phone: '+234 802 345 6789', email: 'lagos@prestigeproperties.com' },
            { city: 'Abuja', addr: '15 Asokoro Crescent, Abuja', phone: '+234 809 876 5432', email: 'abuja@prestigeproperties.com' },
            { city: 'Dubai', addr: 'Palm Jumeirah Crescent, Dubai', phone: '+971 55 123 4567', email: 'dubai@prestigeproperties.com' },
            { city: 'London', addr: '45 Berkeley Square, Mayfair', phone: '+44 20 7123 4567', email: 'london@prestigeproperties.com' },
          ].map((office) => (
            <div key={office.city} className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-heading text-lg font-bold text-navy">{office.city} Office</h3>
              <p className="text-slate text-sm mt-2">📍 {office.addr}</p>
              <p className="text-slate text-sm mt-1">📞 {office.phone}</p>
              <p className="text-slate text-sm mt-1">✉️ {office.email}</p>
            </div>
          ))}

          {/* Social */}
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <h3 className="font-heading text-lg font-bold text-navy">Follow Us</h3>
            <div className="flex flex-wrap gap-2 mt-3">
              {['Instagram', 'Facebook', 'LinkedIn', 'YouTube'].map((s) => (
                <span key={s} className="bg-navy/5 text-navy/60 px-4 py-1.5 rounded-full text-xs font-semibold">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}