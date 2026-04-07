import React from "react";

import SingleCard from "@/app/_components/singlecard/SingleCard";
import { getAllProducts } from "@/app/api/Allproduct.api";


export default async function Products() {
  const data = await getAllProducts();
  console.log(data)
  interface Product {
    _id: string;
    title: string;
    imageCover: string;
    price: number;
    category: string;
    ratingsAverage?: number;
    name: any;
  }
  
  return (
    <>
      <div className="container mx-auto px-8 mb-10">
        <h3 className="text-3xl md:text-4xl font-black text-on-surface  tracking-tight">
          <span className="text-primary">Featured</span> Products
        </h3>
      </div>
      <div className="flex md:grid overflow-x-auto md:overflow-visible gap-5 w-full snap-x snap-mandatory scrollbar-hide grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-8 h-fit items-start">
        {/* Product Card Template */}
       
        {data?.map((currentProduct:Product) => (
          <div
            key={currentProduct._id}
            className="group cursor-pointer w-70 md:w-full shrink-0 snap-center h-fit bg-surface rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                hover:shadow-xl transition-all duration-300 "
          >
            <SingleCard currentProduct={currentProduct} />
          </div>
        ))}
       

      </div>
    </>
  );
}
