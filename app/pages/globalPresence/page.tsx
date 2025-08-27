import Image from "next/image";

export default function GlobalPresence() {
  return (
    <section className="min-h-screen bg-amber-200 px-6 py-16 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-primary mb-8">Global Presence</h1>

      {/* Card */}
      <div className="bg-amber-50 rounded-xl shadow-lg p-6 flex flex-col items-center w-lg">
        {/* Map */}
        <div className="relative w-full  h-100">
          <Image
            src="/mission.jpg" // replace with your map image
            alt="Global Presence Map"
            fill
            className="object-contain"
          />
        </div>

        {/* Text */}
        <p className="mt-6 text-lg text-primary font-medium">
          Supplying to 93+ Countries
        </p>
      </div>
    </section>
  );
}
