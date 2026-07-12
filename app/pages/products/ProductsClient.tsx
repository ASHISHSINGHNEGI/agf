"use client";
import ProductCard from "@/app/components/ProductCard";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const products = [
  // ── Rice ──
  {
    name: "1121 Basmati Rice",
    img: "/image/products/1121-basmati.avif",
    description:
      "The king of Basmati — extra-long grain with exceptional aroma and elongation up to 22 mm after cooking.",
    category: "Rice",
    href: "#",
    details: [
      "Origin: Punjab & Haryana & Haryana, India",
      "Grain Length: 8.30 mm+ (raw)",
      "Certifications: ISO 22000, HACCP, FSSAI",
    ],
  },
  {
    name: "1509 Basmati Rice",
    img: "/image/products/1509-basmati.avif",
    description:
      "A cost-effective premium Basmati with long grains, sweet aroma, and fluffy texture after cooking.",
    category: "Rice",
    href: "#",
    details: [
      "Origin: Punjab & Haryana, India",
      "Grain Length: 7.50 mm+ (raw)",
      "Certifications: ISO 22000, Non-GMO",
    ],
  },
  {
    name: "1718 Basmati Rice",
    img: "/image/products/1718-basmati.avif",
    description:
      "A newer Basmati cultivar offering excellent elongation and aroma at a competitive price point.",
    category: "Rice",
    href: "#",
    details: [
      "Origin: Haryana & UP, India",
      "Grain Length: 7.20 mm+ (raw)",
      "Certifications: FSSAI, Halal",
    ],
  },
  {
    name: "Traditional Basmati Rice",
    img: "/image/products/traditional-basmati.avif",
    description:
      "Heritage Basmati aged for 12–24 months, delivering the finest aroma and delicate, non-sticky grains.",
    category: "Rice",
    href: "#",
    details: [
      "Origin: Himalayan Foothills, India",
      "Aging: 12–24 months",
      "Certifications: GI Tagged, ISO 22000",
    ],
  },
  {
    name: "Sella Basmati Rice",
    img: "/image/products/sella-rice.avif",
    description:
      "Parboiled Basmati with golden hue, firmer texture and higher nutritional retention — ideal for Biryani.",
    category: "Rice",
    href: "#",
    details: [
      "Origin: Punjab & Haryana, India",
      "Type: Parboiled (Golden Sella)",
      "Certifications: ISO 22000, Kosher",
    ],
  },
  {
    name: "Steam Basmati Rice",
    img: "/image/products/steam-rice.avif",
    description:
      "Lightly steamed Basmati rice with a creamy white appearance and softer texture than Sella.",
    category: "Rice",
    href: "#",
    details: [
      "Origin: Punjab & Haryana & Haryana, India",
      "Type: Steam Processed",
      "Certifications: HACCP, Halal",
    ],
  },
  {
    name: "White Rice",
    img: "/image/products/white-rice.avif",
    description:
      "Polished non-Basmati white rice, versatile and budget-friendly for everyday consumption worldwide.",
    category: "Rice",
    href: "#",
    details: [
      "Origin: India",
      "Varieties: IR-64, PR-11",
      "Certifications: FSSAI, ISO 9001",
    ],
  },
  {
    name: "Sona Masoori Rice",
    img: "/image/products/sona-masoori.avif",
    description:
      "Lightweight, aromatic medium-grain rice from South India — low in starch and ideal for daily meals.",
    category: "Rice",
    href: "#",
    details: [
      "Origin: Andhra Pradesh & Karnataka, India",
      "Grain Type: Medium-grain",
      "Certifications: FSSAI, Non-GMO",
    ],
  },

  // ── Beverages ──
  {
    name: "Black Tea",
    img: "/image/products/tea.avif",
    description:
      "Full-bodied and aromatic black tea from select plantations in Assam and Darjeeling.",
    category: "Beverages",
    href: "#",
    details: [
      "Origin: Assam & Darjeeling, India",
      "Grade: CTC (Crush, Tear, Curl)",
      "Certifications: Rainforest Alliance, FSSAI",
    ],
  },
  {
    name: "Coffee",
    img: "/image/products/coffee.avif",
    description:
      "Single-origin Arabica and Robusta beans from the Western Ghats — rich, bold, and export-ready.",
    category: "Beverages",
    href: "#",
    details: [
      "Origin: Karnataka & Kerala, India",
      "Varieties: Arabica, Robusta",
      "Certifications: ISO 22000, Rainforest Alliance",
    ],
  },

  // ── Spices ──
  {
    name: "Green Cardamom",
    img: "/image/products/cardamom.avif",
    description:
      "The 'Queen of Spices' — intensely aromatic green pods handpicked from Kerala plantations.",
    category: "Spices",
    href: "#",
    details: [
      "Origin: Kerala, India",
      "Grade: 7 mm+ Bold",
      "Certifications: Spices Board India, FSSAI",
    ],
  },
  {
    name: "Whole Spices",
    img: "/image/products/whole-spices.avif",
    description:
      "A curated range of whole spices — cinnamon, cloves, star anise, cumin, black pepper and more.",
    category: "Spices",
    href: "#",
    details: [
      "Origin: India (Multi-region)",
      "Includes: Cumin, Cloves, Cinnamon, Pepper",
      "Certifications: FSSAI, ISO 22000, Halal",
    ],
  },
  {
    name: "Ground Spices",
    img: "/image/products/ground-spices.avif",
    description:
      "Finely milled spice powders — turmeric, chili, coriander and cumin — vibrant in colour and flavour.",
    category: "Spices",
    href: "#",
    details: [
      "Origin: India",
      "Includes: Turmeric, Chili, Coriander, Cumin",
      "Certifications: FSSAI, Halal, ISO 22000",
    ],
  },
  {
    name: "Saffron",
    img: "/image/products/saffron.avif",
    description: "Finest Kashmiri Saffron from Kashmir.",
    category: "Spices",
    href: "#",
    details: [
      "Origin: Kashmir, India",
      "Certifications: ISO 22000, Halal",
    ],
  },

  // ── Agri Commodities ──
  {
    name: "Refined Sugar",
    img: "/image/products/sugar.avif",
    description:
      "High-purity crystalline sugar for domestic and industrial use, meeting ICUMSA standards.",
    category: "Agri Commodities",
    href: "#",
    details: [
      "Origin: Brazil & India",
      "Type: ICUMSA 45",
      "Certifications: ISO 9001, Halal",
    ],
  },
  {
    name: "Kabuli Chickpeas",
    img: "/image/products/chickpea.avif",
    description:
      "Large, creamy chickpeas perfect for hummus, salads and a wide variety of global cuisines.",
    category: "Agri Commodities",
    href: "#",
    details: [
      "Origin: Rajasthan & MP, India",
      "Size: 8–10 mm Caliber",
      "Certifications: Non-GMO, Vegan, FSSAI",
    ],
  },
  {
    name: "Peanuts",
    img: "/image/products/peanuts.avif",
    description:
      "Bold and Java peanuts — crunchy, high-oil-content groundnuts ideal for snacking and oil extraction.",
    category: "Agri Commodities",
    href: "#",
    details: [
      "Origin: Gujarat & Rajasthan, India",
      "Varieties: Bold (38/42), Java (50/60)",
      "Certifications: FSSAI, Non-GMO, Halal",
    ],
  },
  {
    name: "Sesame Seeds",
    img: "/image/products/sesame-seeds.avif",
    description:
      "Premium hulled and natural sesame seeds — rich in nutrients and prized for oil, tahini and confectionery.",
    category: "Agri Commodities",
    href: "#",
    details: [
      "Origin: Rajasthan & Gujarat, India",
      "Varieties: White, Black, Brown",
      "Certifications: FSSAI, ISO 22000, Kosher",
    ],
  },
];

function ProductsInner() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Sync if URL param changes (e.g. browser back/forward)
  useEffect(() => {
    const cat = searchParams.get("category") ?? "All";
    setSelectedCategory(cat);
  }, [searchParams]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = [
    "All",
    "Rice",
    "Beverages",
    "Spices",
    "Agri Commodities",
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-amber-100">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4 sm:mb-6">
            Our Premium Products
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Discover our carefully curated selection of agricultural products,
            each meeting the highest standards of quality and sustainability.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-primary border border-primary hover:bg-primary hover:text-white"
                }`}
              >
                {category === "All" ? "All Products" : category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                imgSrc={product.img}
                description={product.description}
                category={product.category}
                alt={product.name}
                details={product.details}
                href={product.href}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Looking for Something Specific?
              </h2>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Contact our team for custom
                solutions and bulk orders tailored to your requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 text-lg">
                  Contact Sales Team
                </button>
                <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300 text-lg">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductsClient() {
  return (
    <Suspense fallback={null}>
      <ProductsInner />
    </Suspense>
  );
}
