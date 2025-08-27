import Image from "next/image";
import Card from "./components/card";
import FeatureCard from "./components/FeatureCard";
import About from "./pages/about/page";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative text-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/heroImage.png" // replace with rice field image in /public
            alt="Rice Field"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 py-24 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Every Grain, A Promise Kept
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Exporting Trust. Taste & Tradition to 93+ Countries
          </p>
          <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold">
            Explore Our Products
          </button>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8 text-center">
        <Card imgSrc="/earth-globe.svg" text="Exporting to 83+ Countries" />
        <Card text="14+ Years of Excellence" imgSrc="/sun.svg" />
        <Card text="100% Premium Quality Certified" imgSrc="/quality.svg" />
        <Card text="Trusted by Global Distributors" imgSrc="/handshake.svg" />
      </section>

      {/* Featured Products */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
          <FeatureCard text="Basmati Rice" imgSrc="/image/products/rice.jpg" />
          <FeatureCard text="Sugar" imgSrc="/image/products/sugar.jpg" />
          <FeatureCard text="Tea" imgSrc="/image/products/tea.jpg" />
          <FeatureCard text="Chickpeas" imgSrc="/image/products/chickpea.jpg" />
        </div>
      </section>
    </div>
  );
}
