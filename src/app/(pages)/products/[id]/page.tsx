import {
  Minus,
  Plus,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  Headphones,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProductAction from "./ProductAction";
import { getRelatedProducts } from "@/app/api/RelatedProducts";
import SingleCard from "@/app/_components/singlecard/SingleCard";



export default async function ProductDetail({ params } : {params : any}) {
  const { id } = await params;

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
  );
  
  const { data } = await response.json();
  console.log("detailll", data);
  const relatedProducts = await getRelatedProducts(data.category._id);
  return (
    <>
      <section className="pt-24 pb-20">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-8 py-6">
          <nav className="flex text-xs font-medium uppercase tracking-widest text-outline">
            <Link className="hover:text-primary text-on-surface" href="/">
              Home
            </Link>
            <span className="mx-3">/</span>
            <Link className="hover:text-primary text-on-surface" href="#">
              {data.category.name}
            </Link>
            <span className="mx-3">/</span>
            <Link
              className="hover:text-primary text-on-surface"
              href="/categories/women"
            >
              {data.title}
            </Link>
            <span className="mx-3">/</span>
            <span className="text-primary">{data.title}</span>
          </nav>
        </div>
        {/* Product Hero Section */}
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Image Gallery (Asymmetric Layout) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-video bg-surface rounded-xl overflow-hidden group">
                <Image
                  src={data.imageCover}
                  alt="Premium smartphone description"
                  fill // بتخلي الصورة تملا الـ div الأب
                  className="object-contain group-hover:scale-105 transition-transform duration-700"
                  priority // عشان دي أول صورة وأهم صورة في الـ LCP
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized
                />
              </div>
              <div className="relative aspect-4/5 bg-surface-container rounded-xl overflow-hidden group">
                <Image
                  src={data.images?.[1] || "/placeholder.jpg"}
                  alt="OLED display detail"
                  fill
                  className="object-fit group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized
                />
              </div>
              <div className="relative aspect-4/5 bg-surface-container rounded-xl overflow-hidden group">
                <Image
                  src={data.images?.[3] || "/placeholder.jpg"}
                  alt="OLED display detail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  unoptimized
                />
              </div>
            </div>
          </div>
          {/* Right: Product Details */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="space-y-2 mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Link
                  className="bg-primary text-white text-xs py-1 px-2 center rounded-full hover:bg-emerald-700 transition "
                  href={"categories/women"}
                >
                  {data.category.name}
                </Link>
                
                <span className="bg-primary text-white rounded-full text-xs px-3 pt-1">
                  {data.brand.name}
                </span>
              </div>
              <h1 className="text-5xl font-black tracking-tighter text-on-surface leading-none">
                {data.title}
              </h1>
            </div>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`
        ${
          i < Math.floor(data.ratingsAverage || 0)
            ? "fill-amber-400 text-amber-400"
            : "fill-transparent text-stone-300"
        }`}
                  />
                ))}
              </div>
              <span className="text-xs text-on-sruface font-medium tracking-wider">
                ({data.ratingsQuantity}) REVIEWS
              </span>
            </div>

            <div className="mb-8">
              <p className="text-3xl font-bold text-on-surface">
                {data.price} EGP
              </p>
              <p className="text-sm text-outlined mt-1">
                +{data.quantity} Avaialable
              </p>
            </div>
            <p className="text-lg text-on-surface font-medium mb-10">
              {data.description}
            </p>
            <ProductAction price={data.price}/>
            {/* Specs Summary Bento */}
            <div className="grid grid-cols-2 gap-4">
              {/* Free Delivery */}
              <div className="p-4 bg-surface-container-low rounded-xl flex flex-col items-start transition-all hover:bg-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Truck
                    className="text-primary font-bold "
                    size={20}
                    strokeWidth={2}
                  />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-tight">
                  Free Delivery
                </h4>
                <p className="text-[10px] text-primary mt-0.5">
                  Orders over $50
                </p>
              </div>

              {/* 30 Days Return */}
              <div className="p-4 bg-surface-container-low rounded-xl flex flex-col items-start transition-all hover:bg-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <RotateCcw
                    className="text-primary font-bold "
                    size={20}
                    strokeWidth={2}
                  />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-tight">
                  30 Days Return
                </h4>
                <p className="text-[10px] text-primary mt-0.5">
                  Money back guarantee
                </p>
              </div>

              {/* Secure Payment */}
              <div className="p-4 bg-surface-container-low rounded-xl flex flex-col items-start transition-all hover:bg-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <ShieldCheck
                    className="text-primary font-bold  "
                    size={20}
                    strokeWidth={2}
                  />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-tight">
                  Secure Payment
                </h4>
                <p className="text-[10px] text-primary mt-0.5">
                  100% Protected
                </p>
              </div>

              {/* Support */}
              <div className="p-4 bg-surface-container-low rounded-xl flex flex-col items-start transition-all hover:bg-surface-container">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <Headphones
                    className="text-primary font-bold "
                    size={20}
                    strokeWidth={2}
                  />
                </div>
                <h4 className="text-xs font-bold text-white uppercase tracking-tight">
                  24/7 Support
                </h4>
                <p className="text-[10px] text-primary mt-0.5">
                  Always available
                </p>
              </div>
            </div>
          </div>
          
        </div>
        {/* Product Specifications Section (Revised) */}
        <div className="py-12 "> 
  <div className="max-w-5xl mx-auto px-6 flex flex-col items-center"> {/* إضافة Flex هنا لتوسيط الـ About */}
    
    {/* About - متوسّط */}
    <div className="mb-12 max-w-2xl text-center"> {/* text-center للتوسيط */}
      <h3 className="text-xl font-bold  text-on-surface mb-3">
        About this Product
      </h3>
      <p className="text-xs text-outlined leading-relaxed opacity-80">
        {data?.description} 
      </p>
    </div>

    {/* الـ Grid: جعلناه mx-auto وزودنا الـ gap */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 w-full max-w-4xl mx-auto">
      
      {/* Product Information - Compact */}
      <div className=" p-6 rounded-xl border border-outline-variant/20 shadow-sm h-full">
        <h4 className="text-sm font-bold text-on-surface mb-6 opacity-90">
          Product Information
        </h4>
        <div className="space-y-4 ">
          {[
            { label: "Category", value: data?.category?.name || "Women's Fashion" },
            { label: "Brand", value: data?.brand?.name || "DeFacto" },
            { label: "Sold", value: "289+ items" }
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b border-outline-variant/5 pb-3 last:border-0 last:pb-0">
              <span className="text-[10px] text-on-surface uppercase font-semibold tracking-wider">
                {item.label}
              </span>
              <span className="text-[12px] text-on-surface font-bold">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features - Compact */}
      <div className=" p-6 rounded-xl border border-outline-variant/20 shadow-sm h-full">
        <h4 className="text-sm font-bold text-on-surface mb-6 opacity-90">
          Key Features
        </h4>
        <ul className="space-y-4">
          {[
            "Premium Quality Product",
            "100% Authentic Guarantee",
            "Secure Packaging",
            "Quality Tested"
          ].map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                <Check size={12} className="text-emerald-500" strokeWidth={3} />
              </div>
              <span className="text-[12px] font-medium text-on-surface">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  </div>
          </div>
        {/* Related Items (Electronics) */}
        <div className="max-w-7xl mx-auto px-8 py-24">
  {/* الهيدر بتاع السكشن */}
  <div className="flex justify-between items-end mb-12">
    <div>
      <h3 className="text-3xl font-black tracking-tighter text-on-surface">
        You May Also <span className="text-primary">Like</span>
      </h3>
    </div>
    <Link
      className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
      href={`/categories/women`} 
    >
      View All
    </Link>
  </div>

  {/* الـ Grid اللي هيشيل السنجل كاردس */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
  {relatedProducts?.slice(0, 4).map((item: any) => (
    /* ضيفنا div هنا عشان نعزل الـ Card ونجبره يترص صح */
    <div key={item._id} className="w-full  flex flex-col group cursor-pointer  md:w-full shrink-0 snap-center h-fit bg-surface rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]
                hover:shadow-xl transition-all duration-300"> 
      <SingleCard currentProduct={item} />
    </div>
  ))}
</div>
</div>
      </section>
    </>
  );
}
