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
    <div className="shadow-lg rounded-xl p-4 bg-white flex flex-col items-center min-h-[350px]">
      <Image
        src={imgSrc}
        alt={alt || ""}
        width={200}
        height={900}
        className="rounded-lg justify-center mx-auto flex-1 object-contain"
      />
      <p className="mt-4 font-semibold text-primary text-center">{text}</p>
    </div>
  );
}
