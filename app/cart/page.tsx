"use client";

import { useCart } from "@/lib/context/CartContext ";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Səbət boşdur 🛒</h1>
        <Link href="/" className="text-blue-600 mt-4 inline-block">
          Məhsullara bax
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Səbətim</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-4 rounded-md shadow-sm">
            <div className="flex items-center space-x-4">
              <Image src={item.image} alt={item.name} width={80} height={80} className="rounded w-20 h-20 object-cover" />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">Miqdar: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-blue-600 font-bold">${item.price * item.quantity}</span>
              <Button variant="destructive" onClick={() => removeFromCart(item.id)}>
                Sil
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8 items-center border-t pt-4">
        <span className="text-xl font-bold">Toplam: ${total}</span>
        <Button onClick={clearCart} variant="outline">Səbəti təmizlə</Button>
      </div>
    </div>
  );
}
