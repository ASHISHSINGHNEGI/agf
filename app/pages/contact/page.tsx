import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8 -mx-[2.1%] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
            <GlobeAltIcon className="w-4 h-4" />
            Global Trade Starts Here
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Inquiry / Request for Quote
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Looking to import premium agri-products? Fill out the form below with your requirements, and our export team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-100">
                <h2 className="text-2xl font-bold text-primary mb-8">
                  Submit Your Requirements
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                        required
                      />
                    </div>

                    {/* Company */}
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-gray-700 mb-2">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Doe Imports Ltd."
                        className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-gray-700 mb-2">
                        Phone / WhatsApp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 234 567 8900"
                        className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                        required
                      />
                    </div>

                    {/* Country */}
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-gray-700 mb-2">
                        Destination Country <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. United Kingdom"
                        className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                        required
                      />
                    </div>

                    {/* Product */}
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold text-gray-700 mb-2">
                        Product Interested In <span className="text-red-500">*</span>
                      </label>
                      <select className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors text-gray-700">
                        <option value="">Select a product category</option>
                        <option value="rice">Basmati & Non-Basmati Rice</option>
                        <option value="sugar">Refined Sugar</option>
                        <option value="tea">Black Tea</option>
                        <option value="coffee">Coffee</option>
                        <option value="spices">Whole & Ground Spices</option>
                        <option value="agri">Other Agri Commodities</option>
                      </select>
                    </div>

                    {/* Quantity */}
                    <div className="flex flex-col sm:col-span-2">
                      <label className="text-sm font-semibold text-gray-700 mb-2">
                        Quantity Requirement <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5x20ft FCL or 100 Metric Tons"
                        className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="flex flex-col sm:col-span-2">
                      <label className="text-sm font-semibold text-gray-700 mb-2">
                        Additional Details / Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Please include details about packaging requirements, target price, or specific certifications needed..."
                        className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-secondary text-white font-semibold py-3 sm:py-4 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 mt-4"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-primary text-white rounded-2xl shadow-xl p-8 sticky top-28">
                <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
                
                <div className="space-y-8">
                  {/* Global HQ */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Global Headquarters</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Anand Global Foods<br />
                        Plot No. 5, Adarsh Nagar,<br />
                        Khanna - 141401, Punjab, India
                      </p>
                    </div>
                  </div>

                  {/* UAE Branch */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <GlobeAltIcon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">UAE Office</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Office No. E019, DDC Warehouses<br />
                        Dubai, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Call Us</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        +91 99889 43538 (India)<br />
                        +971 56 195 0524 (UAE)
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <EnvelopeIcon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Email Us</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Info@anandglobalfoods.com<br />
                        sales@anandglobalfoods.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Pattern */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
