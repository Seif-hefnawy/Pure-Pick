"use client";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import GlobalLoading from "../loading/GlobalLoading";
import { useCartStore } from "@/store/useCartStore";
import { addToCartApi } from "@/api/Cart.api";


export default function AddToCartButton({ productId }: { productId: string }) {
  const [mounted, setMounted] = useState(false);
  const { cartIds, updateCartCount } = useCartStore();
  const { data: session } = useSession();
  const [isAdding, setIsAdding] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full" />;
  }

  // هنا بنعرف هل المنتج ده موجود في الـ cartIds اللي في الستور؟
  const isAlreadyInCart = cartIds.includes(productId);

  const handleAdd = async (e: React.MouseEvent) => {
    e.preventDefault(); e.stopPropagation();

    if (isAlreadyInCart) return toast.error("Product already in cart!");
    if (!session?.user?.token) return toast.error("Please login first");

    setIsAdding(true);
    const res = await addToCartApi(productId, session.user.token);
    if (res.status === "success") {
      toast.success(res.message);
      await updateCartCount(session.user.token);
    }
    setIsAdding(false);
  };



  return (
    <button
      onClick={handleAdd}
      disabled={isAdding}
      className="absolute bottom-4 right-4 bg-emerald-700 cursor-pointer dark:bg-emerald-800 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg 
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