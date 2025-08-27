import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-amber-200 px-16 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-amber-50 p-6 rounded-xl shadow-lg">
            <form className="flex flex-col gap-4">
              <label className="flex flex-col text-primary font-medium">
                Name
                <input
                  type="text"
                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>

              <label className="flex flex-col text-primary font-medium">
                Email
                <input
                  type="email"
                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </label>

              <label className="flex flex-col text-primary font-medium">
                Message
                <textarea
                  rows={4}
                  className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </label>

              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-8 text-primary">
            {/* India Office */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="text-green-600" />
                <h2 className="text-xl font-semibold">India</h2>
              </div>
              <p className="text-gray-700">
                Anand Global Foods <br />
                Plot No. 5, Adarsh Nagar, <br />
                Khanna - 141401, Punjab
              </p>
            </div>

            {/* UAE Office */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="text-green-600" />
                <h2 className="text-xl font-semibold">UAE</h2>
              </div>
              <p className="text-gray-700">
                Office No. E019, DDC Warehouses <br />
                Dubai, United Arab Emirates
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
