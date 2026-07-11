import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Private Label & Contract Packaging",
  description: "End-to-end private label and contract packaging solutions for premium agri-products. We offer custom branding, design support, and market-specific retail packaging.",
};
import Link from "next/link";
import {
  SparklesIcon,
  CubeIcon,
  PaintBrushIcon,
  GlobeAltIcon,
  ShoppingBagIcon,
  TruckIcon,
  CheckCircleIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <SparklesIcon className="w-8 h-8" />,
    title: "Custom Branding",
    description:
      "Build your own brand identity in the global food market. We provide end-to-end branding support — from logo placement and label design to brand-specific colour schemes — so your products stand out on every shelf.",
    features: [
      "Your logo & brand identity on every pack",
      "Brand colour & typography matching",
      "Multi-language label support",
      "Barcode & QR code integration",
    ],
    color: "bg-primary",
    lightColor: "bg-primary/5",
    textColor: "text-primary",
    borderColor: "border-primary/15",
  },
  {
    icon: <CubeIcon className="w-8 h-8" />,
    title: "Packaging Development",
    description:
      "From concept to production-ready packaging, we develop solutions that protect product quality while maximising shelf appeal. Our packaging meets international food-grade safety standards.",
    features: [
      "Food-grade material sourcing",
      "Vacuum, pouch, box & bag formats",
      "Tamper-evident & resealable options",
      "Compliance with EU/US packaging regulations",
    ],
    color: "bg-secondary",
    lightColor: "bg-secondary/5",
    textColor: "text-secondary",
    borderColor: "border-secondary/15",
  },
  {
    icon: <PaintBrushIcon className="w-8 h-8" />,
    title: "Design Support",
    description:
      "Our in-house design team collaborates with you to create packaging artwork that resonates with your target consumers. We handle everything from concept sketches to print-ready files.",
    features: [
      "Professional artwork & layout design",
      "Photorealistic product mockups",
      "Print-ready file delivery (AI, PDF, CDR)",
      "Unlimited design revisions",
    ],
    color: "bg-primary",
    lightColor: "bg-primary/5",
    textColor: "text-primary",
    borderColor: "border-primary/15",
  },
  {
    icon: <GlobeAltIcon className="w-8 h-8" />,
    title: "Market-Specific Solutions",
    description:
      "Every market has unique regulatory, cultural, and consumer requirements. We tailor packaging, labelling, and product specifications to meet the exact needs of your destination country.",
    features: [
      "Region-specific labelling (Arabic, French, etc.)",
      "Compliance with local food safety laws",
      "Nutritional info in local formats",
      "Cultural colour & design sensitivity",
    ],
    color: "bg-secondary",
    lightColor: "bg-secondary/5",
    textColor: "text-secondary",
    borderColor: "border-secondary/15",
  },
  {
    icon: <ShoppingBagIcon className="w-8 h-8" />,
    title: "Retail & Distribution Packaging",
    description:
      "Whether you need retail-ready consumer packs or bulk distribution packaging, we offer flexible formats designed for supermarket shelves, online stores, and wholesale channels alike.",
    features: [
      "Consumer packs: 500g, 1kg, 2kg, 5kg",
      "Bulk packs: 10kg, 25kg, 50kg",
      "Shelf-ready display cartons",
      "E-commerce optimised packaging",
    ],
    color: "bg-primary",
    lightColor: "bg-primary/5",
    textColor: "text-primary",
    borderColor: "border-primary/15",
  },
  {
    icon: <TruckIcon className="w-8 h-8" />,
    title: "End-to-End Export Support",
    description:
      "From factory floor to foreign port, we manage the entire export process — documentation, customs clearance, shipping logistics, and compliance — so you can focus on selling.",
    features: [
      "Complete export documentation (COA, COO, Phyto)",
      "Customs clearance & port handling",
      "Container loading supervision",
      "Real-time shipment tracking",
    ],
    color: "bg-secondary",
    lightColor: "bg-secondary/5",
    textColor: "text-secondary",
    borderColor: "border-secondary/15",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We understand your market, target audience, and brand vision through a detailed briefing session.",
  },
  {
    step: "02",
    title: "Design & Development",
    description:
      "Our team creates packaging concepts, artwork, and prototypes tailored to your specifications.",
  },
  {
    step: "03",
    title: "Sampling & Approval",
    description:
      "You receive physical samples for review. We refine until every detail meets your expectations.",
  },
  {
    step: "04",
    title: "Production & Export",
    description:
      "Approved designs go into production. We handle packaging, quality checks, and shipment execution.",
  },
];

export default function PrivateLabelPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            <SparklesIcon className="w-4 h-4" />
            Your Brand, Our Expertise
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Private Label &amp; Contract Packaging
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed mb-10">
            Launch your own food brand with zero manufacturing hassle. AGF
            handles everything — from product sourcing and custom packaging to
            export documentation and global shipping.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/contact">
              <span className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base">
                Start Your Private Label
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/pages/products">
              <span className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300 text-base">
                View Product Range
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="relative -mt-8 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Private Labels Delivered" },
              { value: "100+", label: "Countries Served" },
              { value: "100%", label: "Customisation" },
              { value: "MOQ", label: "Flexible Minimums" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-3xl sm:text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm sm:text-base mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              A complete suite of private label and contract packaging services,
              built for importers, distributors, and retail brands worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border ${service.borderColor} hover:-translate-y-2 flex flex-col h-full`}
              >
                {/* Header */}
                <div className={`${service.lightColor} p-6 border-b ${service.borderColor}`}>
                  <div
                    className={`w-14 h-14 ${service.color} text-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${service.textColor}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2.5 mt-auto">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-gray-700"
                      >
                        <CheckCircleIcon
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.textColor}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 bg-primary -mx-[2.1%] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
              Simple Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              From initial brief to shipped containers — our streamlined 4-step
              process makes private labelling effortless.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 group relative"
              >
                <span className="text-5xl sm:text-6xl font-black text-white/10 absolute top-4 right-5 group-hover:text-secondary/20 transition-colors duration-300">
                  {item.step}
                </span>
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-5 shadow-lg shadow-secondary/20">
                  <span className="text-white font-bold text-sm">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Available */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Products Available for Private Label
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Choose from our extensive range of premium agri-products to build
              your private label portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Rice",
                products: "1121, 1509, 1718, Traditional, Sella, Steam, White, Sona Masoori",
                img: "/image/products/1121-basmati.avif",
                count: "8 Varieties",
              },
              {
                category: "Beverages",
                products: "Black Tea, Coffee (Arabica & Robusta)",
                img: "/image/products/coffee.avif",
                count: "2 Products",
              },
              {
                category: "Spices",
                products: "Green Cardamom, Whole Spices, Ground Spices",
                img: "/image/products/cardamom.avif",
                count: "3 Products",
              },
              {
                category: "Agri Commodities",
                products: "Refined Sugar, Chickpeas, Peanuts, Sesame Seeds",
                img: "/image/products/peanuts.avif",
                count: "4 Products",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 sm:h-72">
                  <Image
                    src={item.img}
                    alt={item.category}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {item.count}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.category}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.products}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary to-primary/90 -mx-[2.1%]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SparklesIcon className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Brand?
          </h2>
          <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you need 1,000 packs or 100,000 — our private label team is
            ready to bring your vision to life. Get started with a free
            consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/contact">
              <span className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get a Free Quote
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </Link>
            <Link href="/pages/products">
              <span className="inline-flex items-center border-2 border-white/30 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                Explore Products
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
