import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Prestige Properties — Luxury Real Estate',
    template: '%s — Prestige Properties',
  },
  description: "Africa's premier luxury real estate agency. Discover exceptional properties across Lagos, Abuja, Dubai, and London.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-warm-white text-navy font-body antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}