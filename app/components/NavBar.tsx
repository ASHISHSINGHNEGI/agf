"use client";
import Image from "next/image";
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
    <header className="w-full flex justify-between items-center text-primary px-4 py-2 relative z-50">
      {/* Logo */}
      <div className="font-bold">
        <Image
          src="/logo/logoWithoutBg.png"
          alt="AGF Logo"
          width={120}
          height={120}
          className="w-auto h-12 md:h-16"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6 text-primary text-lg">
        <Link href="/">
          <span className="hover:bg-secondary hover:text-white px-2 py-1 rounded-md transition-all duration-300 ease-in-out">
            Home
          </span>
        </Link>
        <Link href="/pages/about">
          <span className="hover:bg-secondary hover:text-white px-2 py-1 rounded-md transition-all duration-300 ease-in-out">
            About
          </span>
        </Link>
        <Link href="/pages/products">
          <span className="hover:bg-secondary hover:text-white px-2 py-1 rounded-md transition-all duration-300 ease-in-out">
            Products
          </span>
        </Link>
        <Link href="/pages/globalPresence">
          <span className="hover:bg-secondary hover:text-white px-2 py-1 rounded-md transition-all duration-300 ease-in-out">
            Global Presence
          </span>
        </Link>
        <Link href="/pages/contact">
          <span className="hover:bg-secondary hover:text-white px-2 py-1 rounded-md transition-all duration-300 ease-in-out">
            Contact Us
          </span>
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-primary hover:bg-secondary hover:text-white rounded-md transition-all duration-300 ease-in-out"
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
            <span className="block px-4 py-3 text-primary hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out">
              Home
            </span>
          </Link>
          <Link href="/pages/about" onClick={closeMenu}>
            <span className="block px-4 py-3 text-primary hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out">
              About
            </span>
          </Link>
          <Link href="/pages/products" onClick={closeMenu}>
            <span className="block px-4 py-3 text-primary hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out">
              Products
            </span>
          </Link>
          <Link href="/pages/globalPresence" onClick={closeMenu}>
            <span className="block px-4 py-3 text-primary hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out">
              Global Presence
            </span>
          </Link>
          <Link href="/pages/contact" onClick={closeMenu}>
            <span className="block px-4 py-3 text-primary hover:bg-secondary hover:text-white transition-all duration-300 ease-in-out">
              Contact Us
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
