"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full flex justify-between items-center py-1">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-baseline gap-1.5">
            <img
              // src="/logo/logoWithoutBg.avif"
              src="/logo/AGFLogo_withoutTagLine1.avif"
              alt="Anand Global Foods Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1 text-black">
          <Link href="/">
            <span className="text-xl hover:text-primary px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out">
              Home
            </span>
          </Link>
          {/* <Link href="/pages/about">
          <span className="text-xl hover:text-primary px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out">
            About
          </span>
        </Link> */}
          <Link href="/pages/products">
            <span className="text-xl hover:text-primary px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out">
              Products
            </span>
          </Link>
          {/* <Link href="/pages/globalPresence">
          <span className="text-xl hover:text-primary px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out">
            Global Presence
          </span>
        </Link> */}
          {/* <Link href="/pages/certifications">
          <span className="text-xl hover:text-primary px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out">
            Certifications
          </span>
        </Link> */}
          <Link href="/pages/privateLabel">
            <span className="text-xl hover:text-primary px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out">
              Private Label
            </span>
          </Link>
          <Link href="/pages/contact">
            <span className="text-xl hover:text-primary px-3 py-1.5 rounded-md transition-all duration-300 ease-in-out">
              Contact Us
            </span>
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link href="/pages/contact" className="hidden md:block">
          <span className="text-[16px] bg-secondary text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out shadow-md">
            Request Quote
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-primary hover:text-primary hover:font-bold rounded-md transition-all duration-300 ease-in-out"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          <nav className="flex flex-col py-4">
            <Link href="/" onClick={closeMenu}>
              <span className="block px-4 py-3 text-primary hover:text-primary hover:font-bold transition-all duration-300 ease-in-out">
                Home
              </span>
            </Link>
            {/* <Link href="/pages/about" onClick={closeMenu}>
            <span className="block px-4 py-3 text-primary hover:text-primary hover:font-bold transition-all duration-300 ease-in-out">
              About
            </span>
          </Link> */}
            <Link href="/pages/products" onClick={closeMenu}>
              <span className="block px-4 py-3 text-primary hover:text-primary hover:font-bold transition-all duration-300 ease-in-out">
                Products
              </span>
            </Link>
            {/* <Link href="/pages/globalPresence" onClick={closeMenu}>
            <span className="block px-4 py-3 text-primary hover:text-primary hover:font-bold transition-all duration-300 ease-in-out">
              Global Presence
            </span>
          </Link> */}
            {/* <Link href="/pages/certifications" onClick={closeMenu}>
            <span className="block px-4 py-3 text-primary hover:text-primary hover:font-bold transition-all duration-300 ease-in-out">
              Certifications
            </span>
          </Link> */}
            <Link href="/pages/privateLabel" onClick={closeMenu}>
              <span className="block px-4 py-3 text-primary hover:text-primary hover:font-bold transition-all duration-300 ease-in-out">
                Private Label
              </span>
            </Link>
            <Link href="/pages/contact" onClick={closeMenu}>
              <span className="block px-4 py-3 text-primary hover:text-primary hover:font-bold transition-all duration-300 ease-in-out">
                Contact Us
              </span>
            </Link>
            <Link
              href="/pages/contact"
              onClick={closeMenu}
              className="mx-4 mt-3"
            >
              <span className="block text-center bg-secondary text-white px-5 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 ease-in-out shadow-md">
                Request Quote
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
