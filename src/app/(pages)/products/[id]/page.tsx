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

export default async function ProductDetail({ params }) {
  const { id } = await params;

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products/${id}`,
  );
  const { data } = await response.json();
  console.log("detailll", data);
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
                />
              </div>
              <div className="relative aspect-4/5 bg-surface-container rounded-xl overflow-hidden group">
                <Image
                  src={data.images?.[1] || "/placeholder.jpg"}
                  alt="OLED display detail"
                  fill
                  className="object-fit group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="relative aspect-4/5 bg-surface-container rounded-xl overflow-hidden group">
                <Image
                  src={data.images?.[3] || "/placeholder.jpg"}
                  alt="OLED display detail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            </div>
          </div>
          {/* Right: Product Details */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="space-y-2 mb-6">
              <div className="flex flex-wrap gap-2 mb-4">
                <Link
                  className="bg-primary text-white text-xs px-3 pt-1 center rounded-full hover:bg-emerald-700 transition "
                  href={"categories/women"}
                >
                  {data.category.name}
                </Link>
                .
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
            <div className="bg-primary-content border border-outline-variant rounded-lg p-4 mb-1">
              <div className="flex justify-between items-center">
                <span className="text-on-surface">Total Price:</span>
                <span className="text-1xl font-bold text-primary-600">
                  149.00 EGP
                </span>
              </div>
            </div>
            {/* Product Selectors */}
            <div className="space-y-8 mb-5 mt-3">
              <div className="flex gap-3 mb-4">
                <div className="flex items-center bg-surface-container rounded-lg px-4 border border-outline-variant ">
                  <button className="p-2 text-white hover:text-primary cursor-pointer">
                    <span className=" text-lg">
                      <Minus />
                    </span>
                  </button>
                  <span className="px-4 font-bold text-white">1</span>
                  <button className="p-2 text-white hover:text-primary cursor-pointer">
                    <span className=" text-lg">
                      <Plus />
                    </span>
                  </button>
                </div>
                <button className="flex-1 bg-primary text-primary-content font-bold rounded-lg py-4 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20">
                  ADD TO BAG
                </button>
              </div>
              <button className="w-full bg-primary rounded-full py-3 font-bold text-primary-content px-2 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20 cursor-pointer ">
                ADD TO WISHLIST
              </button>
            </div>
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
        Material {data?.description?.split(' ').slice(0, 8).join(' ')} blend with timeless design. The intricate pattern ensures a versatile look.
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
        <section className="max-w-7xl mx-auto px-8 py-24">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-primary">
                Complete the Set
              </span>
              <h3 className="text-3xl font-black tracking-tighter text-on-surface">
                Electronics Favorites
              </h3>
            </div>
            <a
              className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
              href="#"
            >
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Related Product 1 */}
            <div className="group">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-4 relative transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Premium wireless noise-cancelling headphones in matte charcoal sitting on a minimalist wooden desk"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkWiX0k4uYeXyAbFQLp0gMHkp6YvOTeUXV8KZ3POjPp0lAZBymC6Y1iJVDqrFcuv1ZHArNUZ0kDzw6RHKhAlp7HPZYzi6lEKzOieTg7BYrVGc4SykZlYRqO1_fGJ10LvyzpVzD_qj_LAMJ8igGGLE0yk5ehNZK41q0bFzG0k2RLatUhR1IfR-JcuAn6RrRNvX_0leTF0E5swiAjHdIaBN_NE3zk2TZ-b-JD_m3-_CI_GENig7LqpQFKgigKDkqiGw27DeH98GG8R0W"
                />
                <button className="absolute bottom-4 right-4 bg-on-surface text-surface w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined" data-icon="add">
                    add
                  </span>
                </button>
              </div>
              <h4 className="text-sm font-bold text-on-surface">
                Sonic Aurum Pro
              </h4>
              <p className="text-xs text-outline">$349.00</p>
            </div>
            {/* Related Product 2 */}
            <div className="group">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-4 relative transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Minimalist luxury smartwatch with leather strap on a clean light background highlighting the classic face design"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxsDDDBWjRfpyxYOSNBRx7KcbZB-ywV6LbpCdWwWdl5NmmIjjOhA0DEHmbbHY663a87tcrno8YdF-E0iGJNwzvFYFr-YyBO5IvyvUy6BvIzY24lokwd_jB_O8pdbpavzfUsf2yLe9UFzN_xh63sAS6BRDwxH9bQw4-oVrDBSmK4BJoteW9G4v-JyqTWOPMc1-YvP-iHdq4Ih3PSzNLRBqZ9thZG8_qK0cTUpHETVKZLg1qi_i_8p8_5nXgmBDFHykgH5ZcV9trj8zR"
                />
                <button className="absolute bottom-4 right-4 bg-on-surface text-surface w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined" data-icon="add">
                    add
                  </span>
                </button>
              </div>
              <h4 className="text-sm font-bold text-on-surface">
                Aeon Chronos Series
              </h4>
              <p className="text-xs text-outline">$499.00</p>
            </div>
            {/* Related Product 3 */}
            <div className="group">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-4 relative transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="High-fidelity wireless earbuds and their charging case resting on a textured fabric surface with dramatic shadows"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3QEUmRFT8aCToorU8zJACryKXFhf-8Eas92dYOIc-iD9yNYKwl5icvNe3yNc0Sh0yse_6cWOyTeufEc8w_7G-hwSw7ngyKh1-sUjT6vTcHyVRRwcGFMCRwNzFNV9d5C2iOnqxqSc2WKNf07gpGBVHiWTOCxxPPxtaQ3wkDXGxQYcu2GFenE3qvWHdNdOhy1O46uO-s3v9udivJUt-f16oNLdyn774SfB37MFgn-BAcBkENHbRMCS_mg_iXdCFnR_fv966_-EvKMHh"
                />
                <button className="absolute bottom-4 right-4 bg-on-surface text-surface w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined" data-icon="add">
                    add
                  </span>
                </button>
              </div>
              <h4 className="text-sm font-bold text-on-surface">
                Iris Buds Pure
              </h4>
              <p className="text-xs text-outline">$199.00</p>
            </div>
            {/* Related Product 4 */}
            <div className="group">
              <div className="aspect-[4/5] bg-surface-container rounded-xl overflow-hidden mb-4 relative transition-all group-hover:shadow-xl group-hover:shadow-primary/5">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="Sleek ultra-slim laptop open on a modern desk with artistic wallpapers visible on the crisp display"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAltRta8FUVUM-PNYCv09YU7TD0IOopil7ZcD8vij0cLK5S7IaPJLwwSfrAf2vUL7ZCQwl5TdQgtSu8i5cIi_1wZ-zGg_UzimQbIk1kPORT4F4VxxtzQtLyuGlOYf4AjU_ffQ8csYiutRoWZP_NgW1GDNL0XDWlzGG_JAyhFiUtN3X3Fnl3HGJ_Lgi_DBlgwahKwZ0nFAe2gOhX3WxyyJ1Ulk87sgD67sejZiBD0DEe7znjGbcT2CHdKyYGUBKjHvb7R4KfMNm5-lbR"
                />
                <button className="absolute bottom-4 right-4 bg-on-surface text-surface w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined" data-icon="add">
                    add
                  </span>
                </button>
              </div>
              <h4 className="text-sm font-bold text-on-surface">
                Lumina Air M2
              </h4>
              <p className="text-xs text-outline">$1,499.00</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
