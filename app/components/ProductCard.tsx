import Image from "next/image";
import React from "react";

function ProductCard({
  imgSrc,
  text,
  alt,
  cardName,
}: {
  text: string;
  imgSrc: string;
  cardName?: string;
  alt?: string;
}) {
  return (
    <div
      key={text}
      className="rounded-xl overflow-hidden bg-amber-50 shadow-lg w-100"
    >
      {/* Product Image */}
      <div className="relative min-w-5 h-64 ">
        <Image src={imgSrc} alt={alt || ""} fill className="object-cover" />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col items-center justify-between ">
        <h2 className="text-2xl font-semibold text-primary">{text}</h2>
        <button className="mt-3 px-4 py-2 border border-primary rounded-lg text-primary hover:bg-primary hover:text-white transition">
          SEE ALL
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
