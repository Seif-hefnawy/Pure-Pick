"use client";

import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"; // بنحتاجها عشان الـ Token
import { useCartStore } from "@/store/useCartStore"; // عشان نحدث العداد
import { addToCartApi } from "@/api/Cart.api"; // الـ API اللي عملناه
import toast from "react-hot-toast";

// ضيف productId للـ props هنا
export default function ProductAction({ price, productId }: { price: number; productId: string }) {
  const [count, setCount] = useState(1);
  const [isAdding, setIsAdding] = useState(false); // حالة الـ Loading للزرار
  const { data: session } = useSession();
  const updateCartCount = useCartStore((state) => state.updateCartCount);
  const { cartIds } = useCartStore();
const isAlreadyInCart = cartIds.includes(productId);

  // دالة الإضافة للكارت
  const handleAddToCart = async () => {
    if (!session?.user?.token) {
      return toast.error("Please login to add items to cart");
    }

    setIsAdding(true);
    try {
      console.log("جاري الإرسال للـ API...");
      const res = await addToCartApi(productId, session.user.token);
      
      console.log("رد السيرفر الكامل:", res); // ده أهم سطر دلوقتي

      if (res.status === "success") {
        toast.success(res.message);
        await updateCartCount(session.user.token);
        console.log("تم تحديث الستور بنجاح");
      } else {
        // لو السيرفر رد بس الحالة مش success
        toast.error(res.message || "Failed to add product");
        console.error("فشل في الإضافة:", res);
      }
    } catch (error) {
      // لو فيه مشكلة في الشبكة أو الـ URL غلط
      console.error("خطأ تقني (Network/URL):", error);
      toast.error("Something went wrong with the connection");
    } finally {
      setIsAdding(false);
    }
  };

  const [isWishlisted, setIsWishlisted] = useState(false);
  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  useEffect(() => {
    if (count === 0) {
      setIsWishlisted(false);
    }
  }, [count]);

  return (
    <>
      <div className="bg-primary-content border border-outline-variant rounded-lg p-4 mb-1">
        <div className="flex justify-between items-center">
          <span className="text-on-surface">Total Price:</span>
          <span className="text-1xl font-bold text-primary-600">
            {price * count}
          </span>
        </div>
      </div>

      <div className="space-y-8 mb-5 mt-3">
        <div className="flex gap-3 mb-4">
          {/* العداد */}
          <div className="flex items-center bg-surface-container rounded-lg px-4 border border-outline-variant ">
            <button
              disabled={count === 0}
              onClick={() => setCount((prev) => (prev > 1 ? prev - 1 : 0))}
              className={`p-2 text-white hover:text-primary cursor-pointer ${count === 0 ? "opacity-30 cursor-not-allowed" : ""}`}
            >
              <Minus />
            </button>
            <span className="px-4 font-bold text-white">{count}</span>
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="p-2 text-white hover:text-primary cursor-pointer"
            >
              <Plus />
            </button>
          </div>

          {/* زرار الإضافة الكبير - تم الربط هنا */}
          <button
            onClick={handleAddToCart} // ربط الفانكشن
            disabled={count === 0 || isAdding} // ديسيبل لو بنضيف أو الكاونت 0
            className="flex-1 bg-primary text-primary-content cursor-pointer font-bold rounded-lg py-4 hover:scale-[1.02] transition-all shadow-lg shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAdding ? "ADDING..." : "ADD TO CART"}
          </button>
        </div>

        {/* زرار الويش ليست */}
        <button
          disabled={count === 0}
          onClick={toggleWishlist}
          className={`w-full rounded-full py-3 font-bold px-2 transition-all shadow-lg cursor-pointer 
            ${count === 0 ? "opacity-50 cursor-not-allowed " : ""} 
            ${isWishlisted ? "bg-red-500 text-white" : "bg-primary text-white"}`}
        >
          {isWishlisted ? "IN WISHLIST" : "ADD TO WISHLIST"}
        </button>
      </div>
    </>
  );
}