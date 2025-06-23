// import { mockProducts } from "@/data/mockProducts";
import { notFound } from "next/navigation";
import { mockProducts  } from "@/data";
import ProductCard from "@/components/shared/ProductCard";



export default function CategoryPage() {

 

  if (mockProducts.length === 0) return notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold capitalize mb-6">
        bütün məhsullar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
       <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
