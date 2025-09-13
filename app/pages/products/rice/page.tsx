import Image from "next/image";
import {
  CheckCircleIcon,
  CubeIcon,
  GlobeAltIcon,
  ScaleIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

const galleryImages = [
  {
    src: "/image/products/rice.jpg",
    alt: "A bowl of perfectly cooked Basmati rice.",
  },
  {
    src: "/heroGallery/1.jpg",
    alt: "Vast, sunlit rice paddy fields in Punjab.",
  },
  {
    src: "/image/rice/_64A8552-1.jpg",
    alt: "Close-up of long, uncooked Basmati rice grains.",
  },
  {
    src: "/heroGallery/3.jpg",
    alt: "Woven sacks filled with high-quality white rice.",
  },
];

const specifications = [
  { label: "Average Grain Length", value: "8.4 mm" },
  { label: "Moisture Content", value: "12% Max" },
  { label: "Broken Ratio", value: "2% Max" },
  { label: "Purity", value: "95%" },
  { label: "Admixture", value: "5% Max" },
  { label: "Certifications", value: "ISO 22000, HACCP, FSSAI" },
];

export default function RiceProductPage() {
  return (
    <div className="bg-gray-50">
      {/* Product Hero */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Gallery */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`aspect-w-1 aspect-h-1 rounded-xl overflow-hidden shadow-lg ${
                  index === 0 ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Product Details */}
          <div>
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Grains
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mt-2 mb-4">
              Premium 1121 Basmati Rice
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Renowned for its long, slender grains, delicate aroma, and fluffy
              texture, our Basmati rice is cultivated in the fertile plains of
              Punjab. Each grain is a testament to the region's rich
              agricultural heritage, promising an authentic and flavorful dining
              experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300">
                Request a Quote
              </button>
              <button className="border-2 border-secondary text-secondary px-8 py-3 rounded-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300">
                Download Spec Sheet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sourcing Story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">
                From the Heart of Punjab
              </h2>
              <p className="text-gray-600 mb-4">
                Our Basmati rice is sourced directly from local farming
                communities in Punjab, India—a region celebrated for producing
                the world's finest rice. We partner with farmers who employ
                traditional, sustainable methods passed down through
                generations.
              </p>
              <p className="text-gray-600">
                This commitment to heritage and quality ensures that every grain
                is not only superior in taste and aroma but also grown with
                respect for the environment and the local community.
              </p>
            </div>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/heroGallery/2.jpg"
                alt="Farmers harvesting golden rice during sunset."
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Specifications Table */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
              Technical Specifications
            </h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {specifications.map((spec, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4">
                      <ScaleIcon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">
                        {spec.label}
                      </p>
                      <p className="text-gray-600">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packaging and Logistics */}
          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8">
              Packaging & Logistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="bg-gray-50 p-6 rounded-xl">
                <CubeIcon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Packaging Options
                </h3>
                <p className="text-gray-600">
                  Available in 1kg, 5kg, 10kg, and 25kg PP bags. Custom branding
                  and packaging solutions are available on request.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <TruckIcon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Minimum Order
                </h3>
                <p className="text-gray-600">
                  The minimum order quantity (MOQ) is 1x20ft container.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <GlobeAltIcon className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Port of Loading
                </h3>
                <p className="text-gray-600">
                  Mundra Port, Gujarat, India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
