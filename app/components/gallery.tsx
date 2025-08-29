"use client"; // Required for React hooks (useState, useEffect) in Next.js App Router

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ScrollableGallery = ({
  galleryImages,
  autoScrollInterval = 5000, // Default interval 5 seconds
}: {
  galleryImages: { src: string; alt: string }[];
  autoScrollInterval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // useEffect for auto-scrolling
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, autoScrollInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [galleryImages.length, autoScrollInterval]);

  return (
    <div className="relative w-full h-[75vh] overflow-hidden ">
      {galleryImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{
            transitionDelay: index === currentIndex ? "0ms" : "0ms",
          }}
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

      {/* Overlay (optional for darkening) */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Navigation */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20 hover:bg-black/60 transition-all duration-800 ease-in-out hover:scale-150 hover:shadow-lg"
        aria-label="Previous Image"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full z-20 hover:bg-black/60 transition-all duration-800 ease-in-out hover:scale-150 hover:shadow-lg"
        aria-label="Next Image"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ease-in-out hover:scale-125 ${
              index === currentIndex
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollableGallery;
