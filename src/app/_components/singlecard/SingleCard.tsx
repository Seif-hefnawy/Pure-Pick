import React from "react";
import { Heart, ShoppingCart, Eye, Star } from "lucide-react";
import Image from "next/image";

import Link from "next/link";



export default async function SingleCard({currentProduct}) {
  
 

  return (
    <>
      
        <div className="aspect-4/5 relative overflow-hidden rounded-xl mb-4">
          {/* <img  */}
          <Image
            src={currentProduct.imageCover}
            alt={currentProduct.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Badge */}
          <div className="absolute top-1 left-4 right-4 flex items-center justify-between">
            {/* الـ Badge (على الشمال) */}
            <Link href={`/products/${currentProduct.id}`}>
            <span className="   p-1.5 rounded-full  cursor-pointer hover:scale-110 transition-transform ">
              <Eye size={20} className="text-emerald-700 " />
            </span>
            </Link>

            {/* الأيقونة الجديدة (على اليمين) */}
            <div className="  p-1.5 rounded-full  cursor-pointer hover:scale-110 transition-transform">
              <Heart
                size={18}
                className="text-emerald-700 "
              />
            </div>
          </div>

          {/* Add to Cart Button (Lucide Icon) */}
          <button className="absolute bottom-4 right-4 bg-emerald-700 dark:bg-emerald-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <ShoppingCart size={18} />
          </button>
        </div>

        <div className="ps-2 pb-2">
          <p className="text-[10px] text-stone-500 dark:text-stone-400 font-bold uppercase tracking-widest mb-1  ">
            {currentProduct?.category.name}
          </p>

          <h3 className="font-bold text-base text-on-surface/80 dark:text-stone-500 group-hover:text-emerald-800 dark:group-hover:text-emerald-800 transition-colors line-clamp-1">
            {currentProduct.title}
          </h3>
          <div className="flex items-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={12}
                className={`
        ${
          i < Math.floor(currentProduct.ratingsAverage || 0)
            ? "fill-amber-400 text-amber-400"
            : "fill-transparent text-stone-300"
        }`}
              />
            ))}
            <span className="text-[10px] text-stone-400 ml-1 font-medium">
              ({currentProduct.ratingsAverage})
            </span>
          </div>

          <div className="flex items-center gap-2 mt-1">
            <span className="font-black text-on-surface/80">
              {currentProduct.price} EGP
            </span>
          </div>
        </div>
      
    </>
  );
}
