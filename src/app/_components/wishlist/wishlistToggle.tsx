"use client";
import { Heart } from "lucide-react";

import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { addToWishlistApi, removeFromWishlistApi } from "@/api/wishlist.api";
import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistToggle({ productId }: { productId: string }) {
  const { data: session } = useSession();
  const { wishlistIds, addToWishlist, removeFromWishlist } = useWishlistStore();

  const isLiked = wishlistIds.includes(productId);

  const handleToggle = async (e: React.MouseEvent) => {
    e.preventDefault(); // عشان لو الكارت جوه Link مياخدناش لصفحة تانية
    console.log("Heart Clicked! Product ID:", productId);
    
    if (!session?.user?.token) {
      return toast.error("Please login to add to wishlist");
    }

    try {
      if (isLiked) {
        removeFromWishlist(productId);
        await removeFromWishlistApi(productId, session.user.token);
        toast.success("Removed from wishlist");
      } else {
        addToWishlist(productId);
        const res = await addToWishlistApi(productId, session.user.token);
        if (res.status === "success") {
          toast.success("Added to wishlist ❤️");
        }
      }
    } catch (error) {
      // لو حصل ايرور نرجع الحالة زي ما كانت (Rollback)
      isLiked ? addToWishlist(productId) : removeFromWishlist(productId);
      toast.error("Failed to update wishlist");
    }
  };

  return (
    <button 
      onClick={handleToggle}
      className=" p-1.5 rounded-full  cursor-pointer hover:scale-110 transition-transform"
    >
      <Heart 
        size={18} 
        className={`transition-colors ${isLiked ? "fill-red-600 text-red-600" : "text-emerald-700"}`} 
      />
    </button>
  );
}

