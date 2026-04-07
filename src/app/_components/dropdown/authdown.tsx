"use client"

import Link from 'next/link';
import { User, LogIn, UserPlus } from 'lucide-react';
import { useState } from 'react';

export default function Authdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* زرار الأيقونة اللي بيفتح القائمة */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 hover:bg-on-surface/5 rounded-full transition-all text-on-surface/70 hover:text-primary cursor-pointer"
      >
        <User size={22} strokeWidth={1.5} />
      </button>

      {/* القائمة المنسدلة (Dropdown) */}
      {isOpen && (
        <>
          {/* طبقة شفافة عشان تقفل المنيو لو دوست في أي حتة بره */}
          <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)}></div>
          
          <div className="absolute right-0 mt-3 w-48 rounded-2xl bg-surface border border-outline shadow-xl z-20 p-3 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col gap-1">
              
              <Link 
                href="/login" 
                className="flex items-center gap-3 p-3 text-on-surface/80 hover:bg-primary/10 hover:text-primary rounded-xl font-medium text-sm transition-all" 
                onClick={() => setIsOpen(false)}
              >
                <LogIn size={18} />
                Sign In
              </Link>

              <Link 
                href="/register" 
                className="flex items-center gap-3 p-3 text-on-surface/80 hover:bg-primary/10 hover:text-primary rounded-xl font-medium text-sm transition-all" 
                onClick={() => setIsOpen(false)}
              >
                <UserPlus size={18} />
                Sign Up
              </Link>

            </div>
          </div>
        </>
      )}
    </div>
  );
}