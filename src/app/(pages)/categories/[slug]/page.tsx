import React from "react";
import Link from "next/link"; // متنساش تعمل import للينك
import SingleCard from "@/app/_components/singlecard/SingleCard";
import { getAllProducts } from "@/app/api/Allproduct.api";
import DynamicSectionHeader from "@/app/_components/pageheader/DynamicSectionHeader";
import Breadcrumbs from "./../../../_components/BreadCrumbs/BreadCrumbs";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.slug;

  const data = await getAllProducts(categoryId);

  // بناخد اسم القسم من أول منتج في اللستة عشان نعرضه في الـ Breadcrumbs
  const categoryName = data?.length > 0 ? data[0].category.name : "All Products";

  return (
    <main className="py-5">
      {/* --- بداية الـ Breadcrumbs (النافبار الصغير) --- */}
      <div className="max-w-7xl mx-auto  ">
        <Breadcrumbs
          steps={[
            {
              label: "Categories",
              href: "/categories",
            },
            {
              label: categoryName, // ده اللي جبناه من أول منتج في اللستة
            },
          ]}
        />
      </div>
      {/* --- نهاية الـ Breadcrumbs --- */}

      <DynamicSectionHeader
        className="mb-10"
        title=""
        subtitle={categoryName}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 md:px-8">
        {data?.length > 0 ? (
          data.map((currentProduct: any) => (
            <div
              key={currentProduct._id}
              className="group cursor-pointer w-full h-fit bg-transparent rounded-2xl  hover:shadow-xl transition-all duration-300 "
            >
              <SingleCard currentProduct={currentProduct} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500 font-bold">
            No products found in this category.
          </div>
        )}
      </div>
    </main>
  );
}
