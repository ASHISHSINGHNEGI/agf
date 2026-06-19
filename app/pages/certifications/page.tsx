import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Certifications",
  description: "View Anand Global Foods' international certifications including ISO 22000, HACCP, BRC, FDA, Halal, Kosher, and Organic, ensuring global quality standards.",
};
import Link from "next/link";
import {
  ShieldCheckIcon,
  CheckBadgeIcon,
  GlobeAltIcon,
  BeakerIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";

const certifications = [
  {
    name: "ISO 22000",
    fullName: "Food Safety Management System",
    img: "/image/certifications/iso.jpg",
    description:
      "ISO 22000 is an internationally recognised standard that ensures a robust food safety management system across our entire supply chain — from sourcing to shipping.",
    scope: [
      "Hazard analysis & critical control",
      "End-to-end traceability",
      "Continuous improvement protocols",
    ],
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    name: "HACCP",
    fullName: "Hazard Analysis & Critical Control Points",
    img: "/image/certifications/haccp.jpg",
    description:
      "HACCP certification validates our systematic approach to identifying, evaluating, and controlling food safety hazards at every stage of production.",
    scope: [
      "Biological, chemical & physical hazard control",
      "Critical control point monitoring",
      "Corrective action procedures",
    ],
    color: "bg-green-600",
    lightColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
  },
  {
    name: "BRC",
    fullName: "British Retail Consortium Global Standard",
    img: "/image/certifications/brc.jpg",
    description:
      "BRC certification demonstrates that our products meet the rigorous safety, quality, and operational standards required by leading global retailers.",
    scope: [
      "Senior management commitment & continual improvement",
      "Food safety & quality management",
      "Site standards & product control",
    ],
    color: "bg-red-600",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200",
  },
  {
    name: "FDA",
    fullName: "U.S. Food & Drug Administration",
    icon: <ShieldCheckIcon className="w-12 h-12" />,
    description:
      "FDA registration ensures our products comply with U.S. federal regulations for food safety, labelling, and import requirements — enabling smooth entry into the American market.",
    scope: [
      "Facility registration & compliance",
      "Labelling & nutritional standards",
      "Prior notice & import procedures",
    ],
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-200",
  },
  {
    name: "APEDA",
    fullName: "Agricultural & Processed Food Products Export Development Authority",
    icon: <GlobeAltIcon className="w-12 h-12" />,
    description:
      "APEDA registration under the Government of India authorises us as an approved exporter of scheduled agricultural and processed food products.",
    scope: [
      "Export authorisation for scheduled products",
      "Quality compliance for Basmati rice",
      "Market development & trade facilitation",
    ],
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
  },
  {
    name: "FSSAI",
    fullName: "Food Safety & Standards Authority of India",
    icon: <DocumentCheckIcon className="w-12 h-12" />,
    description:
      "FSSAI licensing confirms that our manufacturing and processing facilities meet India's national food safety and hygiene standards.",
    scope: [
      "Manufacturing & processing licence",
      "Hygiene & sanitation standards",
      "Food labelling & packaging compliance",
    ],
    color: "bg-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    borderColor: "border-emerald-200",
  },
  {
    name: "Halal",
    fullName: "Halal Certification",
    icon: <CheckBadgeIcon className="w-12 h-12" />,
    description:
      "Halal certification verifies that our products and processes comply with Islamic dietary laws, enabling us to serve Muslim-majority markets across the Middle East, Africa, and Asia.",
    scope: [
      "Ingredient sourcing & permissibility",
      "Processing & handling compliance",
      "Audit & renewal by accredited bodies",
    ],
    color: "bg-teal-600",
    lightColor: "bg-teal-50",
    textColor: "text-teal-600",
    borderColor: "border-teal-200",
  },
  {
    name: "Kosher",
    fullName: "Kosher Certification",
    icon: <ShieldCheckIcon className="w-12 h-12" />,
    description:
      "Kosher certification ensures that our food products meet the strict dietary requirements of Jewish law, opening access to Kosher-observant consumers worldwide.",
    scope: [
      "Ingredient verification & approval",
      "Dedicated production line protocols",
      "Rabbinical supervision & audits",
    ],
    color: "bg-sky-600",
    lightColor: "bg-sky-50",
    textColor: "text-sky-600",
    borderColor: "border-sky-200",
  },
  {
    name: "Organic",
    fullName: "Organic Certifications (NPOP / USDA / EU Organic)",
    icon: <BeakerIcon className="w-12 h-12" />,
    description:
      "Our organic certifications validate that select products are grown without synthetic chemicals, GMOs, or artificial additives — meeting NPOP, USDA, and EU organic standards.",
    scope: [
      "Chemical-free farming practices",
      "Non-GMO seed sourcing",
      "Soil health & sustainability audits",
    ],
    color: "bg-lime-600",
    lightColor: "bg-lime-50",
    textColor: "text-lime-600",
    borderColor: "border-lime-200",
  },
];

const trustStats = [
  { value: "9+", label: "Certifications" },
  { value: "100+", label: "Countries Served" },
  { value: "100%", label: "Traceability" },
  { value: "14+", label: "Years of Trust" },
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <ShieldCheckIcon className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-gray-200">
              Globally Certified &amp; Trusted
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Certifications &amp; Compliance
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto text-gray-200 leading-relaxed">
            Quality isn't just a promise — it's proven. AGF holds the world's
            most rigorous food safety and quality certifications, ensuring every
            product meets the highest international standards.
          </p>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="relative -mt-8 z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 sm:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {trustStats.map((stat, index) => (
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

      {/* Certifications Grid */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Standards We Uphold
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              Each certification reflects our unwavering commitment to food
              safety, quality assurance, and regulatory compliance across global
              markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border ${cert.borderColor} hover:-translate-y-2`}
              >
                {/* Header with badge */}
                <div
                  className={`${cert.lightColor} p-6 flex items-center gap-5 border-b ${cert.borderColor}`}
                >
                  {cert.img ? (
                    <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                      <Image
                        src={cert.img}
                        alt={cert.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className={`w-20 h-20 rounded-xl ${cert.color} text-white flex items-center justify-center shadow-md flex-shrink-0`}
                    >
                      {cert.icon}
                    </div>
                  )}
                  <div>
                    <h3
                      className={`text-xl sm:text-2xl font-bold ${cert.textColor}`}
                    >
                      {cert.name}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-snug">
                      {cert.fullName}
                    </p>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                    {cert.description}
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Scope &amp; Coverage
                    </p>
                    <ul className="space-y-2">
                      {cert.scope.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <svg
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${cert.textColor}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Certifications Matter
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
              In global food trade, certifications are not optional — they are
              the foundation of trust, market access, and consumer confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <ShieldCheckIcon className="w-8 h-8" />,
                title: "Consumer Safety",
                text: "Certifications guarantee that every product has passed rigorous safety checks before it reaches the consumer.",
              },
              {
                icon: <GlobeAltIcon className="w-8 h-8" />,
                title: "Global Market Access",
                text: "Different markets require different certifications — our portfolio ensures we can export to virtually any country.",
              },
              {
                icon: <DocumentCheckIcon className="w-8 h-8" />,
                title: "Regulatory Compliance",
                text: "Staying certified means staying compliant with ever-evolving national and international food regulations.",
              },
              {
                icon: <CheckBadgeIcon className="w-8 h-8" />,
                title: "Brand Credibility",
                text: "Certifications serve as independent third-party validation of our quality claims and operational excellence.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group text-center"
              >
                <div className="text-secondary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.text}
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
            Need Certification Documents?
          </h2>
          <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            We are happy to share copies of our certification documents with
            prospective partners and buyers. Reach out to our team for
            verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pages/contact">
              <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                Request Documents
              </button>
            </Link>
            <Link href="/pages/products">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300">
                View Our Products
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
