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
    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-3 sm:px-4 py-4 sm:py-6 shadow rounded-lg bg-white text-primary">
      {/* Image container */}
      <div className="flex-shrink-0">
        <img
          src={imgSrc}
          alt={cardName || text}
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        />
      </div>

      {/* Text container */}
      <div className="text-center sm:text-left">
        <p className="font-semibold text-xs sm:text-sm lg:text-base">{text}</p>
      </div>
    </div>
  );
}
