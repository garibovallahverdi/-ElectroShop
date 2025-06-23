"use client";

import { mockProducts } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "@/components/shared/ProductCard";

const featuredProducts = mockProducts.reduce((acc, product) => {
  const exists = acc.find((p) => p.category === product.category);
  if (!exists) {
    const sameCategory = mockProducts
      .filter((p) => p.category === product.category)
      .slice(0, 2);
    return [...acc, ...sameCategory];
  }
  return acc;
}, [] as typeof mockProducts);

export default function Home() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative bg-blue-100 rounded-xl p-10 mb-16 shadow-lg overflow-hidden">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            💡 ElectroShop – Rəqəmsal Dünyanı Kəşf Et!
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Kompüter, telefon, aksessuar və televizor kimi yüzlərlə məhsulu sərfəli qiymətlərlə təklif edirik.
          </p>
          <Link href="/products">
            <Button size="lg" className="text-white bg-blue-600 hover:bg-blue-700">
              Məhsullara bax
            </Button>
          </Link>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 md:opacity-40">
          <Image src="/assets/hero-banner.png" alt="hero" width={400} height={300} />
        </div>
      </section>

      {/* Featured Slider */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">✨ Seçilmiş Məhsullar</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
             <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* All Products Section */}
      <section></section>
        <h2 className="text-2xl font-bold mb-6 text-center">
          🛒 Top Məhsullar
        </h2>
          <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id}>
                         <ProductCard product={product} />

            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  );
}
