import Image from "next/image";
import Card from "./components/card";
import FeatureCard from "./components/FeatureCard";
import Gallery from "./components/gallery";
import Link from "next/link";
import galleryImages from "./assets/gallaryImage.json";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative text-center min-h-[calc(100svh-60px)] -mx-[2.1%] flex items-center justify-center">
        <div className="absolute inset-0">
          <Gallery galleryImages={galleryImages} />
        </div>
        <div className="relative p-4 sm:p-6 md:p-8 text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 leading-tight">
            Every Grain, A Promise Kept
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-4xl mx-auto">
            Exporting Trust & Tradition To The World
          </p>
          <Link href="/pages/products" passHref>
            <button className="bg-secondary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg text-sm sm:text-base">
              Explore Our Products
            </button>
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 text-center mt-8 sm:mt-0">
        <Card
          imgSrc="/earth-globe.svg"
          text="Global Reach, Local Expertise: Delivering to 100+ countries."
        />
        <Card
          text="A Legacy of 14+ Years: Cultivating and exporting excellence."
          imgSrc="/sun.svg"
        />
        <Card
          text="Quality You Can Trace: Certified for purity from soil to ship."
          imgSrc="/quality.svg"
        />
        <Card
          text="The Partner of Choice: Building trust with global distributors."
          imgSrc="/handshake.svg"
        />
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
