"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero({
  galleryImages,
  autoScrollInterval = 5000,
}: {
  galleryImages: {
    src: string;
    alt: string;
    title?: string;
    subtitle?: string;
    subtext?: string;
  }[];
  autoScrollInterval?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, autoScrollInterval);
    return () => clearInterval(timer);
  }, [galleryImages.length, autoScrollInterval, currentIndex]);

  return (
    <section className="relative text-center min-h-[60svh] md:min-h-[calc(100svh-60px)] -mx-[2.1%] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay darkening */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 p-4 sm:p-6 md:p-8 text-white w-full max-w-4xl mx-auto flex flex-col items-center">
        <div
          className="min-h-[180px] flex flex-col items-center justify-center mb-6 text-center transition-opacity duration-500"
          key={currentIndex}
        >
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-3 sm:mb-4">
            {galleryImages[currentIndex]?.title?.trim()}
          </h1>
          {galleryImages[currentIndex]?.subtitle && (
            <p className="text-base sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto text-gray-100">
              {galleryImages[currentIndex]?.subtitle.trim()}
            </p>
          )}
          {galleryImages[currentIndex]?.subtext && (
            <span className="italic text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-orange-200 font-medium tracking-wide">
              {galleryImages[currentIndex]?.subtext.trim()}
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2">
          <Link href="/pages/products" passHref>
            <button className="bg-secondary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg text-sm sm:text-base w-full sm:w-auto">
              Explore Our Products
            </button>
          </Link>
          <a
            href="/brochure/AGF-Brochure.pdf"
            download
            className="inline-flex items-center gap-2 border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-white hover:text-primary hover:scale-105 transition-all duration-300 ease-in-out text-sm sm:text-base w-full sm:w-auto justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
              <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
            </svg>
            Download Brochure
          </a>
        </div>
      </div>
    </section>
  );
}
