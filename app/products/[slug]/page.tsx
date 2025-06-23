import React from "react";
import { notFound } from "next/navigation";
import { mockProducts } from "@/data";
import ProductCard from "@/components/shared/ProductCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export default function CategoryPage({ params }: Props) {
  const { slug } = React.use(params);

  const products = mockProducts.filter(
    (product) => product.category === slug
  );

  if (products.length === 0) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {slug === "komputerler"
          ? "Kompüterlər"
          : slug === "telefonlar"
          ? "Telefonlar"
          : slug === "aksessuarlar"
          ? "Aksessuarlar"
          : slug === "televizorlar"
          ? "Televizorlar"
          : slug}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
