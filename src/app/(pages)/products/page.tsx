import React from "react";

import SingleCard from "@/app/_components/singlecard/SingleCard";
import { getAllProducts } from "@/app/api/Allproduct.api";
import SectionWrapper from "./../../_components/scroll/SectionWrapper";
import ScrollReveal from "@/app/_components/scroll/ScrollReveal";
import PageHeader from "@/app/_components/pageheader/DynamicSectionHeader";
import DynamicSectionHeader from "@/app/_components/pageheader/DynamicSectionHeader";

export default async function Products() {
  const data = await getAllProducts();
  console.log(data);
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
      <DynamicSectionHeader className="" title="Featured" subtitle="Products" />

      <div className="flex no-scrollbar md:grid overflow-x-auto md:overflow-visible gap-5 w-full snap-x snap-mandatory scrollbar-hide grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-4 md:px-8 h-fit items-start">
        {data?.map((currentProduct: Product) => (
          <div
            key={currentProduct._id}
            className="group cursor-pointer w-70 md:w-full shrink-0 snap-center h-fit bg-surface rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <SingleCard currentProduct={currentProduct} />
          </div>
        ))}
      </div>
    </>
  );
}
