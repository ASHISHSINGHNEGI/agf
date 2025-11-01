import Image from "next/image";

export default function FeatureCard({
  text,
  imgSrc,
  cardName,
  alt,
}: {
  text: string;
  imgSrc: string;
  cardName?: string;
  alt?: string;
}) {
  return (
    <div className="shadow-lg rounded-xl flex flex-col items-center group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2 p-4">
      <div className="w-full h-64 sm:h-72 mb-4 relative overflow-hidden rounded-lg">
        <Image
          src={imgSrc}
          alt={alt || ""}
          fill
          className="rounded-lg object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <p className="text-lg sm:text-xl md:text-2xl font-medium text-primary text-center transition-all duration-300 ease-in-out group-hover:text-secondary">
        {text}
      </p>
    </div>
  );
}
