"use client";
import { Minus, Plus, Trash2 } from "lucide-react";
import { updateCartProductQuantity, removeItemFromCart } from "@/api/Cart.api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useState } from "react";
import { useCartStore } from "@/store/useCartStore"; // 1. استدعاء الستور

export default function CartItemsList({ initialProducts }: { initialProducts: any[] }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loadingId, setLoadingId] = useState<string | null>(null);
  
  // 2. سحب فنكشن التحديث من الستور
  const { updateCartCount } = useCartStore();

  const token = session?.user?.token || "";

  const handleUpdateCount = async (productId: string, count: number) => {
    if (count < 1) return;
    setLoadingId(productId);
    const res = await updateCartProductQuantity(productId, count, token);
    if (res.status === "success") {
      toast.success("Quantity Updated");
      
      // 3. تحديث الستور فوراً عشان الرقم اللي فوق يتغير
      await updateCartCount(token); 
      
      router.refresh(); 
    }
    setLoadingId(null);
  };

  const handleRemove = async (productId: string) => {
    setLoadingId(productId);
    const res = await removeItemFromCart(productId, token);
    if (res.status === "success") {
      toast.success("Item Removed");
      await updateCartCount(token);
      
      router.refresh();
    }
    setLoadingId(null);
  };

  return (
    <div className="space-y-8">
      {initialProducts.map((item) => (
        <div key={item._id} className={`group flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-surface-container-low transition-all ${loadingId === item.product._id ? 'opacity-50 pointer-events-none' : ''}`}>
          <div className="w-full md:w-32 aspect-4/5 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
            <img className="w-full h-full object-cover" src={item.product.imageCover} alt={item.product.title} />
          </div>
          
          <div className="flex flex-col justify-between grow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">{item.product.category?.name}</p>
                <h3 className="text-xl font-bold text-on-surface">{item.product.title.split(' ').slice(0, 4).join(' ')}</h3>
              </div>
              <p className="text-xl font-medium">{item.price} EGP</p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4 bg-surface-container-high px-4 py-2 rounded-full">
                <button 
                  onClick={() => handleUpdateCount(item.product._id, item.count - 1)}
                  className="text-on-surface-variant hover:text-on-surface cursor-pointer p-1"
                >
                  <Minus className="w-4 h-4" />
                </button>
                
                <span className="text-sm font-bold w-4 text-center">{item.count}</span>
                <button 
                  onClick={() => handleUpdateCount(item.product._id, item.count + 1)}
                  className="text-on-surface-variant hover:text-on-surface cursor-pointer p-1"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button 
                onClick={() => handleRemove(item.product._id)}
                className="text-xs font-bold uppercase tracking-widest text-error hover:underline transition-all flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}