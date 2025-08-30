import Image from "next/image";
import React from "react";

interface ProductCardProps {
  name: string;
  imgSrc: string;
  description: string;
  category: string;
  alt?: string;
}

function ProductCard({
  name,
  imgSrc,
  description,
  category,
  alt,
}: ProductCardProps) {
  return (
    <div className="group">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
        {/* Product Image */}
        <div className="relative h-64 sm:h-72 overflow-hidden">
          <Image
            src={imgSrc}
            alt={alt || name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-secondary/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
              {category}
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">
            {name}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
            {description}
          </p>
          <div className="flex gap-3">
            <button className="flex-1 bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 text-sm sm:text-base">
              View Details
            </button>
            <button className="px-4 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-300 text-sm sm:text-base">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
