import SingleCard from "@/app/_components/singlecard/SingleCard";
import { getAllProducts } from "@/api/Allproduct.api";

export default async function BrandDetailsPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  
  // 1. Destructure الـ id من الـ params بعد الـ await
  const { id } = await params;

  const allProducts = await getAllProducts();

  // 2. Filter للمنتجات
  const products = allProducts.filter((product: any) => product.brand?._id === id);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-emerald-800">
        Brand Products: ({products.length})
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => {
          // 3. Destructure لبيانات المنتج جوه الـ map عشان لو حبيت تستخدمهم هنا
          const { id, title, price, imageCover, category, ratingsAverage } = product;

          return (
            <div key={id}>
               <SingleCard currentProduct={product} />
            </div>
          );
        })}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20 bg-stone-50 dark:bg-stone-900/50 rounded-2xl border-2 border-dashed border-stone-200 dark:border-stone-800">
          <p className="text-stone-500 font-medium">No products found for this brand.</p>
        </div>
      )}
    </div>
  );
}
