import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Anand Global Foods' full range of export-quality products including Basmati Rice, Sugar, Tea, Coffee, Spices, Chickpeas, Peanuts, and Sesame Seeds.",
};

// All product data is static — pre-render this route at build time
export const dynamic = "force-static";

export default function ProductsPage() {
  return <ProductsClient />;
}
