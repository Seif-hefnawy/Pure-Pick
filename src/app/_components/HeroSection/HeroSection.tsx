import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return <>
  
  <section className="relative h-[80vh] md:h-217.5 w-full overflow-hidden -low mt-20">
            {/* 1. حاوية الصورة */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/hero-bg.png"
                alt="Curated Collection Modern Essentials"
                fill
                priority={true}
                sizes="100vw"
                className="object-cover object-right md:object-center" // مهم جداً للريسبونسيف
              />
              {/* التدرج اللوني (Gradient) عشان الكلام يظهر بوضوح */}
              <div className="absolute inset-0 bg-linear-to-r from-background via-background/40 md:via-transparent to-transparent" />
              {/* ضفنا خلفية أغمق شوية للموبايل عشان الكلام الأبيض يتشاف */}
              <div className="absolute inset-0 bg-black/20 md:hidden" />
            </div>
  
            {/* 2. المحتوى */}
            <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col justify-center items-start">
              {/* العناوين */}
              <div className="space-y-2 mb-6 w-full md:w-auto">
                <span className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-xs">
                  DISCOVER THE TREND
                </span>
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-on-surface leading-[0.9]">
                  YOUR MODERN <br />
                  <span className="text-primary">VIBE</span>
                </h1>
                <h4 className="text-xl md:text-4xl font-light italic text-on-surface-variant/80 mt-2 flex items-center gap-4">
                  <div className="h-px w-8 md:w-12 bg-primary/30" />
                  Selected Essentials
                </h4>
              </div>
  
              {/* البوكس الزجاجي (Glassmorphism Card) */}
              <div className="bg-primary-container/20 backdrop-blur-md p-6 md:p-8 rounded-2xl max-w-[90%] md:max-w-md shadow-2xl border border-white/10 mt-4 md:mt-0">
                <div className="flex justify-between items-baseline mb-3 md:mb-4">
                  <p className="text-xl md:text-2xl font-black text-on-primary-container leading-none">
                    EXPLORE NOW
                  </p>
                  <p className="text-[10px] md:text-sm font-medium text-on-primary-container/60 uppercase tracking-tighter">
                    Special Launch
                  </p>
                </div>
  
                <p className="text-on-primary-container/90 mb-6 text-xs md:text-sm leading-relaxed">
                  From cutting-edge tech to seasonal fashion. We bring you the
                  most desired items in one place.{" "}
                  <span className="font-bold text-primary ">PurePick.</span>
                </p>
  
                <button className="w-full bg-primary text-primary-content font-bold py-4 rounded-xl hover:scale-[1.02] transition-all active:scale-95 shadow-lg shadow-primary/20 uppercase text-xs tracking-widest">
                  SHOP THE COLLECTION
                </button>
              </div>
            </div>
          </section>
  
  </>
}
