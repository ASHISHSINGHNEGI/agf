"use client";
import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    name: "Basmati Rice",
    img: "/image/products/rice.jpg",
    description: "Premium long-grain rice from the foothills of the Himalayas.",
    category: "Grains",
    href: "/pages/products/rice",
    details: [
      "Origin: Punjab, India",
      "Varieties: 1121 Basmati, Pusa Basmati",
      "Certifications: ISO 22000, HACCP",
    ],
  },
  {
    name: "Refined Sugar",
    img: "/image/products/sugar.jpg",
    description: "High-purity crystalline sugar for domestic and industrial use.",
    category: "Sweeteners",
    href: "#",
    details: [
      "Origin: Brazil & India",
      "Type: ICUMSA 45",
      "Certifications: ISO 9001, Halal",
    ],
  },
  {
    name: "Black Tea",
    img: "/image/products/tea.jpg",
    description: "Full-bodied and aromatic black tea from select plantations.",
    category: "Beverages",
    href: "#",
    details: [
      "Origin: Assam, India",
      "Grade: CTC (Crush, Tear, Curl)",
      "Certifications: Rainforest Alliance",
    ],
  },
  {
    name: "Kabuli Chickpeas",
    img: "/image/products/chickpea.jpg",
    description: "Large, creamy chickpeas, perfect for a variety of cuisines.",
    category: "Pulses",
    href: "#",
    details: [
      "Origin: India",
      "Size: 8-10mm Caliber",
      "Certifications: Non-GMO, Vegan",
    ],
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const categories = ["All", "Grains", "Sweeteners", "Beverages", "Pulses"];

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
