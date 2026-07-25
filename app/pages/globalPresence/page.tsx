import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Global Presence",
  description: "Anand Global Foods exports premium agri-commodities to over 100 countries across Asia, Africa, Europe, Americas, and Oceania.",
};

export const dynamic = "force-static";
const data = [
  {
    name: "Africa",
    countriesServed: "25+",
    description:
      " Leading supplier to major markets including China, Japan, and Southeast Asia.",
  },
  {
    name: "America",
    countriesServed: "6+",
    description:
      "Growing presence in North and South American markets with quality products.",
  },
  {
    name: "Asia",
    countriesServed: "34+",
    description:
      "Leading supplier to major markets including China, Japan, and Southeast Asia.",
  },
  {
    name: "Europe",
    countriesServed: "26+",
    description:
      "Established partnerships with distributors across European Union markets.",
  },
  {
    name: "Oceania",
    countriesServed: "2+",
    description:
      " Leading supplier to major markets including China, Japan, and Southeast Asia.",
  },
];
export default function GlobalPresence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-amber-100">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
            Global Presence
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto leading-relaxed">
            Our agricultural excellence reaches across continents, serving
            customers in over 100 countries with premium quality products and
            reliable service.
          </p>
          <p className="text-base sm:text-lg text-secondary font-semibold mb-8">
            Serving customers across Asia, Africa, Europe, Americas and Oceania.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.1005V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">100+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">100%</h3>
              <p className="text-gray-600">Quality Certified</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">500+</h3>
              <p className="text-gray-600">Global Partners</p>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12">
            <div className="p-8 sm:p-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                  Our Global Reach
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  From the fertile fields of Asia to the markets of Europe and
                  the Americas, our products travel across continents to reach
                  your table.
                </p>
              </div>

              {/* Map Container */}
              <div className="relative w-full h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden ">
                <Image
                  src="/global3.avif"
                  alt="Global Presence Map"
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>

          {/* Regional Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {data.map((country) => (
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300" key={country.name}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.1005V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {country.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                 {country.description}
                </p>
                <div className="text-2xl font-bold text-secondary">
                  {country.countriesServed} Countries
                </div>
              </div>
            ))}
          </div>
          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 sm:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Ready to Partner with Us?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Join our global network of satisfied customers and distributors.
                Let's build a sustainable future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 text-lg">
                  Become a Partner
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-lg">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
