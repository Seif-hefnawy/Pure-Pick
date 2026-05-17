import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const CategoryCard = ({ title, img, href }: { title: string, img: string, href: string }) => (
  <Link 
    href={href} 
    className="group bg-white rounded-xl border border-gray-100 p-2 sm:p-3 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center w-full">
    <div className="relative w-full aspect-square mb-2 overflow-hidden rounded-lg bg-gray-50">
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 768px) 50vw, 20vw"
        className="object-contain p-1 group-hover:scale-105 transition-transform"
      />
      <div className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <ArrowUpRight className="w-4 h-4 text-primary" strokeWidth={3} />
      </div>
    </div>
    <div className="flex flex-col items-center gap-1 w-full">
      <h3 className="text-center font-bold text-[11px] md:text-[13px] uppercase tracking-wider text-gray-800 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <div className="w-0 h-0.5 bg-primary rounded-full group-hover:w-8 transition-all duration-500" />
    </div>
  </Link>
);