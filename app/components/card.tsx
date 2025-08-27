export default function Card({
  text,
  imgSrc,
  cardName,
}: {
  text: string;
  imgSrc: string;
  cardName?: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 px-3 py-6 shadow rounded-lg bg-white text-primary">
      {/* Image container – spans 1 of 3 columns */}
      <div className="col-span-1">
        <img
          src={imgSrc}
          alt={cardName}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Text container – spans 2 of 3 columns */}
      <div className="col-span-2 flex items-center">
        <p className="font-semibold text-lg">{text}</p>
      </div>
    </div>
  );
}
