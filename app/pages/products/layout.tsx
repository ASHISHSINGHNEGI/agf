import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Products",
  description: "Explore our premium catalogue of 18+ high-quality products including Basmati Rice, Refined Sugar, Tea, Coffee, Spices, and Agri-Commodities.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
