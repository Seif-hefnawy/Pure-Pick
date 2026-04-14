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
    <div className="relative w-full md:w-auto  ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-between md:justify-start w-full md:w-auto gap-1.5 cursor-pointer transition-all duration-300 ${
          isActive
            ? "text-emerald-700  font-bold border-b-2 border-emerald-700 pb-1"
            : " hover:text-emerald-800"
        }`}
      >
        <span className="text-on-surface/80 hover:text-primary  tracking-tighter font-medium text-sm transition-all">Categories</span>

        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="absolute top-0 left-25 md:left-0 md:top-full mt-5 md:mt-3 w-48 md:w-64 rounded-2xl bg-surface border border-outline shadow-2xl z-[100] p-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/categories"
              className="text-on-surface/80 hover:text-primary font-medium text-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              All Categories
            </Link>

            <Link
              href="/categories/6439d2d167d9aa4ca970649f"
              className="text-on-surface/80 hover:text-primary font-medium text-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              Electronics
            </Link>

            <Link
              href="/categories/6439d58a0049ad0b52b9003f"
              className="text-on-surface/80 hover:text-primary font-medium text-sm transition-all"
              onClick={() => setIsOpen(false)}
            >
              Womens Fashion
            </Link>

            <Link
              href="/categories/6439d5b90049ad0b52b90048"
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
