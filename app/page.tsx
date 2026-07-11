import { GlobeAltIcon, ShieldCheckIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import type { Metadata } from "next";
import Link from "next/link";
import galleryImages from "./assets/gallaryImage.json";
import FeatureCard from "./components/FeatureCard";
import Gallery from "./components/gallery";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Home",
  description: "Anand Global Foods exports premium Basmati Rice, Sugar, Spices, and Agri-Commodities to 100+ countries. Partner with us for trusted quality.",
};
export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative text-center min-h-[calc(100svh-60px)] -mx-[2.1%] flex items-center justify-center">
        <div className="absolute inset-0">
          <Gallery galleryImages={galleryImages} />
        </div>
        <div className="relative p-4 sm:p-6 md:p-8 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight">
            Every Grain, A Promise Kept
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-4xl mx-auto">
            Exporting Trust & Tradition To The World
          </p>
          <Link href="/pages/products" passHref>
            <button className="bg-secondary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg text-sm sm:text-base">
              Explore Our Products
            </button>
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-gray-100">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
              <GlobeAltIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Global Reach</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Delivering to 100+ countries with deep local expertise.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-gray-100">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors duration-300">
              <TrophyIcon className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">15+ Years Legacy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Cultivating and exporting excellence since day one.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-gray-100">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
              <ShieldCheckIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Certified Quality</h3>
            <p className="text-gray-600 text-sm leading-relaxed">100% traceable purity from the soil to the ship.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group border border-gray-100">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-secondary transition-colors duration-300">
              <UserGroupIcon className="w-7 h-7 text-secondary group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Partner of Choice</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Building trust with global distributors worldwide.</p>
          </div>
        </div>
      </section>

      {/* Why Buyers Choose AGF */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary -mx-[2.1%] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Our Strengths
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              Why Buyers Choose AGF
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Trusted by importers &amp; distributors across 100+ countries — here's what sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Global Export Experience */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 sm:p-7 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-secondary/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Global Export Experience
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                15+ years of hands-on expertise exporting premium agri-products to 100+ countries across every continent.
              </p>
            </div>

            {/* Reliable Supply Chain */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 sm:p-7 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Reliable Supply Chain
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                End-to-end supply chain management with full traceability from farm to port, ensuring zero disruptions.
              </p>
            </div>

            {/* Consistent Quality Standards */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 sm:p-7 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-secondary/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Consistent Quality Standards
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                ISO, HACCP, BRC, FDA, Halal &amp; Kosher certified — every shipment meets the same exacting standards.
              </p>
            </div>

            {/* Competitive Pricing */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 sm:p-7 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Competitive Pricing
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Direct sourcing from farmers and optimised operations mean premium quality at the most competitive prices.
              </p>
            </div>

            {/* Private Label Expertise */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 sm:p-7 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 6h.008v.008H6V6z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Private Label Expertise
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Custom branding, packaging design, and private-label services tailored for your market identity.
              </p>
            </div>

            {/* Professional Documentation */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 sm:p-7 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-secondary/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Documentation Support
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Complete export documentation — phytosanitary certificates, bills of lading, COA, and customs compliance.
              </p>
            </div>

            {/* Timely Shipment */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 sm:p-7 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-secondary/20">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Timely Shipment Execution
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Punctual dispatch with real-time tracking — because in global trade, every day counts.
              </p>
            </div>

            {/* Long-Term Relationships */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 sm:p-7 rounded-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Long-Term Relationships
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We don't just close deals — we build partnerships founded on trust, transparency, and mutual growth.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/pages/about">
              <span className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:scale-105">
                Learn more about AGF
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6 sm:mb-8">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <FeatureCard text="Basmati Rice" imgSrc="/image/products/rice.avif" />
            <FeatureCard text="Sugar" imgSrc="/image/products/sugar.avif" />
            <FeatureCard text="Tea" imgSrc="/image/products/tea.avif" />
            <FeatureCard text="Chickpeas" imgSrc="/image/products/chickpea.avif" />
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 -mx-[2.1%]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Quality You Can Trust
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-5">
              Our Quality Assurance Process
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              From raw material inspection to container loading, every stage is
              monitored and documented — giving international buyers complete
              confidence in every shipment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Product Inspection */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-primary/30 uppercase tracking-widest">Step 01</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Product Inspection
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every batch undergoes rigorous visual and physical inspection — checking grain length, colour uniformity, moisture content, and foreign matter before processing begins.
              </p>
            </div>

            {/* Quality Control */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-secondary/40 uppercase tracking-widest">Step 02</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Quality Control
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Multi-point quality checks at every production stage — from milling and sortex processing to final grading — ensuring only the finest product moves forward.
              </p>
            </div>

            {/* Laboratory Testing */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-primary/30 uppercase tracking-widest">Step 03</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Laboratory Testing
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Accredited lab analysis for pesticide residues, heavy metals, aflatoxins, and microbiological safety — with full test reports available for every shipment.
              </p>
            </div>

            {/* Packaging Standards */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-secondary/40 uppercase tracking-widest">Step 04</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Packaging Standards
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Food-grade, tamper-evident packaging with proper sealing, labelling, and weight verification — compliant with EU, FDA, and destination-country regulations.
              </p>
            </div>

            {/* Container Loading Checks */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-primary/30 uppercase tracking-widest">Step 05</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Container Loading Checks
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Supervised container loading with photographic documentation, seal verification, and fumigation certificates — ensuring cargo arrives exactly as shipped.
              </p>
            </div>

            {/* Traceability & Compliance */}
            <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-secondary/40 uppercase tracking-widest">Step 06</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                Traceability &amp; Compliance
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Complete batch traceability from farm to destination — with COA, COO, phytosanitary certificates, and full compliance with ISO 22000, HACCP, and BRC standards.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/pages/certifications">
              <span className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-full font-semibold hover:bg-secondary transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:scale-105">
                View Our Certifications
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary -mx-[2.1%] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-40 h-40 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Our Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5">
              How We Work
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
              A transparent, structured process that takes you from initial
              enquiry to delivered cargo — with support at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {/* Step 1 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-lg shadow-secondary/20">
                  <span className="text-white font-bold text-sm">01</span>
                </div>
                <div className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Requirement Discussion
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We listen first — understanding your target market, product specifications, packaging needs, and volume requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold text-sm">02</span>
                </div>
                <div className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Product Recommendation
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our experts recommend the best-fit products, grades, and varieties based on your market demand and budget.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-lg shadow-secondary/20">
                  <span className="text-white font-bold text-sm">03</span>
                </div>
                <div className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Sampling &amp; Approval
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Physical samples are dispatched for your evaluation. We refine until quality and specifications are fully approved.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold text-sm">04</span>
                </div>
                <div className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Commercial Finalization
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pricing, payment terms, delivery timeline, and contract details are finalized with full transparency.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-lg shadow-secondary/20">
                  <span className="text-white font-bold text-sm">05</span>
                </div>
                <div className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Production &amp; Packing
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Your order enters production — milling, sortex processing, grading, and packaging to your exact specifications.
              </p>
            </div>

            {/* Step 6 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold text-sm">06</span>
                </div>
                <div className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Quality Inspection
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Pre-shipment quality inspection with lab testing, weight verification, and packaging integrity checks.
              </p>
            </div>

            {/* Step 7 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center shadow-lg shadow-secondary/20">
                  <span className="text-white font-bold text-sm">07</span>
                </div>
                <div className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Shipment
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Container loading under supervision, complete export documentation, and real-time shipment tracking until delivery.
              </p>
            </div>

            {/* Step 8 */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="text-primary font-bold text-sm">08</span>
                </div>
                <div className="h-px flex-1 bg-white/15" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Post-Sales Support
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our relationship doesn't end at delivery — ongoing support for reorders, feedback, and market-specific adjustments.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/pages/contact">
              <span className="inline-flex items-center gap-2 bg-white text-primary px-7 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:scale-105">
                Start Your Journey
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
