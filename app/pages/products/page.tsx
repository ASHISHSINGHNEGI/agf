import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";

const products = [
  {
    name: "Rice",
    img: "/image/products/rice.jpg",
    description: "Premium quality rice varieties for global markets",
    category: "Grains",
  },
  {
    name: "Sugar",
    img: "/image/products/sugar.jpg",
    description: "Refined sugar products meeting international standards",
    category: "Sweeteners",
  },
  {
    name: "Tea",
    img: "/image/products/tea.jpg",
    description: "Finest tea leaves from select plantations",
    category: "Beverages",
  },
  {
    name: "Chickpeas",
    img: "/image/products/chickpea.jpg",
    description: "High-protein legumes for healthy consumption",
    category: "Pulses",
  },
];

export default function ProductsPage() {
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
            <button className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300">
              All Products
            </button>
            <button className="px-4 py-2 bg-white text-primary border border-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300">
              Grains
            </button>
            <button className="px-4 py-2 bg-white text-primary border border-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300">
              Sweeteners
            </button>
            <button className="px-4 py-2 bg-white text-primary border border-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300">
              Beverages
            </button>
            <button className="px-4 py-2 bg-white text-primary border border-primary rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300">
              Pulses
            </button>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                name={product.name}
                imgSrc={product.img}
                description={product.description}
                category={product.category}
                alt={product.name}
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
