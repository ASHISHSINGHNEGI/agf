import Image from "next/image";

export default function About() {
  return (
    <section className=" py-16 px-16 lg:px-20" id="about">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left - Text */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            At Anand Global Foods, honesty is the foundation of everything we
            do. From nurturing strong relationships with farmers to ensuring
            unparalleled quality for our customers worldwide, our commitment to
            trust has guided our journey from a family heritage to a global
            force industry.
          </p>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/aboutUs/Still0601_00077.bmp" // replace with actual image path
            alt="About Anand Global Foods"
            width={400}
            height={450}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Journey Section */}
      <div className="mt-16 text-center">
        <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-12">
          Our Journey of Growth
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 2009 */}
          <div>
            <h4 className="text-3xl font-bold text-primary">2009</h4>
            <p className="mt-2 text-foreground">
              Founded as a family-owned business
            </p>
          </div>

          {/* 2013 */}
          <div>
            <h4 className="text-3xl font-bold text-primary">2013</h4>
            <p className="mt-2 text-foreground">
              Established a reputation for trust &amp; quality
            </p>
          </div>

          {/* 2020 */}
          <div>
            <h4 className="text-3xl font-bold text-primary">2020</h4>
            <p className="mt-2 text-foreground">
              Expanded our reach across the globe
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
