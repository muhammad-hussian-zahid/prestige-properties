import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy text-warm-white/70 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-gold font-heading text-lg font-bold mb-4">Prestige Properties</h4>
            <p className="text-sm">Africa&apos;s premier luxury real estate agency, connecting you with exceptional properties worldwide.</p>
          </div>
          <div>
            <h5 className="font-semibold text-warm-white/90 mb-3 text-sm uppercase tracking-wider">Quick Links</h5>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/listings" className="hover:text-gold transition">Properties</Link>
              <Link href="/agents" className="hover:text-gold transition">Agents</Link>
              <Link href="/about" className="hover:text-gold transition">About Us</Link>
              <Link href="/contact" className="hover:text-gold transition">Contact</Link>
            </nav>
          </div>
          <div>
            <h5 className="font-semibold text-warm-white/90 mb-3 text-sm uppercase tracking-wider">Cities</h5>
            <nav className="flex flex-col gap-2 text-sm">
              <Link href="/listings?city=Lagos" className="hover:text-gold transition">Lagos</Link>
              <Link href="/listings?city=Abuja" className="hover:text-gold transition">Abuja</Link>
              <Link href="/listings?city=Dubai" className="hover:text-gold transition">Dubai</Link>
              <Link href="/listings?city=London" className="hover:text-gold transition">London</Link>
            </nav>
          </div>
          <div>
            <h5 className="font-semibold text-warm-white/90 mb-3 text-sm uppercase tracking-wider">Contact</h5>
            <p className="text-sm">info@prestigeproperties.com</p>
            <p className="text-sm mt-1">+234 800 PRESTIGE</p>
            <p className="text-sm mt-1">42 Ikoyi Road, Lagos</p>
          </div>
        </div>
        <div className="border-t border-gold/20 mt-8 pt-6 text-center text-sm text-warm-white/50">
          &copy; 2026 Prestige Properties. All rights reserved.
        </div>
      </div>
    </footer>
  );
}