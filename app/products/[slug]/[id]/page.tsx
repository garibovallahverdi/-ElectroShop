"use client";

import React from "react";
import { useCart } from "@/lib/context/CartContext ";
import { mockProducts } from "@/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { notFound } from "next/navigation";
import Image from "next/image";

type Props = {
  params: Promise<{ id: string }>;
};

export default function ProductDetailPage({ params }: Props) {
  const { id } = React.use(params);
  const product = mockProducts.find((p) => p.id === id);
  const { addToCart } = useCart();

  if (!product) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className="rounded-lg w-full object-cover shadow"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <Badge variant="outline" className="mb-4 capitalize">
            {product.category}
          </Badge>
          <p className="text-gray-700 text-base mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
            ${product.price}
          </p>

          <Button size="lg" onClick={() => addToCart(product)}>
            Səbətə əlavə et
          </Button>
        </div>
      </div>
    </div>
  );
}
