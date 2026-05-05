"use client";

import Link from 'next/link';
import { 
  User, LogIn, UserPlus, LogOut, 
  Package, MapPin, Heart, Settings, UserCircle 
} from 'lucide-react';
import { useState } from 'react';
import { useSession, signOut } from 'next-auth/react';

export default function Authdown() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const user = session?.user;
  const isAuthenticated = status === "authenticated";

  // مصفوفة الروابط لتسهيل الصيانة وتعديل المسارات
  const menuItems = [
    { label: 'My Profile', icon: UserCircle, href: '/profile' },
    { label: 'My Orders', icon: Package, href: '/orders' },
    { label: 'My Addresses', icon: MapPin, href: '/profile/addresses' },
    { label: 'My Wishlist', icon: Heart, href: '/wishlist' },
    { label: 'Settings', icon: Settings, href: '/profile/settings' },
  ];

  return (
    <div className="relative">
      {/* زرار البروفايل الرئيسي */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 hover:bg-primary/5 rounded-full transition-all text-on-surface hover:text-primary cursor-pointer"
      >
        <User size={22} strokeWidth={1.5} />
      </button>

      {isOpen && (
        <>
          {/* خلفية شفافة لغلق القائمة عند الضغط خارجها */}
          <div 
            className="fixed inset-0 z-10 cursor-pointer overflow-hidden" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          <div className="absolute -right-5 mt-3 w-48 rounded-2xl bg-[#121212] border border-white/10 shadow-2xl z-20 p-2 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col gap-1">
              
              {isAuthenticated ? (
                <>
                  {/* معلومات المستخدم */}
                  <div className="flex items-center gap-3 p-3 mb-2 border-b border-white/5">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-primaryfont-bold text-sm border border-emerald-500/20">
                      {user?.name?.charAt(0).toUpperCase() || "U"}
                      
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-sm font-bold text-white line-clamp-1">
                        {user?.name}
                      </span>
                      <span className="text-[10px] text-stone-500 truncate">
                        {user?.email}
                      </span>
                    </div>
                  </div>

                  {/* روابط التنقل السريع باستخدام Next Link */}
                  <div className="flex flex-col gap-0.5">
                    {menuItems.map((item, index) => (
                      <Link 
                        key={index}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2.5 text-stone-400 hover:bg-white/5 hover:text-white rounded-xl text-sm transition-all group"
                      >
                        <item.icon size={18} className="group-hover:text-emerald-500 transition-colors" />
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <div className="my-2 border-t border-white/5"></div>

                  {/* تسجيل الخروج */}
                  <button 
                    onClick={() => {
                      signOut({ callbackUrl: "/login" });
                      setIsOpen(false);
                    }}
                    className="flex items-center cursor-pointer gap-3 px-3 py-2.5 text-red-400 hover:bg-red-500/10 rounded-xl text-sm font-medium transition-all w-full text-left"
                  >
                    <LogOut size={18} />
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  {/* أزرار الدخول لو مش مسجل */}
                  <Link 
                    href="/login" 
                    className="flex items-center gap-3 p-3 text-stone-300 hover:bg-primary/5 hover:text-primary rounded-xl text-sm transition-all" 
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn size={18} />
                    Sign In
                  </Link>

                  <Link 
                    href="/register" 
                    className="flex items-center gap-3 p-3 text-stone-300 hover:bg-primary/5 hover:text-primary rounded-xl text-sm transition-all" 
                    onClick={() => setIsOpen(false)}
                  >
                    <UserPlus size={18} />
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}