"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { mockProducts } from "@/data";
import Image from "next/image";
import Link from "next/link";

const user = {
  name: "Nihat Əliyev",
  email: "nihat@example.com",
  avatar: "/assets/avatar.png",
};

const myOrders = [
  {
    id: "order1",
    date: "2025-06-22",
    total: 399,
    items: [mockProducts[0], mockProducts[3]],
  },
  {
    id: "order2",
    date: "2025-06-18",
    total: 1299,
    items: [mockProducts[2]],
  },
];

export default function ProfilePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">👤 Profilim</h1>

      {/* User Info */}
      <Card className="mb-8">
        <CardHeader className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={user.avatar}
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full border w-24 h-24 object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <div className="mt-2 flex gap-3">
              <Link href="/cart">
                <Button variant="outline">Səbətə bax</Button>
              </Link>
              <Button variant="destructive">Çıxış</Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Orders */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🛍️ Sifarişlərim</h2>
        {myOrders.map((order) => (
          <Card key={order.id} className="mb-4">
            <CardHeader className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Sifariş: {order.id}</h3>
                <p className="text-sm text-gray-500">Tarix: {order.date}</p>
              </div>
              <span className="text-blue-600 font-semibold">${order.total}</span>
            </CardHeader>
            <CardContent className="flex gap-4 overflow-x-auto">
              {order.items.map((item) => (
                <div key={item.id} className="min-w-[160px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={120}
                    className="rounded-md object-cover"
                  />
                  <p className="text-sm mt-1">{item.name}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
