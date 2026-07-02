import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Anand Global Foods, our 15+ years legacy, mission, vision, and the core values that drive our agri-export excellence worldwide.",
};
import {
  CheckCircleIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon,
  CogIcon,
  TruckIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function About() {
  const highlights = [
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "A Legacy of Global Expertise",
      description:
        "Backed by 15+ years of agri-export expertise, we help businesses source premium agricultural products with confidence, consistency, and market insight.",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8" />,
      title: "Our Fields, The World's Tables",
      description:
        "Our global supply network delivers premium agricultural products to customers in over 100 countries, ensuring reliable, on-time shipments across international markets.",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "A Portfolio of Purity",
      description:
        "We provide premium Basmati Rice, Tea, Chickpeas, and other agricultural products that meet rigorous quality standards for purity, authenticity, and consistency.",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Partnerships Built on Trust",
      description:
        "We build long-term partnerships with importers and distributors by delivering dependable quality, transparent communication, and reliable service at every stage.",
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Tradition Meets Innovation",
      description:
        "By combining India's agricultural heritage with modern sourcing, processing, and quality control, we deliver products that consistently exceed global expectations.",
    },
    {
      icon: <CheckCircleIcon className="w-8 h-8" />,
      title: "Our Promise in Every Grain",
      description:
        "'Every Grain, A Promise Kept' reflects our commitment to delivering uncompromising quality, reliability, and trust—from the farm to your destination.",
    },
    {
      icon: <CogIcon className="w-8 h-8" />,
      title: "Solutions Tailored for You",
      description:
        "We tailor our products, packaging, and private-label solutions to meet the unique requirements of diverse markets, helping our partners serve their customers more effectively.",
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: "Reliable, Compliant Supply Chain",
      description:
        "With efficient logistics, international food safety compliance, and rigorous quality assurance, we ensure every shipment reaches you safely, on schedule, and ready for market.",
    },
  ];

  const coreValues = [
    {
      icon: <CheckCircleIcon className="w-8 h-8 text-white"  />,
 
      title: "Integrity First",
      description: "Honesty & transparency in every deal.",
      bgColor: "bg-primary",
    },
    {
      icon: <SparklesIcon className="w-8 h-8 text-white" />,
      title: "Quality Without Compromise",
      description: "Every grain speaks of purity.",
      bgColor: "bg-secondary",
    },
    {
      icon: <HeartIcon className="w-8 h-8 text-white" />,
      title: "Customer-Centric",
      description: "We grow only when our customers grow.",
      bgColor: "bg-primary",
    },
    {
      icon: <GlobeAltIcon className="w-8 h-8 text-white" />,
      title: "Sustainability & Responsibility",
      description: "Eco-friendly farming & farmer empowerment.",
      bgColor: "bg-secondary",
    },
    {
      icon: <LightBulbIcon className="w-8 h-8 text-white" />,
      title: "Innovation with Tradition",
      description: "Blending heritage with world-class processes.",
      bgColor: "bg-primary",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            More Than Rice, A Legacy of Trust
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed">
          At AGF – Anand Global Foods, we do more than export agricultural products—we bring the richness of India's farming heritage to global markets. Every grain reflects the fertile fields of Punjab & Haryana and the generations of expertise behind authentic Basmati cultivation. By combining this legacy with uncompromising quality standards, innovation, and reliable global supply, we help businesses worldwide deliver exceptional products to their customers.
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
              Founded by industry leaders with extensive experience in building successful global FMCG and food brands, Anand Global Foods has grown into a trusted agri-export partner for businesses around the world. We specialize in sourcing and exporting premium agricultural products that meet the evolving demands of international markets through consistent quality, dependable supply, and customer-focused service.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
              With over 15 years of leadership experience in the global agri-export industry, we have built a robust international network serving customers in 100+ countries across multiple continents. Our long-term partnerships with importers, distributors, and retailers are built on trust, transparency, timely delivery, and a commitment to consistent product excellence.
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our guiding principle, "Every Grain, A Promise Kept," reflects our commitment to quality, integrity, and reliability at every stage of the supply chain. By blending India's rich agricultural heritage with modern sourcing, processing, and international quality standards, we ensure every shipment consistently meets the expectations of customers worldwide.
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
                <p className="text-sm font-semibold">100+ Countries</p>
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
              To deliver premium, authentic food products with uncompromising quality, reliable service, and global standards—helping our partners serve consumers with confidence while preserving the rich heritage of Indian agriculture.
              </p>
            </div>

            <div className="bg-secondary text-white p-8 sm:p-10 rounded-2xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">
                Our Vision
              </h3>
              <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
              To become the world's most trusted premium food products brand, recognized for exceptional quality, authenticity, sustainable practices, and enduring partnerships across global markets.
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`${value.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {value.description}
                </p>
              </div>
            ))}
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
