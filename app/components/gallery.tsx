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

      {/* Navigation */}

      {/* Thumbnails in bottom right corner */}
      <div className="absolute bottom-6 right-6 flex items-center justify-end gap-2 sm:gap-3 z-20 max-w-[90vw]">
        {getThumbnailIndices().map((index) => {
          const image = galleryImages[index];
          const isActive = index === currentIndex;
          
          return (
            <button
              key={`thumb-${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`relative flex-shrink-0 transition-all duration-500 ease-in-out rounded-lg overflow-hidden border-2 ${
                isActive
                  ? "w-24 h-16 sm:w-32 sm:h-24 border-secondary scale-105 shadow-xl shadow-black/50 opacity-100 z-10"
                  : "w-16 h-10 sm:w-20 sm:h-14 border-white/30 opacity-60 hover:opacity-100 hover:border-white/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={`Thumbnail for ${image.alt}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100px, 150px"
              />
              
              {/* Decreasing progress line for active thumbnail */}
              {isActive && (
                <div 
                  key={`progress-${currentIndex}`}
                  className="absolute bottom-0 left-0 h-1.5 bg-secondary z-20 animate-shrink origin-left"
                  style={{ animationDuration: `${autoScrollInterval}ms` }}
                />
              )}

              {/* Dark overlay for inactive thumbnails */}
              {!isActive && (
                <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors duration-300 z-10"></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ScrollableGallery;
