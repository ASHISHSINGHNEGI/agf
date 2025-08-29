import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className=" w-full  flex justify-between items-center text-primary ">
      <div className=" font-bold ">
        <Image
          src="/logo/logoWithoutBg.png"
          alt="AGF Logo"
          width={150}
          height={150}
        />
      </div>
      <nav className="flex gap-6 text-primary text-lg">
        <Link href="/">
          <span className="hover:bg-primary hover:text-white px-2 py-1 rounded-md transition-all duration-800 ease-in-out">
            Home
          </span>
        </Link>
        <Link href="/pages/about">
          <span className="hover:bg-primary hover:text-white px-2 py-1 rounded-md transition-all duration-800 ease-in-out">
            About
          </span>
        </Link>
        <Link href="/pages/products">
          <span className="hover:bg-primary hover:text-white px-2 py-1 rounded-md transition-all duration-800 ease-in-out">
            Products
          </span>
        </Link>
        <Link href="/pages/globalPresence">
          <span className="hover:bg-primary hover:text-white px-2 py-1 rounded-md transition-all duration-800 ease-in-out">
            Global Presence
          </span>
        </Link>
        <Link href="/pages/contact" className="text-primary font-semibold">
            <span className="hover:bg-primary hover:text-white px-2 py-1 rounded-md transition-all duration-800 ease-in-out">
            Contact Us
          </span>
        </Link>
      </nav>
    </header>
  );
}
