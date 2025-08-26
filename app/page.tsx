import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <div className="font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow">
        <div className="text-2xl font-bold ">
          <span className="">AGF</span> Anand Global Foods
        </div>
        <nav className="flex gap-6 text-gray-700">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Global Presence</a>
          <a href="#" className="text-orange-600 font-semibold">
            Contact Us
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-yellow-100 text-center text-white">
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
        <Card text="🌍 Exporting to 83+ Countries" />
        <Card text="☀️ 14+ Years of Excellence" />
        <Card text="✅ 100% Premium Quality Certified" />
        <Card text="🤝 Trusted by Global Distributors" />
      </section>

      {/* Featured Products */}
      <section className="p-10 text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="shadow-lg rounded-xl p-4">
            <Image
              src="/basmati.jpg"
              alt="Basmati Rice"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <p className="mt-4 font-semibold">Basmati Rice</p>
          </div>
          <div className="shadow-lg rounded-xl p-4">
            <Image
              src="/sugar.jpg"
              alt="Sugar"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <p className="mt-4 font-semibold">Sugar</p>
          </div>
          <div className="shadow-lg rounded-xl p-4">
            <Image
              src="/tea.jpg"
              alt="Tea"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <p className="mt-4 font-semibold">Tea</p>
          </div>
          <div className="shadow-lg rounded-xl p-4">
            <Image
              src="/chickpeas.jpg"
              alt="Chickpeas"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <p className="mt-4 font-semibold">Chickpeas</p>
          </div>
        </div>
      </section>
    </div>
  );
}
