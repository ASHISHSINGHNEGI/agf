import Image from "next/image";
import Card from "./components/card";
import FeatureCard from "./components/FeatureCard";
import Gallery from "./components/gallery";

export default function Home() {
  const galleryImages = [
    {
      src: "/heroGallery/1.jpg",
      alt: "A vast, sunlit rice paddy field during the day.",
    },
    {
      src: "/heroGallery/2.jpg",
      alt: "Farmers harvesting golden rice during sunset.",
    },
    {
      src: "/heroGallery/3.jpg",
      alt: "Woven sacks filled with high-quality white rice.",
    },
    {
      src: "/heroGallery/4.jpg",
      alt: "A close-up shot of individual grains of uncooked rice.",
    },
    {
      src: "/heroGallery/5.jpg",
      alt: "Stunning aerial view of cascading rice terraces.",
    },
    {
      src: "/heroGallery/6.jpg",
      alt: "A bowl of perfectly cooked, steaming white rice.",
    },
  ];
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative text-center flex flex-col-reverse min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] -mx-[2.1%] bg-black/40">
        <div className="absolute inset-0">
          <Gallery galleryImages={galleryImages} />
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-30 pt-4 sm:pt-5 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              Every Grain, A Promise Kept
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 text-white max-w-4xl px-4">
              Exporting Trust. Taste & Tradition to 93+ Countries
            </p>
          </div>
          <button className="bg-secondary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-white hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-lg text-sm sm:text-base">
            Explore Our Products
          </button>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 text-center">
        <Card imgSrc="/earth-globe.svg" text="Exporting to 83+ Countries" />
        <Card text="14+ Years of Excellence" imgSrc="/sun.svg" />
        <Card text="100% Premium Quality Certified" imgSrc="/quality.svg" />
        <Card text="Trusted by Global Distributors" imgSrc="/handshake.svg" />
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
