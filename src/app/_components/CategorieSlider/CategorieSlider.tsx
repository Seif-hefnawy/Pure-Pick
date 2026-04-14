"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { getCategorie } from "@/app/api/Categorie.api";
import DynamicSectionHeader from './../pageheader/DynamicSectionHeader';

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // بنجيب الداتا باستخدام الفانكشن بتاعتك
    getCategorie().then((res) => setCategories(res.data));
  }, []);

  return (
    <div className="">
      <DynamicSectionHeader className="my-10 pt-10" title="Shop By" subtitle="Categories" />
<section className="py-10 max-w-9xl mx-auto px-4 overflow-hidden">
        
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={3} // في الموبايل الصغير يبان 3
        breakpoints={{
          640: { slidesPerView: 4, spaceBetween: 20 },
          1024: { slidesPerView: 6, spaceBetween: 30 },
        }}
        autoplay={{ delay: 2000 }}
        className="category-swiper"
      >
        {categories.map((cat: any) => (
          <SwiperSlide key={cat._id}>
            {/* الكومبوننت بتاعك بالشكل اللي إنت عاوزه بالظبط */}
            <Link href={`/categories/${cat._id}`} className="group cursor-pointer flex flex-col items-center">
              <div className="relative w-36 h-36 rounded-full border-2 border-primary p-1 transition-all duration-300 ">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 150px" 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
              <p className="text-center font-black text-[10px] md:text-[13px] uppercase tracking-wider text-on-surface/80 group-hover:text-primary transition-colors whitespace-pre-line pt-5">
                {cat.name}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </div>
    
  );
}