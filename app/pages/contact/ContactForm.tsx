"use client";

import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const RECIPIENT = "sales@anandglobalfoods.com";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `RFQ from ${form.name} – ${form.company} | ${form.product || "General Inquiry"}`,
    );
    const body = encodeURIComponent(
      `New Inquiry / RFQ — Anand Global Foods\n` +
        `${"=".repeat(45)}\n\n` +
        `Name:                ${form.name}\n` +
        `Company:             ${form.company}\n` +
        `Email:               ${form.email}\n` +
        `Phone / WhatsApp:    ${form.phone}\n` +
        `Destination Country: ${form.country}\n` +
        `Product Interested:  ${form.product || "Not specified"}\n` +
        `Quantity Required:   ${form.quantity}\n\n` +
        `Additional Details:\n${form.message || "None"}\n\n` +
        `${"=".repeat(45)}\n` +
        `Sent via AGF Website Contact Form`,
    );

    window.location.href = `mailto:${RECIPIENT}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
      {/* Form Section */}
      <div className="lg:col-span-2">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-100">
          <h2 className="text-2xl font-bold text-primary mb-8">
            Submit Your Requirements
          </h2>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-green-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary">
                Your email client is opening!
              </h3>
              <p className="text-gray-500 max-w-sm">
                Your inquiry has been pre-filled in your email app. Hit{" "}
                <strong>Send</strong> to submit it to our team — we'll respond
                within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm text-secondary hover:underline"
              >
                ← Submit another inquiry
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                    required
                    autoFocus
                  />
                </div>

                {/* Company */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
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
                    name="email"
                    value={form.email}
                    onChange={handleChange}
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
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
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
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="e.g. United Kingdom"
                    className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors"
                    required
                  />
                </div>

                {/* Product */}
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-700 mb-2">
                    Product Interested In{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors text-gray-700"
                  >
                    <option value="">Select a product category</option>
                    <option value="Rice">Rice</option>
                    <option value="Beverages">Beverages</option>
                    <option value="Spices">Spices</option>
                    <option value="Agri Commodities">Agri Commodities</option>
                  </select>
                </div>

                {/* Quantity */}
                <div className="flex flex-col sm:col-span-2">
                  <label className="text-sm font-semibold text-gray-700 mb-2">
                    Quantity Requirement <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={form.quantity}
                    onChange={handleChange}
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
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Please include details about packaging requirements, target price, or specific certifications needed..."
                    className="p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 hover:bg-white transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-secondary text-white font-semibold py-3 sm:py-4 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 mt-4"
              >
                Submit Inquiry
              </button>
            </form>
          )}
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
                <h4 className="text-lg font-semibold mb-2">
                  Global Headquarters
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Anand Global Foods
                  <br />
                  69-A, Ranjit Vihar, Loharka Road, Amritsar, Punjab, India
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
                  +91 99889 43538 (India)
                  <br />
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
                  Info@anandglobalfoods.com
                  <br />
                  sales@anandglobalfoods.com
                </p>
              </div>
            </div>

            {/* Brochure Download */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm text-gray-400 mb-3">
                Want a full overview of our products &amp; services?
              </p>
              <a
                href="/brochure/AGF-Brochure.pdf"
                download
                className="inline-flex items-center gap-2 bg-secondary text-white px-5 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 text-sm w-full justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                  <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
                </svg>
                Download Our Brochure
              </a>
            </div>
          </div>

          {/* Decorative Pattern */}
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
