import Image from "next/image";
import Card from "./components/card";
import FeatureCard from "./components/FeatureCard";
import Gallery from "./components/gallery";
import Link from "next/link";
import galleryImages from "./assets/gallaryImage.json";

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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 text-center mt-8 sm:mt-0">
        <Card
          imgSrc="/earth-globe.svg"
          text="Global Reach, Local Expertise: Delivering to 100+ countries."
        />
        <Card
          text="A Legacy of 14+ Years: Cultivating and exporting excellence."
          imgSrc="/sun.svg"
        />
        <Card
          text="Quality You Can Trace: Certified for purity from soil to ship."
          imgSrc="/quality.svg"
        />
        <Card
          text="The Partner of Choice: Building trust with global distributors."
          imgSrc="/handshake.svg"
        />
      </section>

      {/* Why Choose AGF */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 -mx-[2.1%]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose AGF?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Trusted by importers &amp; distributors across 93+ countries for
              quality, reliability, and consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Certified Quality
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                ISO, HACCP, BRC, FDA, FSSAI, Halal &amp; Kosher certified — meeting the strictest global standards.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Global Supply Chain
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Seamless logistics to 93+ countries with on-time delivery and complete supply chain traceability.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                14+ Years Expertise
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Industry veterans with deep knowledge in global agri-trade, building lasting partnerships.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.42 15.17l-5.1-3.13M16.58 15.17l5.1-3.13M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41M12 6a6 6 0 100 12 6 6 0 000-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">
                Custom Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Flexible packaging, private labelling, and tailored solutions to match your market needs.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/pages/about">
              <span className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors duration-300 text-base sm:text-lg">
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
      <section className="p-4 sm:p-6 md:p-10 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-6 sm:mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard text="Basmati Rice" imgSrc="/image/products/rice.jpg" />
          <FeatureCard text="Sugar" imgSrc="/image/products/sugar.jpg" />
          <FeatureCard text="Tea" imgSrc="/image/products/tea.jpg" />
          <FeatureCard text="Chickpeas" imgSrc="/image/products/chickpea.jpg" />
        </div>
      </section>
    </div>
  );
}
