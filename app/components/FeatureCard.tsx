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
    <div className="shadow-lg rounded-xl flex flex-col items-center min-h-[350px] group cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
      <div className="w-full h-72 mb-4 relative overflow-hidden rounded-lg">
        <Image
          src={imgSrc}
          alt={alt || ""}
          fill
          className="rounded-lg object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-lg"
        />
      </div>
      <p className="text-2xl font-semibold text-primary text-center transition-all duration-300 ease-in-out group-hover:text-secondary group-hover:scale-105">
        {text}
      </p>
    </div>
  );
}
