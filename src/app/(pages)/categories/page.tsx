import Image from 'next/image'
import React from 'react'
export default function CategoriesPage() {



  
  return <>
  
  <section className="py-24 px-6 md:px-8 max-w-screen-2xl mx-auto">
  {/* هيدر السيكشن المتظبط */}
  <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
    <div className="space-y-1 w-full md:w-auto text-left">
      <p className="text-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
        Explore Departments
      </p>
      <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-on-surface">
        Categories
      </h3>
    </div>
    
  </div>

  {/* جريد الأقسام */}
  <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-10">
    
    {/* 1. Men's Clothing */}
    <div className="group cursor-pointer flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-full md:h-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all duration-500 p-1.5 ">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 150px" src="/men.png" alt="Men's Clothing" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
      <p className="text-center font-black text-[10px] md:text-[13px] uppercase tracking-wider text-on-surface/80 group-hover:text-primary transition-colors">
        Men s <br className="md:hidden" /> Clothing
      </p>
    </div>

    {/* 2. Women's Clothing */}
    <div className="group cursor-pointer flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-full md:h-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all duration-500 p-1.5 ">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 150px" src="/women.png" alt="Women's Clothing" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
      <p className="text-center font-black text-[10px] md:text-[13px] uppercase tracking-wider text-on-surface/80 group-hover:text-primary transition-colors">
        Women s <br className="md:hidden" /> Clothing
      </p>
    </div>

    {/* 3. Electronics */}
    <div className="group cursor-pointer flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-full md:h-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all duration-500 p-1.5 ">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 150px" src="/elec.png" alt="Electronics" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
      <p className="text-center font-black text-[10px] md:text-[13px] uppercase tracking-wider text-on-surface/80 group-hover:text-primary transition-colors">Electronics</p>
    </div>

    {/* 4. Supermarket */}
    <div className="group cursor-pointer flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-full md:h-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all duration-500 p-1.5 ">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 150px" src="/market.png" alt="Supermarket" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
      <p className="text-center font-black text-[10px] md:text-[13px] uppercase tracking-wider text-on-surface/80 group-hover:text-primary transition-colors">Supermarket</p>
    </div>

    {/* 5. Mobiles */}
    <div className="group cursor-pointer flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-full md:h-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all duration-500 p-1.5 ">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 150px" src="/mobile.png" alt="Mobiles" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
      <p className="text-center font-black text-[10px] md:text-[13px] uppercase tracking-wider text-on-surface/80 group-hover:text-primary transition-colors">Mobiles</p>
    </div>

    {/* 6. Beauty */}
    <div className="group cursor-pointer flex flex-col items-center">
      <div className="relative w-20 h-20 md:w-full md:h-full aspect-square rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-primary transition-all duration-500 p-1.5 ">
        <div className="relative w-full h-full rounded-full overflow-hidden">
          <Image sizes="(max-width: 768px) 33vw, (max-width: 1200px) 16vw, 150px" src="/beauty.png" alt="Beauty" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
        </div>
      </div>
      <p className="text-center font-black text-[10px] md:text-[13px] uppercase tracking-wider text-on-surface/80 group-hover:text-primary transition-colors">Beauty</p>
    </div>

  </div>
</section>
  
  
  
  </>
}
