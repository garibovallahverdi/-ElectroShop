"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/lib/context/CartContext ";
import Link from "next/link";

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

type Props = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: Props) {
      const { cart, addToCart, removeFromCart, clearCart } = useCart();
    
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={250}
          className="w-full h-56 object-fill rounded-t-md"
        />
      </CardHeader>
      <CardContent className="p-4">
        <Link href={`/products/${product.category}/${product.id}`} className="mb-2 ">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        </Link>
        <p className="text-gray-600 text-sm line-clamp-2">{product.description}</p>
      </CardContent>
      <CardFooter className="flex items-center  justify-between px-4 pb-4">
        <span className="text-blue-600 font-bold cur">${product.price}</span>
        <Button className="cursor-pointer" onClick={() => addToCart?.(product)}>Səbətə əlavə et</Button>
      </CardFooter>
    </Card>
  );
}
