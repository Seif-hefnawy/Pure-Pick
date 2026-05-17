import LoginForm from '@/app/_components/Form/LoginForm'
import { Clock, ShieldCheck, Truck, } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Login() {
  return <>
  
   <div className="relative min-h-screen w-full overflow-hidden ">
        {/* 1. الخلفية الثابتة */}
        <div className="fixed inset-0 z-[-1]">
          <Image
            src="/RegHero.png"
            alt="Curated Collection"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-stone-950/85 md:bg-linear-to-r md:from-stone-950 md:via-stone-950/30 lg: md:to-transparent" />
        </div>
  
        {/* 2. المحتوى الرئيسي */}
        <div className="relative z-10 flex min-h-screen flex-col md:flex-row items-center justify-center px-6 md:px-20 py-12 md:py-0 gap-10 md:gap-24">

          <section className="w-full md:w-1/2 flex flex-col items-center text-center">
  <div className="max-w-2xl w-full bg-white dark:bg-stone-900/40 rounded-4x1 overflow-hidden shadow-2xl border border-white/10 p-6 md:p-8">
    <div className="relative w-full aspect-16/10 mb-8 rounded-2xl overflow-hidden bg-stone-50 flex items-center justify-center">
      <Image
        src="/FreshCartImage.png" 
        alt="Fresh Products"
        fill
        loading='lazy'
        className="object-cover"
      />
      {/* الورقة الخضراء اللي في الركن */}
      
    </div>

    {/* 2. العنوان والوصف */}
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-stone-900 dark:text-white mb-4 tracking-tight">
        <span className='text-primary'>PurePick</span> - Your One-Stop Shop for Amazing Products
      </h1>
      <p className="text-stone-500 dark:text-stone-400 text-base md:text-lg max-w-md mx-auto">
        Join thousands of happy customers who trust FreshCart for their daily grocery needs.
      </p>
    </div>
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 border-t border-stone-100 dark:border-white/5 pt-8">
      
      {/* Free Delivery */}
      <div className="flex items-center gap-2">
        <Truck className="w-5 h-5 text-emerald-500" />
        <span className="text-xs md:text-sm font-bold text-stone-700 dark:text-stone-300">Free Delivery</span>
      </div>

      {/* Secure Payment */}
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-emerald-500" />
        <span className="text-xs md:text-sm font-bold text-stone-700 dark:text-stone-300">Secure Payment</span>
      </div>

      {/* 24/7 Support */}
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-emerald-500" />
        <span className="text-xs md:text-sm font-bold text-stone-700 dark:text-stone-300">24/7 Support</span>
      </div>

    </div>
  </div>
</section>
  
          <section className="w-full md:w-1/2 flex justify-center md:justify-end ">
    <div className="w-full max-w-md bg-stone-900/60 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
      <div className="mb-8 text-center ">
        <h2 className="text-3xl font-bold text-primary">PurePick</h2>
        <h3 className="text-2xl font-bold text-white">Welcome Back!</h3>
        
        <p className="text-stone-400 text-xs">
          Sign in to continue your Luxury shopping experience
        </p>
      </div>
  
      <LoginForm/>
      
      <p className="mt-6 text-center text-[15px] text-stone-500">
        New To PurePick ? <Link href={"/register"}> <span className="text-primary font-bold hover:text-primary cursor-pointer transition-colors ml-1">Create an Account</span></Link>
      </p>
    </div>
  </section>
        </div>
      </div>
  
  
  </>
}
