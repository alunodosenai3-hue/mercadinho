/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import UrgencyOffer from './components/UrgencyOffer';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050a06] text-white font-sans overflow-x-hidden antialiased selection:bg-primary selection:text-[#050a06]">
      {/* Premium Floating Header */}
      <Header />

      {/* Main Core View Modules */}
      <main>
        {/* Hero Display Section */}
        <Hero />

        {/* Benefits & Guaranteed Quality Features */}
        <Features />

        {/* Portfolio / Visual Fresh Gallery */}
        <Portfolio />

        {/* Real-time 15:00 min Countdown Discount Urgency Section */}
        <UrgencyOffer />

        {/* Testimonials with Google Reviews Verification Seal */}
        <Reviews />

        {/* Accordion FAQ with 10 Objections Resolved */}
        <FAQ />
      </main>

      {/* Brand Operational Contact Footer */}
      <Footer />
    </div>
  );
}

