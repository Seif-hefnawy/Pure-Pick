'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Search, 
  Heart, 
  ShoppingCart, 
  Menu, 
  X, 
  Headphones, 
} from 'lucide-react';
import ThemeToggle from '../theme-mode/ThemeToggle';
import CategoriesDropdown from '../dropdown/CategoriesDropdown';
import Authdown from '../dropdown/authdown';
import { usePathname } from 'next/navigation';

export default function Navbar() {



    const path = usePathname()
    
    
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* --- Desktop & Mobile Header --- */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline shadow-sm dark:shadow-none transition-colors duration-300">
        <div className="flex justify-between items-center px-4 md:px-8 h-20 max-w-screen-2xl mx-auto gap-4">
          
          {/* الجانب الأيمن: المنيو (موبايل) واللوجو */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-on-surface hover:bg-on-surface/5 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>

            <div className="text-xl md:text-2xl font-black tracking-tighter text-primary">
              PurePick
            </div>
            <div className="hidden sm:block">
              <ThemeToggle />
            </div>
          </div>
          {/* المنتصف: السيرش بار (يظهر من أول الـ LG) */}

          <div className="hidden lg:flex flex-1 max-w-xl relative items-center">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full h-11 pl-6 pr-12 rounded-full bg-background border border-outline focus:border-primary focus:ring-1 focus:ring-primary outline-none text-on-surface transition-all"
            />
            <button className="absolute right-1 w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-content hover:brightness-110 transition-all">
              <Search size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* الجانب الأيسر: اللينكات والأيقونات */}
          <div className="flex items-center gap-2 md:gap-8 shrink-0">
            {/* اللينكات (ديسك توب) */}
            <div className="hidden xl:flex items-center gap-6 font-body font-medium text-[14px] tracking-wide">
              <Link className={path=== '/' ? `active text-on-surface/70 hover:text-primary transition-colors whitespace-nowrap` : `text-on-surface/70 hover:text-primary transition-colors whitespace-nowrap`} href="/">Home</Link>
              <Link className={path=== '/products' ? `active text-on-surface/70 hover:text-primary transition-colors whitespace-nowrap` : `text-on-surface/70 hover:text-primary transition-colors whitespace-nowrap`} href="/products">Shop</Link>
              <CategoriesDropdown isActive={['/men', '/women', '/beauty', '/electronics', '/categories'].includes(path)} />
              <Link className={path=== '/brands' ? `active text-on-surface/70 hover:text-primary transition-colors whitespace-nowrap` : `text-on-surface/70 hover:text-primary transition-colors whitespace-nowrap`} href="/brands">Brands</Link>
            </div>

            {/* الأيقونات الأساسية */}
            <div className="flex items-center gap-3 md:gap-5 border-l border-outline pl-4 md:pl-6">
              <button className="hidden sm:block text-on-surface/70 hover:text-primary transition-all hover:scale-110">
                <Heart size={22} strokeWidth={1.5} />
              </button>
              <button className="relative text-on-surface/70 hover:text-primary transition-all hover:scale-110">
                <ShoppingCart size={22} strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
              </button>
              <Authdown/>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Sidebar (Drawer) --- */}
      {/* الـ Overlay (الخلفية المظلمة) */}
      <div 
        className={`fixed inset-0 bg-black/50 z-0=60 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* السايد بار نفسه */}
      <aside className={`
        fixed top-0 left-0 h-full w-80 bg-surface z-70 shadow-2xl transition-transform duration-300 ease-in-out p-6 flex flex-col gap-6
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        
        {/* هيدر السايد بار */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-primary font-black text-xl tracking-tighter">
            Fresh Cart
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 hover:bg-on-surface/5 rounded-full border border-outline transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* سيرش بار الموبايل */}
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full h-11 pl-4 pr-12 rounded-lg bg-background border border-outline outline-none focus:border-primary text-sm"
          />
          <button className="absolute right-1 top-1 w-9 h-9 bg-primary text-white rounded-lg flex items-center justify-center">
            <Search size={16} />
          </button>
        </div>

        {/* لينكات الموبايل */}
        <nav className="flex flex-col gap-5 font-body font-semibold text-on-surface/80">
          <Link href="/" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors border-b border-outline pb-2">Home</Link>
          <Link href="/shop" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors border-b border-outline pb-2">Shop</Link>
          <div className="border-b border-outline pb-2 ">
            <CategoriesDropdown isActive={['/men', '/women', '/beauty', '/electronics', '/categories'].includes(path)} />
          </div>
          <Link href="/brands" onClick={() => setIsSidebarOpen(false)} className="hover:text-primary transition-colors border-b border-outline pb-2">Brands</Link>
        </nav>

        {/* Wishlist & Cart (Mobile) */}
        <div className="flex flex-col gap-4 pt-2">
          <Link href="/wishlist" onClick={() => setIsSidebarOpen(false)} className="flex items-center gap-3 text-on-surface/70 font-medium">
            <Heart size={20} className="text-red-500" />
            Wishlist
          </Link>
          <Link href="/cart" onClick={() => setIsSidebarOpen(false)} className="flex items-center justify-between text-on-surface/70 font-medium">
            <div className="flex items-center gap-3">
              <ShoppingCart size={20} className="text-primary" />
              Cart
            </div>
            <span className="bg-primary text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">1</span>
          </Link>
        </div>

        {/* أزرار التسجيل */}
        <div className="flex flex-col gap-3 mt-4">
          <button className="w-full h-12 bg-primary text-primary-content rounded-xl font-bold hover:brightness-110 transition-all">
            Sign In
          </button>
          <button className="w-full h-12 border border-primary text-primary rounded-xl font-bold hover:bg-primary/5 transition-all">
            Sign Up
          </button>
        </div>

        {/* قسم الدعم الفني في الأسفل */}
        <div className="mt-auto p-4 bg-background rounded-2xl flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <Headphones size={20} />
          </div>
          <div>
            <p className="text-[11px] text-on-surface/50 font-bold uppercase tracking-wider">Need Help?</p>
            <p className="text-primary text-sm font-bold">Contact Support</p>
          </div>
        </div>

      </aside>
    </>
  );
}