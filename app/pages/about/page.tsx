import Image from "next/image";
import {
  CheckCircleIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon,
  CogIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  const highlights = [
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "14+ Years of Global Leadership",
      description:
        "Backed by industry veterans with proven expertise in building global FMCG & food brands.",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Strong Global Presence",
      description:
        "Experience of scaling exports to 90+ countries across GCC, Middle East, Europe, Africa, Asia & North America.",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Diverse Premium Portfolio",
      description:
        "Specializing in Basmati Rice, Non-Basmati Rice, Tea, Chickpeas, Sesame Seeds, Spices & Sugar sourced with the highest quality standards.",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Trusted Global Partner",
      description:
        "Long-standing relationships built on trust, consistency, and reliability with importers & distributors worldwide.",
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Heritage Meets Modern Vision",
      description:
        "Combining deep Indian agri-trade roots with a forward-looking multinational approach.",
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: "Commitment to Excellence",
      description: "Guided by the promise: 'Every Grain, A Promise Kept.'",
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: "Customer-Centric & Flexible",
      description:
        "Tailor-made solutions for different markets, packaging preferences, and cultural needs.",
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: "Strong Compliance & Supply Chain",
      description:
        "Adhering to international food safety standards, ethical sourcing, and seamless logistics.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About AGF
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Anand Global Foods - Where Heritage Meets Global Excellence
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Founded by industry veterans with proven expertise in building
                global FMCG & food brands, Anand Global Foods has established
                itself as a leading agri-export company that specializes in
                exporting a wide range of premium agricultural products to
                international markets.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                With over 14 years of experience in global agri-export
                leadership, we have successfully scaled our operations to serve
                90+ countries across multiple continents, building long-standing
                relationships based on trust, consistency, and reliability.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Our commitment to excellence is guided by our core promise:
                "Every Grain, A Promise Kept." We combine deep Indian agri-trade
                roots with a forward-looking multinational approach, ensuring
                that every product meets the highest international quality
                standards.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/heroGallery/1.jpg"
                  alt="AGF Global Operations"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-4 rounded-xl shadow-lg">
                <p className="text-sm font-semibold">90+ Countries</p>
                <p className="text-xs">Global Reach</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose AGF?
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Discover what makes us the trusted partner for global importers
              and distributors
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-primary text-white p-8 sm:p-10 rounded-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-secondary">
                Our Mission
              </h3>
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                To be the most trusted and preferred partner for global
                importers and distributors, delivering premium quality
                agricultural products while maintaining the highest standards of
                food safety, ethical sourcing, and customer satisfaction.
              </p>
            </div>

            <div className="bg-secondary text-white p-8 sm:p-10 rounded-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Our Vision
              </h3>
              <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
                To lead the global agri-export industry by combining traditional
                Indian agricultural heritage with modern international trade
                practices, creating sustainable value for all stakeholders
                across the global food supply chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              The principles that guide every decision and action at AGF
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Quality First
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Every product meets international quality standards and food
                safety regulations.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Customer Focus
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Tailored solutions that meet the unique needs of different
                markets and cultures.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                Trust & Reliability
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Building long-term partnerships based on consistency and
                dependability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner with AGF?
          </h2>
          <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Join our network of satisfied global partners and experience the AGF
            difference in quality, reliability, and customer service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
              Contact Us Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              View Our Products
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
