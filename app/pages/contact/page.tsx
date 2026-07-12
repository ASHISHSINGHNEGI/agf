import type { Metadata } from "next";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Anand Global Foods. Submit your Request for Quote (RFQ) for premium agri-products, or contact our global headquarters in India or our UAE office.",
};

export const dynamic = "force-static";

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
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
