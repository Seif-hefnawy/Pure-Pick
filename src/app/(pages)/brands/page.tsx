// app/brands/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getBrands } from '@/api/Brand.api';
import DynamicSectionHeader from '@/app/_components/pageheader/DynamicSectionHeader';



export default async function BrandsPage() {
  const brands = await getBrands();

  return (
    <div className="max-w-7xl mx-auto px-4 py-5">
      <DynamicSectionHeader className="my-10 pt-5" title="" subtitle="All Brands" />
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand: any) => (
          <Link 
            href={`/brands/${brand._id}`} 
            key={brand._id}
            className="group border border-stone-200 dark:border-stone-800 rounded-xl p-4 transition-all hover:shadow-xl hover:border-emerald-600 flex flex-col items-center"
          >
            <div className="relative w-full aspect-square mb-4">
              <Image 
                src={brand.image} 
                alt={brand.name} 
                fill 
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
            <p className="font-semibold text-on-surface">{brand.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}