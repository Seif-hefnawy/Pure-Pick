"use client";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import GlobalLoading from "../loading/GlobalLoading";
import { useCartStore } from "@/store/useCartStore";
import { addToCartApi } from "@/api/Cart.api";

export default function AddToCartButton({ productId }: { productId: string }) {
  const [isAdding, setIsAdding] = useState(false);
  const { data: session } = useSession();
  
  const incrementCart = useCartStore((state) => state.incrementCart);

  const handleAdd = async () => {
    if (!session?.user?.token) {
      return toast.error("Please login to add items to cart");
    }

    setIsAdding(true);
    try {
      const res = await addToCartApi(productId, session.user.token);
      if (res.status === "success") {
       
        toast.success(res.message);
         incrementCart();
        // تحديث الرقم في الـ Zustand Store
       
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <button
      onClick={handleAdd}
      disabled={isAdding}
      className="absolute bottom-4 right-4 bg-emerald-700 dark:bg-emerald-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg 
      max-md:opacity-100 max-md:translate-y-0 max-md:scale-90
      md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 
      transition-all duration-300"
    >
      {isAdding ? (
        <div className="scale-[0.15]">
             <GlobalLoading />
        </div>
      ) : (
        <ShoppingCart size={18} />
      )}
    </button>
  );
}