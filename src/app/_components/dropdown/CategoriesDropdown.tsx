"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
interface Props {
  isActive?: boolean;
}
export default function CategoriesDropdown({ isActive }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 cursor-pointer transition-all duration-300 ${
          isActive
            ? "text-emerald-700 dark:text-emerald-400 font-bold border-b-2 border-emerald-700 pb-1"
            : "text-stone-600 dark:text-stone-400 hover:text-emerald-800"
        }`}
      >
        <span className="tracking-tighter text-on-surface/70 hover:text-primary">Categories</span>

        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-3 w-64 rounded-2xl bg-surface border border-outline shadow-xl z-50 p-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/categories"
              className="text-on-surface/80 hover:text-primary font-medium text-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              All Categories
            </Link>

            <Link
              href="/categories/electronics"
              className="text-on-surface/80 hover:text-primary font-medium text-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              Electronics
            </Link>

            <Link
              href="/categories/women"
              className="text-on-surface/80 hover:text-primary font-medium text-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              Womens Fashion
            </Link>

            <Link
              href="/categories/men"
              className="text-on-surface/80 hover:text-primary font-medium text-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              Mens Fashion
            </Link>

            <Link
              href="/categories/beauty"
              className="text-on-surface/80 hover:text-primary font-medium text-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              Beauty & Health
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
