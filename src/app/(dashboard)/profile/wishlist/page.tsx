"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { getUserWishlistApi } from "@/api/wishlist.api";
import { Heart, ShoppingBag} from "lucide-react";
import Link from "next/link";
import SingleCard from "@/app/_components/singlecard/SingleCard";
import { useWishlistStore } from "@/store/wishlistStore";
import GlobalLoading from "@/app/_components/loading/GlobalLoading";

interface Product {
  id: string;
  title: string;
  price: number;
  imageCover: string;
  category: { name: string };
  ratingsAverage?: number;
}

export default function WishlistPage() {
  const { data: session } = useSession();
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // نداء الـ IDs من الـ Store
  const wishlistIds = useWishlistStore((state) => state.wishlistIds);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!session?.user?.token) return;
      try {
        const res = await getUserWishlistApi(session.user.token);
        if (res.status === "success") setWishlistItems(res.data);
      } catch (error) {
        console.error("Wishlist Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchWishlist();
  }, [session]);


  const displayedItems = wishlistItems.filter((product) => 
    wishlistIds.includes(product.id)
  );

 
  const totalValue = displayedItems.reduce((acc, item) => acc + item.price, 0);

  if (isLoading) {
    return (
      <GlobalLoading/>
    );
  }


  if (displayedItems.length === 0) { 
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 relative overflow-hidden">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60" />
  <div className="relative mb-8">
    <div className="w-24 h-24 bg-white rounded-2xl shadow-xl shadow-neutral-200/50 flex items-center justify-center rotate-12 transition-transform hover:rotate-0 duration-500">
      <Heart 
        className="text-emerald-600 fill-emerald-50" 
        size={42} 
        strokeWidth={1.5} 
      />
    </div>
    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white shadow-lg">
      <Heart size={14} fill="currentColor" />
    </div>
  </div>

  {/* النصوص */}
  <h2 className="text-3xl font-bold text-on-surface mb-2 tracking-tight">
    Nothing saved yet
  </h2>
  <p className="text-neutral-500 max-w-[320px] text-center mb-10 leading-relaxed">
    Your wishlist is looking a bit lonely. Explore our collection and save the pieces you love!
  </p>
  <Link
    href="/"
    className="group relative inline-flex items-center justify-center px-8 py-3 font-semibold text-white transition-all duration-200 bg-emerald-700 rounded-full hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-700/30 active:scale-95"
  >
    <span className="mr-2">Start Exploring</span>
    <Heart className="w-4 h-4 transition-transform group-hover:scale-125" fill="currentColor" />
  </Link>
</div>
    );
  }

  return (
    <section className="py-12 bg-background md:py-16 rounded-lg min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 pb-6 flex justify-between items-end">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary">
              Wishlist
            </h1>
            <p className="text-neutral-500 text-sm mt-1">
              Saved items in your collection
            </p>
          </div>
          <p className="text-sm font-medium text-emerald-700 uppercase tracking-tighter">
            {displayedItems.length} <span className="ps-2">Items</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Products Grid */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10">
              {displayedItems.map((product) => (
                <div
                  key={product.id}
                  className="w-full max-w-[300px] mx-auto lg:mx-0"
                >
                  <SingleCard currentProduct={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Summary */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="bg-surface rounded-2xl p-6 sticky top-24 ">
              <h3 className="text-lg font-bold mb-4 text-primary">Summary</h3>
              <div className="space-y-3 border-b border-neutral-200 pb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Total Price</span>
                  <span className="font-bold text-primary">
                    {totalValue.toLocaleString()} EGP
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-neutral-500 font-medium">Items Count</span>
                  <span className="font-bold text-primary">{displayedItems.length}</span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-emerald-700 text-white rounded-xl font-semibold text-sm hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2">
                <ShoppingBag size={18} />
                Move All to Bag
              </button>

              <p className="text-[11px] text-neutral-400 mt-4 leading-relaxed text-center italic">
                Prices and availability are subject to change.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}