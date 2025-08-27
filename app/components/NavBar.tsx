import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <header className="flex justify-between items-center p-6 text-primary shadow">
      <div className="text-2xl font-bold ">
        <span className="">AGF</span> Anand Global Foods
      </div>
      <nav className="flex gap-6 text-primary">
        <Link href="/">Home</Link>
        <Link href="/pages/about">About</Link>
        <Link href="/pages/products">Products</Link>
        <Link href="/pages/globalPresence">Global Presence</Link>
        <Link href="/pages/contact" className="text-orange-600 font-semibold">
          Contact Us
        </Link>
      </nav>
    </header>
  );
}
