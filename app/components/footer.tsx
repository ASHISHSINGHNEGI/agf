import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="mb-2">
              <Image
                src="/logo/AGFLogo.PNG"
                // src="/logo/logoWithoutBg.avif"
                alt="AGF Logo"
                width={240}
                height={240}
                className="w-auto h-24 filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Backed by 15+ Years of Global Agri-Export Leadership – Founded by
              industry veterans with proven expertise in building global FMCG &
              food brands. Anand Global Foods is a leading agri-export company
              that specializes in exporting a wide range of products to
              international markets. With a strong commitment to quality and
              customer satisfaction, we have established ourselves as a trusted
              partner for businesses looking to expand their reach globally.
            </p>
            <div className="flex space-x-4">
              {/* <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a> */}
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-secondary transition-colors duration-300"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/about"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/products"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/globalPresence"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Global Presence
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/certifications"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/privateLabel"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Private Label
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/brochure/AGF-Brochure.pdf"
                  download
                  className="inline-flex items-center gap-1.5 text-secondary hover:text-orange-400 transition-colors duration-300 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d="M8.75 2.75a.75.75 0 0 0-1.5 0v5.69L5.03 6.22a.75.75 0 0 0-1.06 1.06l3.5 3.5a.75.75 0 0 0 1.06 0l3.5-3.5a.75.75 0 0 0-1.06-1.06L8.75 8.44V2.75Z" />
                    <path d="M3.5 9.75a.75.75 0 0 0-1.5 0v1.5A2.75 2.75 0 0 0 4.75 14h6.5A2.75 2.75 0 0 0 14 11.25v-1.5a.75.75 0 0 0-1.5 0v1.5c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-1.5Z" />
                  </svg>
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary">
              Our Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/pages/products?category=Rice"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Basmati Rice
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/products?category=Agri%20Commodities"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Sugar
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/products?category=Beverages"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Tea
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/products?category=Agri%20Commodities"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Chickpeas
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/products"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-secondary">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-300 text-sm">
                  Anand Global Foods
                  <br />
                  69-A, Ranjit Vihar
                  <br />
                  Loharka Road, Amritsar, Punjab, India
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className="text-gray-300 text-sm">
                  Info@anandglobalfoods.com
                  <br />
                  {/* sales@agf.com */}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <svg
                  className="w-5 h-5 text-secondary mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className="text-gray-300 text-sm">
                  +91 99889 43538
                  <br />
                  +971 56 195 0524
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Newsletter Subscription */}
        {/* <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4 text-secondary">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
              />
              <button className="px-6 py-2 bg-secondary text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2026 AGF. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link
                href="/policies"
                className="hover:text-white transition-colors duration-300"
              >
                Policies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
