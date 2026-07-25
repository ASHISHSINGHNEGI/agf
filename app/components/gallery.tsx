"use client"; // Required for React hooks (useState, useEffect) in Next.js App Router

import Image from "next/image";
import { useEffect, useState } from "react";

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



  // useEffect for auto-scrolling
  useEffect(() => {
    const timer = setInterval(() => {
      nextImage();
    }, autoScrollInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [galleryImages.length, autoScrollInterval, currentIndex]);

  // Get the indices for the 5 thumbnails (2 previous, current, 2 next)
  const getThumbnailIndices = () => {
    const total = galleryImages.length;
    if (total <= 5) return Array.from({ length: total }, (_, i) => i);
    
    return [-2, -1, 0, 1, 2].map((offset) => {
      let index = (currentIndex + offset) % total;
      if (index < 0) index += total;
      return index;
    });
  };

  return (
    <div className="relative w-full h-[calc(100svh-60px)] overflow-hidden z-0">
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


     
    </div>
  );
};

export default ScrollableGallery;
