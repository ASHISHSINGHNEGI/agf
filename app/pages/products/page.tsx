import ProductCard from "@/app/components/ProductCard";
import Image from "next/image";

const products = [
  {
    name: "Rice",
    img: "/image/products/rice.jpg", // replace with your actual image path
  },
  {
    name: "Sugar",
    img: "/image/products/sugar.jpg",
  },
  {
    name: "Tea",
    img: "/image/products/tea.jpg",
  },
  {
    name: "Chickpeas",
    img: "/image/products/chickpea.jpg",
  },
];

export default function ProductsPage() {
  return (
    <section className="min-h-screen bg-amber-200 px-16 py-12 justify-items-center">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-primary mb-10">Products</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        {products.map((product) => (
          <ProductCard imgSrc={product.img} text={product.name} />
        ))}
      </div>
    </section>
  );
}
