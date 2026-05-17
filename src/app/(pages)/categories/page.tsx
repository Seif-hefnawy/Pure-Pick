import { CategoryCard } from '@/app/_components/CategorieSlider/CategoryCard';
import DynamicSectionHeader from '@/app/_components/pageheader/DynamicSectionHeader'

import { getCategorie } from '@/api/Categorie.api';




export default async function CategoriesPage() {
  const {data} = await getCategorie()
  console.log("ccc", data);
  
  return (
    <>
      <DynamicSectionHeader title="" subtitle="Categories" />
      <section className="py-10 px-4 md:px-6 max-w-350 mx-auto overflow-hidden">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full">
    {data?.slice(0, 10).map((category: any) => (
      <CategoryCard 
        key={category._id} 
        title={category.name} 
        img={category.image} 
        href={`/categories/${category._id}`} 
      />
    ))}
  </div>
</section>
    </>
  );
}